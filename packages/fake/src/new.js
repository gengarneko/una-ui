const process = require('process')
const { exec } = require('child_process')
const util = require('util')
const { existsSync, writeFileSync, mkdirSync } = require('fs')
const path = require('path')
const execAsync = util.promisify(exec)
const {
  parse,
  addDays,
  addYears,
  isWeekend,
  setHours,
  setMinutes,
  setSeconds,
} = require('date-fns')
const chalk = require('chalk')
const ora = require('ora')
const boxen = require('boxen')
const fs = require('fs')

// 定义提交类型和文件模板
const COMMIT_TEMPLATES = [
  {
    type: 'feat',
    scopes: ['ui', 'style', 'test', 'doc', 'storybook', 'types'],
    files: {
      'src/components/': [
        'accordion',
        'alert',
        'alert-dialog',
        'aspect-ratio',
        'avatar',
        'badge',
        'breadcrumb',
        'button',
        'calendar',
        'card',
        'carousel',
        'checkbox',
        'collapsible',
        'command',
        'context-menu',
        'dialog',
        'drawer',
        'dropdown-menu',
        'form',
        'hover-card',
        'input',
        'input-otp',
        'label',
        'menubar',
        'navigation-menu',
        'pagination',
        'popover',
        'progress',
        'radio-group',
        'resizable',
        'scroll-area',
        'select',
        'separator',
        'sheet',
        'skeleton',
        'slider',
        'switch',
        'table',
        'textarea',
        'toast',
        'toggle',
        'toggle-group',
        'tooltip',
        'typography',
      ],
      // 'src/utils/': ['helper', 'request', 'storage', 'validator'],
    },
    messages: [
      'add {name} component, finish {name} style & test',
      'implement {name} feature, opt performance',
      'add {name} module, improve test coverage',
      'update {name} docs, fix typos',
      'update {name} style, improve UI',
      'refactor {name} code, improve readability',
      'optimize {name} bundle size, improve performance',
      'add {name} storybook, update docs',
      'add {name} tests, improve code coverage',
    ],
  },
  {
    type: 'fix',
    scopes: ['bug', 'style', 'types'],
    files: {
      'src/storybook-utils/': ['primitive-docs-button'],
      'src/utils/': ['cn', 'globalStyles', 'themes', 'tokens'],
    },
    messages: [
      'fix {name} bug, improve test coverage',
      'adjust {name} style, improve UI',
      'optimize {name} logic, improve performance',
    ],
  },
]

async function createCommit(date, template, repoPath) {
  const type = template.type
  const scope =
    template.scopes[Math.floor(Math.random() * template.scopes.length)]

  // 随机选择要修改的文件夹
  const folders = Object.keys(template.files)
  const folder = folders[Math.floor(Math.random() * folders.length)]
  const fileNames = template.files[folder]
  const fileName = fileNames[Math.floor(Math.random() * fileNames.length)]

  // 构建完整的文件夹路径
  const folderPath = path.join(repoPath, folder, fileName)

  // 检查是否是文件夹
  if (existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
    // 如果是文件夹，获取其中的所有 .ts/.tsx/.js/.jsx 文件
    const files = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(ts|tsx|js|jsx)$/.test(file))
      .map((file) => path.join(folderPath, file))

    // 检查是否是文件夹并查找同名文件
    if (existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
      // 尝试查找同名文件（支持多种扩展名）
      const possibleFiles = [
        path.join(folderPath, `${fileName}.tsx`),
        path.join(folderPath, `${fileName}.ts`),
        path.join(folderPath, `${fileName}.mdx`),
        path.join(folderPath, `${fileName}.stories.tsx`),
        path.join(folderPath, `index.tsx`),
        path.join(folderPath, `index.ts`),
      ]

      // console.log('尝试查找以下文件:');  // 调试日志
      // possibleFiles.forEach(file => console.log(`- ${file}`));

      const targetFile = possibleFiles.find((file) => existsSync(file))

      if (targetFile) {
        // console.log(`找到文件: ${targetFile}`);  // 调试日志

        // 读取现有文件内容
        const currentContent = fs.readFileSync(targetFile, 'utf-8')

        // 添加一些随机的注释或小改动
        const updatedContent =
          currentContent +
          `\n// Updated at ${date}\n` +
          `// Random change for ${type}(${scope})\n`

        // 写入修改后的内容
        writeFileSync(targetFile, updatedContent)

        // 执行 git 命令
        await execAsync(`git add "${targetFile}"`)
      } else {
        console.log(`没有找到文件: ${targetFile}`) // 调试日志
        // 如果文件夹中没有可修改的文件，创建一个新文件
        const newFile = path.join(folderPath, 'index.ts')
        const fileContent =
          `// ${fileName} - Created at ${date}\n` +
          `// This is a sample file for ${type}(${scope})\n` +
          `export const ${fileName} = {\n` +
          `  name: '${fileName}',\n` +
          `  created: '${date}'\n` +
          `};\n`

        writeFileSync(newFile, fileContent)
        await execAsync(`git add "${newFile}"`)
      }
    } else {
      // 如果是文件，直接修改
      const filePath = `${folderPath}.tsx`
      if (existsSync(filePath)) {
        const currentContent = fs.readFileSync(filePath, 'utf-8')
        const updatedContent =
          currentContent +
          `\n// Updated at ${date}\n` +
          `// Random change for ${type}(${scope})\n`

        writeFileSync(filePath, updatedContent)
      } else {
        // 如果文件不存在，创建新文件
        const fileContent =
          `// ${fileName} - Created at ${date}\n` +
          `// This is a sample file for ${type}(${scope})\n` +
          `export const ${fileName} = {\n` +
          `  name: '${fileName}',\n` +
          `  created: '${date}'\n` +
          `};\n`

        writeFileSync(filePath, fileContent)
      }
      await execAsync(`git add "${filePath}"`)
    }

    // 生成提交信息
    const message = template.messages[
      Math.floor(Math.random() * template.messages.length)
    ].replace('{name}', fileName)

    // 执行 git commit 命令
    await execAsync(
      `git commit --quiet --date "${date}" -m "${type}(${scope}): ${message}"`,
    )
  }
}

module.exports = function ({
  commitsPerDay,
  workdaysOnly,
  startDate,
  endDate,
  repoPath,
}) {
  if (!repoPath) {
    throw new Error('需要提供 una-ui 仓库的路径')
  }

  const commitDateList = createCommitDateList({
    workdaysOnly,
    commitsPerDay: commitsPerDay.split(','),
    startDate: startDate ? parse(startDate) : addYears(new Date(), -1),
    endDate: endDate ? parse(endDate) : new Date(),
  })

  ;(async function () {
    const spinner = ora('正在生成 GitHub 活动记录\n').start()
    let currentBranch
    let simulateBranch

    try {
      // 检查仓库路径是否存在
      if (!existsSync(repoPath)) {
        throw new Error('仓库路径不存在！')
      }

      // 检查是否是 git 仓库
      const isGitRepo = await execAsync('git rev-parse --git-dir', {
        cwd: repoPath,
      }).catch(() => false)

      if (!isGitRepo) {
        throw new Error(`${repoPath} 不是一个有效的 git 仓库！`)
      }

      // 保存当前工作目录
      const currentDir = process.cwd()

      // 切换到仓库目录
      process.chdir(repoPath)

      // 保存当前分支名
      currentBranch = (
        await execAsync('git rev-parse --abbrev-ref HEAD')
      ).stdout.trim()

      // 创建新的分支进行模拟提交
      simulateBranch = `simulate-${Date.now()}`
      await execAsync(`git checkout -b ${simulateBranch}`)

      // 创建提交
      for (const date of commitDateList) {
        const dateFormatted = new Intl.DateTimeFormat('zh-CN', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(date)

        // spinner.text = `正在生成提交记录... (${dateFormatted})\n`;

        const template =
          COMMIT_TEMPLATES[Math.floor(Math.random() * COMMIT_TEMPLATES.length)]
        await createCommit(date, template, repoPath)
      }

      // 切换回原来的分支
      await execAsync(`git checkout ${currentBranch}`)

      // 恢复原来的工作目录
      process.chdir(currentDir)

      spinner.succeed()
      console.log(
        boxen(
          `${chalk.green('成功')} 已在分支 ${simulateBranch} 上创建 ${commitDateList.length} 个提交记录。`,
          { borderColor: 'yellow', padding: 1, align: 'center' },
        ),
      )
    } catch (error) {
      spinner.fail(`发生错误: ${error.message}`)

      // 改进的清理过程
      try {
        if (existsSync(repoPath)) {
          process.chdir(repoPath)
          if (currentBranch) {
            await execAsync(`git checkout ${currentBranch}`)
          }
          if (simulateBranch) {
            await execAsync(`git branch -D ${simulateBranch}`)
          }
        }
      } catch (cleanupError) {
        console.error('清理过程中发生错误:', cleanupError.message)
      }
    }
  })()
}

// 保持原有的辅助函数不变
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createCommitDateList({
  commitsPerDay,
  workdaysOnly,
  startDate,
  endDate,
}) {
  const commitDateList = []
  let currentDate = startDate

  while (currentDate <= endDate) {
    if (workdaysOnly && isWeekend(currentDate)) {
      currentDate = addDays(currentDate, 1)
      continue
    }

    let n = getRandomIntInclusive(...commitsPerDay)

    for (let i = 0; i < n; i++) {
      const dateWithHours = setHours(currentDate, getRandomIntInclusive(9, 16))
      const dateWithHoursAndMinutes = setMinutes(
        dateWithHours,
        getRandomIntInclusive(0, 59),
      )
      const commitDate = setSeconds(
        dateWithHoursAndMinutes,
        getRandomIntInclusive(0, 59),
      )

      commitDateList.push(commitDate)
    }
    currentDate = addDays(currentDate, 1)
  }

  return commitDateList
}

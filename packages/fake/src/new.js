const process = require("process");
const { exec } = require("child_process");
const util = require("util");
const { existsSync, writeFileSync, mkdirSync } = require("fs");
const path = require("path");
const execAsync = util.promisify(exec);
const {
  parse,
  addDays,
  addYears,
  isWeekend,
  setHours,
  setMinutes,
  setSeconds
} = require("date-fns");
const chalk = require("chalk");
const ora = require("ora");
const boxen = require("boxen");

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
        'typography'
      ],
      'src/utils/': ['helper', 'request', 'storage', 'validator'],
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
    ]
  },
  {
    type: 'fix',
    scopes: ['bug', 'style', 'types'],
    files: {
      'src/styles/': ['theme', 'variables', 'mixins', 'reset'],
      'src/types/': ['index', 'components', 'utils', 'store'],
      'tests/': ['unit', 'e2e', 'integration']
    },
    messages: [
      'fix {name} bug, improve test coverage',
      'adjust {name} style, improve UI',
      'optimize {name} logic, improve performance'
    ]
  }
];

async function createCommit(date, template, historyFolder) {
  // 随机选择提交类型和范围
  const type = template.type;
  const scope = template.scopes[Math.floor(Math.random() * template.scopes.length)];

  // 随机选择文件路径和名称
  const folders = Object.keys(template.files);
  const folder = folders[Math.floor(Math.random() * folders.length)];
  const fileNames = template.files[folder];
  const fileName = fileNames[Math.floor(Math.random() * fileNames.length)];

  // 生成文件内容
  const fileContent = `// ${fileName} - Created at ${date}\n` +
    `// This is a sample file for ${type}(${scope})\n` +
    `export const ${fileName} = {\n` +
    `  name: '${fileName}',\n` +
    `  created: '${date}'\n` +
    `};\n`;

  // 确保目录存在
  const fullPath = path.join(historyFolder, folder);
  mkdirSync(fullPath, { recursive: true });

  // 写入文件
  const filePath = path.join(fullPath, `${fileName}.ts`);
  writeFileSync(filePath, fileContent);

  // 生成提交信息
  const message = template.messages[Math.floor(Math.random() * template.messages.length)]
    .replace('{name}', fileName);

  // 执行 git 命令
  await execAsync(`git add "${filePath}"`);
  await execAsync(`git commit --quiet --date "${date}" -m "${type}(${scope}): ${message}"`);
}

module.exports = function({ commitsPerDay, workdaysOnly, startDate, endDate }) {
  const commitDateList = createCommitDateList({
    workdaysOnly,
    commitsPerDay: commitsPerDay.split(","),
    startDate: startDate ? parse(startDate) : addYears(new Date(), -1),
    endDate: endDate ? parse(endDate) : new Date()
  });

  (async function() {
    const spinner = ora("正在生成 GitHub 活动记录\n").start();
    const historyFolder = "my-history";

    // 删除已存在的历史文件夹
    if (existsSync(`./${historyFolder}`)) {
      await execAsync(
        `${process.platform === "win32" ? "rmdir /s /q" : "rm -rf"} ${historyFolder}`
      );
    }

    // 创建新的历史文件夹并初始化 git
    await execAsync(`mkdir ${historyFolder}`);
    process.chdir(historyFolder);
    await execAsync(`git init`);

    // 创建提交
    for (const date of commitDateList) {
      const dateFormatted = new Intl.DateTimeFormat("zh-CN", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(date);

      spinner.text = `正在生成提交记录... (${dateFormatted})\n`;

      // 随机选择提交模板
      const template = COMMIT_TEMPLATES[Math.floor(Math.random() * COMMIT_TEMPLATES.length)];
      await createCommit(date, template, historyFolder);
    }

    spinner.succeed();

    console.log(
      boxen(
        `${chalk.green("成功")} 已创建 ${commitDateList.length} 个提交记录。`,
        { borderColor: "yellow", padding: 1, align: "center" }
      )
    );
  })();
};

// 保持原有的辅助函数不变
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCommitDateList({
  commitsPerDay,
  workdaysOnly,
  startDate,
  endDate
}) {
  const commitDateList = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    if (workdaysOnly && isWeekend(currentDate)) {
      currentDate = addDays(currentDate, 1);
      continue;
    }

    let n = getRandomIntInclusive(...commitsPerDay);

    for (let i = 0; i < n; i++) {
      const dateWithHours = setHours(currentDate, getRandomIntInclusive(9, 16));
      const dateWithHoursAndMinutes = setMinutes(
        dateWithHours,
        getRandomIntInclusive(0, 59)
      );
      const commitDate = setSeconds(
        dateWithHoursAndMinutes,
        getRandomIntInclusive(0, 59)
      );

      commitDateList.push(commitDate);
    }
    currentDate = addDays(currentDate, 1);
  }

  return commitDateList;
}
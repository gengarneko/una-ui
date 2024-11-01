#!/usr/bin/env node

const meow = require('meow')
const fgh = require('./new')
const path = require('path')
const projectRoot = path.resolve(__dirname, '../../../packages/ui') // 获取项目根目录

const cli = meow(
  `
    Usage
      $ fake-git-history [options]

    Options
      --workdaysOnly, -w Use this option if you don't want to commit on weekends.
      --commitsPerDay, -c Customize the number of commits per day.
      --startDate, -s Start date in yyyy/MM/dd format.
      --endDate, -e End date yyyy/MM/dd format.

    Examples
      $ fake-git-history --workdaysOnly
      $ fake-git-history --commitsPerDay "0,3"
      $ fake-git-history --startDate yyyy/MM/dd --endDate yyyy/MM/dd
`,
  {
    flags: {
      startDate: {
        type: 'string',
        alias: 's',
      },
      endDate: {
        type: 'string',
        alias: 'e',
      },
      workdaysOnly: {
        type: 'boolean',
        alias: 'w',
        default: 'false',
      },
      commitsPerDay: {
        type: 'string',
        alias: 'c',
        default: '0,3',
      },
    },
  },
)

// fgh(cli.flags);
fgh({
  commitsPerDay: '1,5', // 每天1-5次提交
  workdaysOnly: true, // 仅工作日提交
  startDate: '2023-01-01',
  endDate: '2024-09-31',
  repoPath: projectRoot, // una-ui 仓库的实际路径
})

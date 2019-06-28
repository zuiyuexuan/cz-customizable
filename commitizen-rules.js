var fs = require('fs');
var path = require('path');

let messagePath = path.resolve('.git', 'COMMIT_EDITMSG')
let commitMsg = fs.readFileSync(messagePath, 'utf-8').trim()

var pattern = /^.+#\w+\s{1}\w+(\(.+\))?:(.+)|(\r\n)|(\n)$/g;

if (!pattern.test(commitMsg)) {
  console.log('\x1B[34m%s\x1b[0m',' \n '+commitMsg);
  console.log('\x1B[31m%s\x1b[0m',' 提交代码信息不符合规范，应按照：空间简称#卡片ID 类型: 描述');
  console.log('\x1B[32m%s\x1b[0m',' 例如：ARES#18 feat: 新增组件');

  process.exit(1);
}
process.exit(0);
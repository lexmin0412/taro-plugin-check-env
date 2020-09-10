"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child = require('child_process');
const utils_1 = require("./utils");
exports.default = (ctx, options) => {
    const { ENV_LIST } = options;
    const { initialConfig: { defineConstants: { APP_CONF } }, helper: { chalk } } = ctx;
    ctx.onBuildStart(() => {
        const { runOpts: { platform } } = ctx;
        console.log(ctx.helper.chalk.yellow('插件 '), 'taro-plugin-check-env');
        console.log(ctx.helper.chalk.greenBright('开始 '), '检查环境变量');
        child.exec('taro -v', function (err, sto) {
            const versionStartIndex = sto.indexOf('Taro v') + 6;
            const versionEndIndex = sto.indexOf('\n', versionStartIndex + 3);
            const taroVersion = sto.slice(versionStartIndex, versionEndIndex);
            if (err) {
                throw new Error(`执行taro版本检查脚本失败: ${err}`);
            }
            const versionTestResult = utils_1.checkTaroVersion(platform, taroVersion);
            if (versionTestResult.success) {
                console.log('taro 版本检查通过', taroVersion);
                for (const key in ENV_LIST) {
                    if (ENV_LIST.hasOwnProperty(key)) {
                        const element = ENV_LIST[key];
                        if (!APP_CONF[key]) {
                            console.log(chalk.red('错误 '), `缺少环境变量: ${element} - ${key}`);
                            throw '环境变量检查不通过';
                        }
                        else {
                            console.log(`${chalk.magentaBright('读取 ')}`, `${key} `, APP_CONF[key]);
                        }
                    }
                }
                console.log(chalk.blueBright('结束 '), '环境变量检查通过✅');
                console.log('');
            }
            else {
                throw new Error(`依赖版本检查不通过: ${versionTestResult.errMsg}`);
            }
        });
    });
};
//# sourceMappingURL=index.js.map
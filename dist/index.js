"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ctx, options) => {
    console.log('enter taro-plugin-check-env, options:', options);
    // plugin 主体
    ctx.onBuildStart(() => {
        console.log('编译开始！');
    });
    ctx.onBuildFinish(() => {
        console.log('编译结束！');
    });
};
//# sourceMappingURL=index.js.map
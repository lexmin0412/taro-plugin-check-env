"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTaroVersion = void 0;
/**
 * 检查taro版本
 * @param platform 平台 weapp-小程序 h5-h5
 * @param taroVersion taro版本号
 */
exports.checkTaroVersion = (platform, taroVersion, options) => {
    if (options && options.taroVersion) {
        const h5Version = options && options.taroVersion && options.taroVersion.h5 ? options.taroVersion.h5 : '2.2.7';
        const weappVersion = options && options.taroVersion && options.taroVersion.h5 ? options.taroVersion.weapp : '2.2.11';
        const platformText = platform === 'h5' ? 'h5' : '小程序';
        const targetVersion = platform === 'h5' ? h5Version : weappVersion;
        return {
            success: taroVersion === targetVersion,
            platform,
            errMsg: `当前平台为${platformText}, 需要安装对应的taro版本为${targetVersion}, 请检查当前项目依赖版本后重试`
        };
    }
    return {
        success: true,
        platform,
        errMsg: `用户未指定Taro版本，跳过检测`
    };
};
//# sourceMappingURL=utils.js.map
/**
 * 检查taro版本
 * @param platform 平台 weapp-小程序 h5-h5
 * @param taroVersion taro版本号
 */
export const checkTaroVersion = (platform: 'weapp' | 'h5', taroVersion: string) => {
  const platformText = platform === 'h5' ? 'h5' : '小程序'
  const targetVersion = platform === 'h5' ? '2.2.7' : '2.2.11'
  return {
    success: taroVersion === targetVersion,
    platform,
    errMsg: `当前平台为${platformText}, 需要安装对应的taro版本为${taroVersion}, 请检查当前项目依赖版本后重试`
  }
}
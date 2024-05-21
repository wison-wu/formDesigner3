/**
 * 获取远程的数据
 */
export function getRemoteData(proxy, conf) {
  //动态数据
  /*
  因为https://www.fastmock.site 因为某些不可控因素，闭站，需要暂时屏蔽远程获取数据功能
   */
  /*if (conf.dataType === 'dynamic') {
    proxy.config.globalProperties.$axios.get(conf.action).then((res) => {
      if (conf.options.length === 0) {
        conf.options = conf.options.concat(res.data)
      }
    })
  }*/
}

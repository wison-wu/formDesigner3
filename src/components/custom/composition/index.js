import {getCurrentInstance} from 'vue';
/**
 * 获取远程的数据
 */
export function getRemoteData(proxy,conf){
    //动态数据
    if(conf.dataType === 'dynamic'){
        console.log(conf);
        console.log(proxy);
        console.log(proxy.config.globalProperties);
        proxy.config.globalProperties.$axios.get(conf.action).then(res => {
            if(conf.options.length===0){
                conf.options = conf.options.concat(res.data);
            }
        })
    }
}
/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 *
 * 判断 url 是不是 http 或 https 开头，该方法返回 boolean 值
 * 如果这个 url 是外部可访问的链接，则通过 shell 模块打开浏览器，如果是页面之间跳转，则跳转到对应的路由页面
 */
export function isHttpOrHttpsUrl(url:string){
    let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
    return regRule.test(url.toLowerCase());
}
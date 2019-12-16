//let serverPath = 'http://local.frontend.vue.com/'
let serverPath = 'http://192.168.2.236/'
export function post(url,body) {
    let token =  wx.getStorageSync('token') || '';

    return new Promise((resolve,reject) => {

        wx.request({
            url: serverPath + url,    // 拼接完整的url
            data: body,
            method:'POST',
            header: {
                'content-type': 'application/json',
                'token':token
            },
            success(res) {

                resolve(res.data)  // 把返回的数据传出去
            },
            fail(ret) {
                reject(ret)   // 把错误信息传出去
            }
        })
    })
}
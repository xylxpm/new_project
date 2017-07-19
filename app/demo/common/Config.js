/**
 * Created by Rabbit on 2017/7/1.
 */

const base = {
    baseURL :'http://shitu.leanapp.cn/api'
};

const Config = {
    api:{
        userToken: base.baseURL + '/userToken',
        shitu:{
            detailURL : base.baseURL + '/shitu/detailURL',
        },
        gank:{
            listData : base.baseURL + '/gank/listData',
        },
        user:{
            login : base.baseURL  + '/user/login',
        },
        qiniu:{
            upLoadToken: base.baseURL + '/qiniu/upLoadToken',
        },
        test:{
            test: base.baseURL + '/test',
        }
    },
    qiniu:{
        upload:'http://upload-z2.qiniu.com',
    },

};

export default Config;
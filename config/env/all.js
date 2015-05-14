'use strict';

module.exports = {
    app: {
        title: '朱墨记账',
        description: '朱墨记账：小微企业记账和金融解决方案',
        keywords: 'zhumo, finance'
    },
    port: process.env.PORT || 8081,
    mongodb: 'mongodb://127.0.0.1:27017/kaonar',
    debug: process.env.NODE_ENV !== 'production',
    logpath: '/opt/logs/zhumo/zhumo.log',
}


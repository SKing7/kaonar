'use strict';

var validateLocalStrategyPassword = function (password) {
    return (password && password.length >= 6);
};
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    SoftDeletePlugin = require('mongoose-softdelete'),
    TimeStampPlugin = require('mongoose-timestamp'),
    _ = require('lodash'),
    Schema = mongoose.Schema;

/**
 * Account Schema
 */
var UserSchema = new Schema({
    username: {
        type: String,
        default: '',
        trim: true
    },
    password: {
        type: String,
        default: '',
        validate: [validateLocalStrategyPassword, '密码至少6位以上']
    },
    salt: {             // 密码加密串
        type: String
    },
    provider: {         // 用户来源，默认为local
        type: String,
        required: 'Provider is required'
    },
    providerData: {     // 第3方用户的额外信息
    },
    isVerified: {       // 是否验证
        type: Boolean,
        default: false
    },
    gmtVerified: {      // 验证日期
        type: Date,
    },
});

UserSchema.plugin(SoftDeletePlugin);
UserSchema.plugin(TimeStampPlugin, {
    createdAt: 'gmtCreated',
    updatedAt: 'gmtUpdated'
});

// TODO 账户删除的before回调
// TODO 子账户余额更新之后更新父账户余额

/**
 * 获取所有节点以树状形态返回
 *
 * @param {Object} company instance or parentId
 * @param {Function} callback
 */
UserSchema.statics.getTreeByCompany = function(company, callback) {
};

UserSchema.methods.addChild = function(child, callback) {
    var model = this.model('User');
    var account = new model(child);
    account.parentId = this._id;
    account.save(function(err) {
        if (err) { return callback(err); }
        callback(null, account);
    });
};

module.exports = mongoose.model('User', UserSchema);

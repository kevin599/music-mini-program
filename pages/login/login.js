// pages/login/login.js
const app = getApp();
Page({
  data: {
    btnClick:false,
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    
  },
  getUserProfile(e) {
    var _that = this;
    // console.log("click");
    _that.setData({
      btnClick : true
    })
    // var click = _that.data.btnClick
    // console.log(_that.data.btnClick);
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        }),
        // app.globalData.userInfo = res.userInfo;
        // app.globalData.hasUserInfo = true;
        // console.log(app.globalData.userInfo)

        wx.setStorageSync('UserInfo', res.userInfo);
        // console.log(wx.getStorageSync('UserInfo'))

        wx.reLaunch({
          url: '/pages/faxian1/faxian1',
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  to(){
    wx.navigateTo({
      url: '/pages/login/login1',
    })
  },
  // btnClick(){
  //   this.setData({
  //     btnClick :1
  //   })
  // }

})

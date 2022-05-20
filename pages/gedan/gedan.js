// pages/gedan/gedan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gedanArr:[
      {
        title:"十面埋伏（live）",
        author:"陈奕迅"
      },
      {
        title:"今天等我来(live)",
        author:"陈奕迅"
      },
      {
        title:"好歌献给你（live）",
        author:"陈奕迅"
      },
      {
        title:"落花流水（live）",
        author:"陈奕迅"
      },
      {
        title:"囍帖街（live）",
        author:"陈奕迅"
      },
      {
        title:"七百年后（live）",
        author:"陈奕迅"
      },
      {
        title:"约定（live）",
        author:"陈奕迅"
      },
      {
        title:"寂寞夜晚（live）",
        author:"陈奕迅"
      },
      {
        title:"浮夸（live）",
        author:"陈奕迅"
      },
      {
        title:"禁色（live）",
        author:"陈奕迅"
      },
      {
        title:"无人之境（live）",
        author:"陈奕迅"
      },
      {
        title:"今天等我来",
        author:"陈奕迅"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createAudioContext('myAudio')
  },
  onLoad: function (options) {

  },
  playAudio(){
    // this.audioCtx = wx.createAudioContext('myAudio', Component) //创建音频上下文
    // const audio = wx.createInnerAudioContext('audio',Component);
    // this.audio = wx.createInnerAudioContext('audio',Component);
    // this.audioCtx = wx.createAudioContext('myAudio')
        let audio = wx.createInnerAudioContext();
        audio.src ="https://sharefs.ali.kugou.com/202110212134/b8c5c422fcb546a4b5183636588751f6/G189/M05/16/03/nZQEAF5V3TiAJq1fADfwLCxvuL8324.mp3";
        audio.play();
        wx.showToast({
          title: 'haoting',
        })
  },
  // onUnLoad: function (options) {
  //   this.audioCtx.pause();
  //   console.log("off");
  // },
})
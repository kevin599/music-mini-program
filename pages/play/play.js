// pages/play/play.js
Page({
  data: {
    playseek: '0', //标识播放状态
    play: "0",
    poster: 'http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcb6T0xhbGxLFPPrytca0zM*0U3ogwgsKdtKYg8IWF*lZ949CdS5uma9YPG51b6p0J5jY*TYk8ZqeIN8u9DRQ74Q!/b&bo=HgGPAQAAAAADF6M!&rf=viewer_4', //音频封面的图片资源地址
    name: '十面埋伏',
    author: '詹诏钦',
    src: 'https://sharefs.ali.kugou.com/202110201016/8142108a9334099be2b48030c0d000e4/G055/M08/05/1F/F5QEAFaP7n6AcMmnADNLmaxAhnM490.mp3',
  },
  audioPlay(e) {
    this.audioCtx = wx.createAudioContext('myAudio', Component) //创建音频上下文
    var play = e.currentTarget.dataset.play
    if (play == 0) {
      this.audioCtx.play()
      var _this = this;
      _this.setData({
        play: 1
      })
    } else {
      var _this = this;
      this.audioCtx.pause()
      _this.setData({
        play: 0
      })
    }
  },
  playseek(e) {
    var playseek = e.currentTarget.dataset.playseek
    if (playseek == 0) {
      this.audioCtx.seek(playseek + 6)
      var _this = this;
      _this.setData({
        playseek: 6
      })
    } else {
      this.audioCtx.seek(playseek + 6)
      var _this = this;
      _this.setData({
        playseek: playseek + 6
      })
    }
  },
  audioStart(e) {
    var playseek = e.currentTarget.dataset.playseek
    if (playseek == 0) {
      this.audioCtx.seek(0)
      var _this = this;
      _this.setData({
        playseek: 0
      })
    } else {
      this.audioCtx.seek(playseek - 6)
      var _this = this;
      _this.setData({
        playseek: playseek - 6
      })
    }
  }
})
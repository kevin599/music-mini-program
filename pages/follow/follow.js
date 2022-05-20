// pages/follow/follow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:true,
    number:1600,
    img:[
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcZ2l9Ed*lr9RaEw7vYGD7l1an9V3ICC7vnjlBiZdSwsAXK0*ijnDaSIH4BFRmhe7QPajAdpFOMk1*MNf7on3Z3w!/b&bo=7gLuAgAAAAABFzA!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcZ2l9Ed*lr9RaEw7vYGD7l0RXb0bsSos7WPzuTAoS1XwJukmSynAAzW0JjRvOuVvvwnp.1dCXUZKG5cihtJ9W5M!/b&bo=gAKAAgAAAAABFzA!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcd0B2QXqcSYAGkPosLGnlm.p1cX2mZQtjHDSdB9YGFWaBiQpKTjPMsUTZ60PSyMXTkgMBh5fxlb2Lz.UD.6EOHo!/b&bo=4ALgAgAAAAABFzA!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcd0B2QXqcSYAGkPosLGnlm*8fXgFfkOkyfE59OemzDNAC2BXCoYqNmtgVw89qpGV45aaabaGVfxrE8dWJzSpuuc!/b&bo=WAJVAgAAAAABFz0!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcd0B2QXqcSYAGkPosLGnlm9t9VAbdrgkZcxOykgtn094DmnhJwvHWOfvv2NPMP2NHpznIOsDjKKzBPoQMvHcC3A!/b&bo=7gLuAgAAAAABFzA!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcd0B2QXqcSYAGkPosLGnlm.ViXySnRWDwptjlDaIZptAYguo9XRaLnP7ikVn59WXSPK2M.6UJHmnOQV3ai2cb*8!/b&bo=zwLOAgAAAAABFzE!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcWNrJ9lHF4KrWD7aZXdkfIfm9zXRzBVaOfaTFvkXvwZVnXRJhGUvOBNXl*5.dyWjL7gvlgJ0KRBeY7.F2L5jRAU!/b&bo=tQG1AQAAAAABFzA!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcWNrJ9lHF4KrWD7aZXdkfId7EJcJatnadvSaDe60BEYMhxCHpM4AWFfcQPNlYUUivkSwJ7dDSxup65UTrCuaCos!/b&bo=KwI0AgAAAAABFy8!&rf=viewer_4",
      "http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mcWNrJ9lHF4KrWD7aZXdkfIcJ5KTmrTPQv5Frqk*z9SiKbAsKU2v3zouDZgxGmLLmr.7Pr5mX0bZUmrcEkU3GUek!/b&bo=0ALQAgAAAAABFzA!&rf=viewer_4",
    ],
    img2:"http://m.qpic.cn/psc?/V51BsBPu1D3Y4U1MYUi71cNonN3bGCVd/45NBuzDIW489QBoVep5mca2Zi0bwimnPSfCR3Tyy.ldG5mimAa*YJ0zUheSDAtL6qvj5pjgSroaouMRPasUy3xSHUTvSdTTz39foy0PvR4A!/b&bo=NwRSBQAAAAABF1Q!&rf=viewer_4",
    swipercontent:[
        "上个季度最火的歌，你都听了吗？",
        "来转转转转运！水逆终于结束啦！！",
        "你见过最传神的歌词翻译",
        "这个秋天拍过最满意的一张照片",
        "有些秘密只能对星星说"
    ],
    swipercontent1:[
      "秋日话题打卡：照片里的校园生活",
        "官宣怀孕！你的童年女神怎么样了",
        "给三年前的自己发条短信",
        "一起云赏月！你拍的月亮不晒一下吗",
        "城市漂流评"
    ],
    swipercontent2:[
      "你多久没见到想见的人了？",
        "抗日胜利76周年",
        "破防的瞬间",
        "那些手抄过的歌词",
        "放假倒计时2天！上学路上听点什么"
    ],

  },
  tapimg(e){
    // var current = 
     console.log(e.currentTarget.dataset.src);
     let current = e.currentTarget.dataset.src
    
    wx.previewImage({
      current,
      // 当前显示图片的http链接
      urls:this.data.img// 需要预览的图片http链接列表
    })
  },
  dz(){
    this.setData({
      top:false,
      number:this.data.number+1
    })
  },
  dz2(){
    this.setData({
      top:true,
      number:this.data.number -1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '关注',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
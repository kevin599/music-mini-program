// pages/Me/Me.js
Page({
  // 判断歌单栏目的位置以执行sticky在page
  onPageScroll: function () {
    var that = this;
    const query = wx.createSelectorQuery()                // 创建节点查询器 query
    query.select('.gedanNavgate').boundingClientRect()    // 这段代码的意思是选择Id=toshowbanner的节点，获取节点位置信息的查询请求
    query.selectViewport().scrollOffset()                 // 这段代码的意思是获取页面滑动位置的查询请求
    query.exec((res) => {
      // console.log(res[0])  //打印可以看到当前位置对于上下左右的距离
      if (res[0].top <= 0) {  //当id为toshowbanner的组件距离顶部小于100时，执行代码
        that.setData({
          gedanNavgate_sticky:"true"
        })
      } else {
        that.setData({
          gedanNavgate_sticky: "false",
        })
      }
      //  console.log(gedanNavgate_sticky);
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    sex:"",
    UserInfo:{},
    randomColor:"",
    assArr:[
      "最近一年收藏的欧美男声特辑",
      "Tyga的慢歌",
      "80年代华语老歌",
      "适合跑步的50首欧美精选",
      "最近一年发布的带感男声说唱"
    ],
    collectArr:[
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcQph9W7ikyZqv**2bYB.4NO1DJ6RHKR9X71q7dV41a9YXBQjWKadkLgkBAEk2s.pSDlAhRdJEZMpcPHjCKuSICM!/b&bo=QAZABgAIAAgBGT4!&rf=viewer_4",
        collect_title:"私人雷达",
        num:35,
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcVX.JqHHxP79BpiKbfyl2Ve1NOXwLfFlBtqw77*n6onPLouwqnQS6laoW1pnVqsDmueRA14Qp2B183lLythYm0I!/b&bo=OAQ4BDgEOAQBGT4!&rf=viewer_4",
        collect_title:"我也没有",
        num:5,
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcQns9Ot9BBe*SOto6O8sZ50ZkBcn3MSrM1rPHpDF6zUdCjpykT0u0UnN6UiBHetVawQLBjyRXMgu5at670GFRLE!/b&bo=sASwBLAEsAQBKQ4!&rf=viewer_4",
        collect_title:"滚石杂志评选百大吉他SOLO",
        num:99,
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcQns9Ot9BBe*SOto6O8sZ525eah29h4.Mi.52SWCQnl*SyRcgikkgniWsDKGzs4*wXf.I2AVDtMPCIbo4c2VlgE!/b&bo=3AXcBdwF3AUBOR4!&rf=viewer_4",
        collect_title:"Pray for what",
        num:49,
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcQns9Ot9BBe*SOto6O8sZ50f1iKb*aaL0aKc.qAQipobMZZOeqUr0Bkisfy3GkbIv6zgGZZlWs59jKc0I9VPW5I!/b&bo=6APoA.gD6AMBGT4!&rf=viewer_4",
        collect_title:"世界和平",
        num:76,
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcb6T0xhbGxLFPPrytca0zM8XEjG34qXdcJ0bXD7AwhYQL1sV0yMDeGSopsg4*4Z0o0p38d.QvmwHPgUA9sAvsw4!/b&bo=VgFWAVYBVgEBGT4!&rf=viewer_4",
        collect_title:"陈奕迅《D.U.O》演唱会",
        num:38,
      },
    ],
    geDanArr:[
      {
        zhuanji_img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcb6T0xhbGxLFPPrytca0zM8XEjG34qXdcJ0bXD7AwhYQL1sV0yMDeGSopsg4*4Z0o9ef0TVHt2aUI6T.xWm1Yiw!/b&bo=VgFWAVYBVgEBGT4!&rf=viewer_4",
        zhuanji_title:"D.U.O",
        num:"38"
      },
      {
        zhuanji_img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcflRStMtNXVszyZg2I.sqBgpqumrkcDVP8icZTzFU.4TVL1g.0rNEUfNYW2aeVnxEfhwd.9XwrHqJ6XFkQDz.l8!/b&bo=OAQ4BAAAAAABFzA!&rf=viewer_4",
        zhuanji_title:"世",
        num:"999"
      },
      {
        zhuanji_img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcflRStMtNXVszyZg2I.sqBgpqumrkcDVP8icZTzFU.4TVL1g.0rNEUfNYW2aeVnxEfhwd.9XwrHqJ6XFkQDz.l8!/b&bo=OAQ4BAAAAAABFzA!&rf=viewer_4",
        zhuanji_title:"界",
        num:"999"
      },
      {
        zhuanji_img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcflRStMtNXVszyZg2I.sqBgpqumrkcDVP8icZTzFU.4TVL1g.0rNEUfNYW2aeVnxEfhwd.9XwrHqJ6XFkQDz.l8!/b&bo=OAQ4BAAAAAABFzA!&rf=viewer_4",
        zhuanji_title:"和",
        num:"999"
      },
      {
        zhuanji_img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcflRStMtNXVszyZg2I.sqBgpqumrkcDVP8icZTzFU.4TVL1g.0rNEUfNYW2aeVnxEfhwd.9XwrHqJ6XFkQDz.l8!/b&bo=OAQ4BAAAAAABFzA!&rf=viewer_4",
        zhuanji_title:"平",
        num:"999"
      },
    ],
    funArr:[
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcRV6yHEFnRZme*uoz4YN7S.hoT5tkoUNmB9JmIagZwroQ5P1lT2W67QPY4CLmsut6E3Ja*AueIet03UjzKA4Sro!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"本地/下载"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcRV6yHEFnRZme*uoz4YN7S.7UumBTopJkmihqQkZ35e7xyXj4XDauKmevmB*IsPS7qQBAP2YhqUm8fAdvfDcYqE!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"云盘"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcRV6yHEFnRZme*uoz4YN7S8c3ULNp0BkGCZk5920pkezm0xt.HShuYRVWPCQ7iv1xdW2lPuHn1knGmAauGxsbdA!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"已购"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcUemlWa39JM78W0WxKrqhip3347QZOKjP8X7gjKlYv5APPZJRwJdx3wbtVkVbS6q0MQuvckP6YM*HVNsN0wbbSA!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"最近播放"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mceO0mtmj5sqvNDfwikq5GQy.*Pp*g7HLYsxGg7Jivq8o3KRy3cpd3YEN1y8Nho4JJIm3eoOWWQZCHl19YB2Tcbk!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"我的好友"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mceO0mtmj5sqvNDfwikq5GQx8ODF57CIRfubyGE2rAsozen0T*ryGVwohvnsfNNxdII.DD4ZToI*Of3DaQ9mlGaw!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"收藏和赞"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcaVMm4kyqUJTQFB8nERZfRcARa9aOmJzk.KHqOg0hobFU2TWnp5NQVjOtnPxB2H6uHVZIybI20ODYkH1BYlLky8!/b&bo=NQAwAAAAAAADFzc!&rf=viewer_4",
        text:"我的播客"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcaVMm4kyqUJTQFB8nERZfRdTBavIqdHA*LvplJGMdJC8NBKZT8DqlJoZepoWL0Spo7mc4ga338rXe*1s0wpehPE!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"说唱专区"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcRV6yHEFnRZme*uoz4YN7S.PO5NF76U3XgHUOAmL03*Q6vVUPrGnfHyf0yk7qWXAL.1mMe4pEQZr*eXi*thBQvM!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"助眠解压"
      },
      {
        img:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mceO0mtmj5sqvNDfwikq5GQzi4xSC8OOWyuvsr9lnI7KA71*8xiP5swJj1jWndkzP48QNS2*Ae6eUNCIfO17rk88!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4",
        text:"古典专区"
      },

    ],
    gedanNavgate_sticky:"flase",
    touxiang:"http://p3.music.126.net/1zLPeH0ETvdjpNTKUE3O3g==/109951165504990161.jpg?param=30y30",
    test_img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqPGvjWaxuX0zSnCTIP304GSpP8K+/qf6153PPLcytLPK8sjdXdixP4mieaS5uJJ5m3SSsXdj3JOTUdeDWrSqyu9j9AweDp4WmoxWvV9wooq7pmjahrMpj061kn2nDOOEX6sePwrKMXJ2R1TnGC5pOyKVBIAySAPerur6Pe6FOIdQh8tiu5SGDKw9jXpPg/wAGWunWMN5fQJNfyqH/AHi5EOeQoHr6mtqWHnUk47WOLF5hRw1JVd77W6nlG5eORzS17q39l6wkluTZ3irw6ZV9v1HavMPHHh610DUofsTEQ3ClhETkxkHseuDnjPvWlbCOnHmTujnwWbQxNT2UouMvv/yOchmlt5VlgkeOReVdGKkfiK9C8F+Npru7j0zVn3yScQTngsf7re/oa86p8MrwTxzRNtkjYOpHYg5BrGjWlSldbHXjMHTxVNxktej7DKKKt6Vp0mr6rbWERIad9pYfwr1Y/gAazinJ2R1SkoRcpbI3vB3g8+IH+13m5NORscHBmI6gHsvqfwHt6PfajpfhfToxM0dtAo2xRRry3sqj/PrRfXdn4X0BpRGFt7aMJHGDgseiqPr6/U143qOo3et6i1xcs0txKwVVUdMnhVHpz0r05SjhYqMVeTPmKdOpm1V1KjtTX9ff3Zp+MPFH/CSXERigMVvbBvLDkFmJxknsOg4r1ZyNY0BjbvtF3anYwPTcvB/Wud8NeALPT4kuNUjS6vSM7G+aOL2A6E+5/CushmhfekLxt5R2MqEHYfQ46H2rWhTmryqbs48wxNCShSwy0hfX1/4J4RFJeaRdJKvn2dwvCsVKMPbmkvL251C4M95PJPKRjc5ycele5SvZXsktjMYJnVcyQPhiAehKntXBeLfAS2sT3+io3lqN0tt1wPVP8Py9K5auEnGPuu6PXwmcUa1RKrHlk9n/AMHocHRRRXAe8Fdn8MLUS69dXDDPkW4VfYs3+CmuMrufhZIo1LUov4mhjYfQMQf5iujCW9qrnn5q2sHUt2/VFj4pXzbrCxUkLhpmHqfur/7NWL8PLJLzxZG8gBFtE0wB/vcKP/Qia0fijCy6pYzY+R4GQH3DZ/8AZhWb8Pr5LLxVEshAW5jaAE/3jgj8yMfjW03/ALV73c4aEWsqfs97P9bnX/ETW59L0uC2tHaOW7Zg0inBCLjIHpnI5+tYnwuvvL1C+sWPEsazKPdTg/ow/Kuh8d+HLjXrCCSxAa5tmYiMnG9WxkAnvwKxfA3hHUrDWBqOoxG2WJGVIywLOTxzjoBXRONT6ynbQ4aE8N/ZkoNpSf33vp+g34lQS2eqafqltI8UpUx70OCpU5HP0J/Kui8G+JT4h01vP2i8tyFmwMBs9GA98H8QaxPijeRi2sbIEGUuZiO4UDA/Mk/lWR8MpGXxNMgzte1Yt+DLj+Z/Op9pyYlxWzL+rqtlanNaxvZ+Vyl440ZNH8QuIF229yvnIo6KSfmH5/zFc7XofxVRdulvj5syjPt8teeVxYmChVaR7WWVZVcLCUt9vudgrc8HaoukeJraaRtsMuYJD6Buh/AgVh0YzwehrKEnCSkuh1VqSq05U5bNWPYfHGhtrWhN9nTddWx82MDq395fxH6gV48CQQykgg5BHBBr1TwN4rXVLRNPvJMX0K4Usf8AXIO4/wBod/z9cQeK/AI1GZ77SSkdy/zSQtwkh9Qex/Q+1ejXpe3Sq0z57L8U8DN4TE6Lo/66P/hylofxLEVusOswSSOox58OCW/3lOOfcflV2/8AidYRwn7BazzTEceaAij68kmvPb3SdQ01yl7ZXEJHdozt/Ajg/nUMFrcXT7La2nmb0jiZj+grBYqulync8pwU37VbeT0JNQ1C51W+ku7yQyTSHk9gOwA7Cu7+GGkvHHdarIuFmHkwn1UHLH6ZwPwNZugfDq9vZUm1gG1tgcmIH95J7HH3R+v0rutZ1ez8LaOH2ooRfLt4F43EDgAdgO57VrhqLi/a1DkzLGwnBYPC6t6abei/rY4f4m36z6zbWaNn7NES3sz4OPyA/OuLqa7upb67lubht80zl3b1JqGuKtU9pNyPawlD6vQjS7f0x80L288kMqlZI2KMp7EHBplei+NvBU93cvqelR+ZI/M8A4LH+8vqfUV57LDJBIY5o3jkXqjqVI/A061GVKVnsRg8ZTxVNSi9eq7CI7RSLJGzI6EMrKcFT6g13WhfEqWBFh1mFpgOBcRAbv8AgS9D9Rj6VwdFKlWnSd4srE4OjiY8tVX/ADPabbxhoV2oKanAh9JSYyP++sVJN4q0SBdz6raEf7EgY/kM14lRXX/aE7bI8l8PUb6Tdvkem6t8TLKBGTS4XuZO0kgKRj8Op/SvPdT1S71e8a5vpmllPAzwFHoB2FVKK5quInV+Jnp4XL6GF1prXu9wp0cbSypHGpZ5GCKo7knAFEcbzSLHFG8jscBUUsT9AK9A8E+CZ4LuPVNWiMTR/NBbt94N/eb0x2H+FKjRlVlZFYvF08LTc5vXou5//9k=",
    zhuanji:"http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcYD31rxjCxwbDrkonIgJix5dN5Ajd32C0gDf2XdwImM7kS*AseNV*6WxJqYvCThRx4CKNicwxW8Bso7aa4Y.v4A!/b&bo=OAQ4BAAAAAABFzA!&rf=viewer_4"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var color = this.getColor();
    this.setData({
      randomColor:color
    })
    var UserInfo=wx.getStorageSync('UserInfo')
    // console.log(UserInfo);
    this.setData({
      UserInfo
    })
    var sex = UserInfo.gender;
    if(sex == 1){
      that.setData({
        sex : "女"
      })
    }else{
      that.setData({
        sex : "男"
      })
    }
    wx.setNavigationBarTitle({
      title: '我的',
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

  },
  
  getColor() {
    const rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length === 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  },
  randomColor(){
    var color = this.getColor();
    // console.log(color);
    this.setData({
      randomColor:color
    })
  },
  toAdd(){
    // console.log("bindtap");
    wx.pageScrollTo({
      scrollTop: 470,
      duration: 300
    })
  },
  toCollect(){
    // console.log("bindtap");
    wx.pageScrollTo({
      scrollTop: 855,
      duration: 300
    })
  },
  toAss(){
    // console.log("bindtap");
    wx.pageScrollTo({
      scrollTop: 1229,
      duration: 300
    })
  },
  TogeDan(){
    wx.navigateTo({
      url: '/pages/gedan/gedan',
    })
  }

})
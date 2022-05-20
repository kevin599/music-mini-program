// pages/yuncun/yuncun.js
var app = getApp();
Page({
  data: {
    winHeight: "",
    currentTab: 0,
    scrollLeft: 0,
    navData: ['广场', '云村热门', '宝藏音乐人', '音乐现场', '演唱演奏', '云音乐出品', 'MV', '混剪', '音乐推荐', '情感故事', '音乐生活', '舞蹈'],
    listData: [{
        content: [{
            title: '詹诏钦',
            imgPath: "http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcb6T0xhbGxLFPPrytca0zM*0U3ogwgsKdtKYg8IWF*lZ949CdS5uma9YPG51b6p0J5jY*TYk8ZqeIN8u9DRQ74Q!/b&bo=HgGPAQAAAAADF6M!&rf=viewer_4",
            text: " 詹诏钦实力改编《十面埋伏》",
            play: "99.9",
            dianzan: "99.9"
          },
          {
            title: '郭友发',
            imgPath: "http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcXLKzkSrcQHweLc8NDlJm4Fu.kW4l5TVWqxz4bC4AfK.uvj*WwK3PZPSE.NpKrd7F1oMyZ*vq9P3CdKDBCDtS90!/b&bo=OARUBgAAAAABJ24!&rf=viewer_4",
            text: "郭友发《淘汰》",
            play: "99.8",
            dianzan: "99.8"
          }
        ],
      },
      {
        content: [{
            title: '李展尧',
            imgPath: "http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcflRStMtNXVszyZg2I.sqBgpqumrkcDVP8icZTzFU.4TVL1g.0rNEUfNYW2aeVnxEcQlY8WcpIrKd.0K.oxWpJM!/b&bo=OAQ4BAAAAAABFzA!&rf=viewer_4",
            text: "李展尧实力改编《今晚等我来》",
            play: "99.7",
            dianzan: "99.9"
          },
          {
            title: '音乐现场',
            imgPath: "https://cf.dtcj.com/star/half/e1d662ff-30e8-47c1-abb7-7937d6bb45b2.jpg",
            text: "周深《雪落下的声音》",
            play: "73.1",
            dianzan: "11.1"
          }
        ]
      },
      {
        content: [{
            title: '陈奕迅',
            imgPath: "https://tse1-mm.cn.bing.net/th/id/R-C.d46ad83b72717e2d19fd9705b2769e4c?rik=lS9oULA2yRqdLg&riu=http%3a%2f%2faliyunimg.9ku.com%2f9kuimg%2fgeshou%2f20160512%2f72717e2d19fd9705.jpg&ehk=AepszzyZe6Pgdu3q4bnOnYpakIanHPCNVCYNUM3SHLc%3d&risl=&pid=ImgRaw&r=0",
            text: "陈奕迅一首《明年今日》",
            play: "92.1",
            dianzan: "84.1"
          },
          {
            title: '二次元',
            imgPath: "https://ayapei.com/sites/default/files/2/3486.jpeg?slideshow=true&slideshowAuto=true&slideshowSpeed=4000&speed=350&transition=elastic",
            text: "《下辈子不一定遇见》",
            play: "93.1",
            dianzan: "54.1"
          }
        ]
      },
      {
        content: [{
            title: '其他',
            imgPath: "http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcdyXpyCwNLe8PQBP4HDVzhW78OAP5BBKUEc0*CewMYfLGpmX38FJJAn0OexptdYotxbqLAXAQCaoMRwH65iSyGg!/b&bo=JwI0AgAAAAADNwE!&rf=viewer_4",
            text: "《魔鬼中的天使》",
            play: "52.1",
            dianzan: "14.1"
          },
          {
            title: '混剪',
            imgPath: "https://c-ssl.duitang.com/uploads/item/201712/28/20171228073606_Ey3si.thumb.1000_0.jpeg",
            text: "李沁《先行》",
            play: "73.1",
            dianzan: "11.1"
          }
        ]
      },
    ],
    remenData: [{
        content: [{
            title: '音乐现场',
            imgPath: "http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcdyXpyCwNLe8PQBP4HDVzhXSmDRffMnbiqHsQ*pLRqnnAuT2yQoRrOZ9tk75l1orQYzE2WS.Ulk7w.G5Cyo62K0!/b&bo=OARUBgAAAAABF14!&rf=viewer_4",
            text: "陈卓璇《我敢》",
            play: "12.1",
            dianzan: "4.1"
          },
          {
            title: '演唱演奏',
            imgPath: "http://m.qpic.cn/psc?/V52gn3BP0WWI6X0Ctnir2lcI8U3tbV01/45NBuzDIW489QBoVep5mcdyXpyCwNLe8PQBP4HDVzhWm4E2835neRtSkkCmSGHKhy18Sx6ZyFfmvs*u2xe3uSikSE44HyZWatJsUg9b0JFg!/b&bo=wAOgBQAAAAABF1Y!&rf=viewer_4",
            text: "陈卓璇《fly away》",
            play: "13.1",
            dianzan: "21.1"
          }
        ],
      },
      {
        content: [{
            title: '演唱演奏',
            imgPath: "https://sslbashadianzikan.metshow.cn/attached/1/20210214/20210214130400_7682-850_1200.gif",
            text: "陈奕迅一首《明年今日》",
            play: "32.1",
            dianzan: "14.1"
          },
          {
            title: '混剪',
            imgPath: "https://sslbashadianzikan.metshow.cn/attached/1/20200405/20200405001551_9934-850_1200.jpg",
            text: "SuperM 顶级爱豆 直击你心",
            play: "73.1",
            dianzan: "1.1"
          }
        ]
      },
      {
        content: [{
            title: '周杰伦',
            imgPath: "https://tse3-mm.cn.bing.net/th/id/OIP-C.PKEEjr87KU-UJL_Jdq8D7wHaHQ?w=180&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            text: "周杰伦一首《青花瓷》",
            play: "62.1",
            dianzan: "34.1"
          },
          {
            title: '混剪',
            imgPath: "https://tse1-mm.cn.bing.net/th/id/R-C.12617c7dd09e043868f37d2530bbf9dc?rik=UaCWCq1dGX7CHg&riu=http%3a%2f%2fwww.kejidi.cn%2fueditor%2fphp%2fupload%2fimage%2f20190818%2f1566091127505402.jpg&ehk=1yNAGQHtMBPGkNmgUW2VJXPJWlzuyHLXsz2De8u04w0%3d&risl=&pid=ImgRaw&r=0",
            text: "全程热恋 携手与共",
            play: "63.1",
            dianzan: "51.1"
          }
        ]
      },
      {
        content: [{
            title: '舞蹈',
            imgPath: "https://tse1-mm.cn.bing.net/th/id/OIP-C.p-GODuN0EycpxzRXEvGeUwHaKz?w=182&h=266&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            text: "田艺  许诺明天",
            play: "12.1",
            dianzan: "4.1"
          },
          {
            title: '宝藏音乐人',
            imgPath: "https://tse3-mm.cn.bing.net/th/id/OIP-C.n706qWEFUj1UGE8__IkDdwHaLG?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            text: "《你的答案》",
            play: "33.1",
            dianzan: "19.1"
          }
        ]
      },
    ],
    baozangData: [{
      content: [{
          title: '李沁',
          imgPath: "https://tse3-mm.cn.bing.net/th/id/OIP-C.eFPJc5qDYXeU6e2KNKyUCgHaKP?w=182&h=252&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          text: "李沁《我喜欢陈延清》",
          play: "42.1",
          dianzan: "4.1"
        },
        {
          title: '演唱演奏',
          imgPath: "https://tse2-mm.cn.bing.net/th/id/OIP-C.DdP0lMSiwNWRbYXvJo3M7gHaKr?w=182&h=262&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          text: "陈卓璇《fly away》",
          play: "13.1",
          dianzan: "21.1"
        }
      ],
    },
    {
      content: [{
          title: '演唱演奏',
          imgPath: "https://sslbashadianzikan.metshow.cn/attached/1/20210214/20210214130400_7682-850_1200.gif",
          text: "陈奕迅一首《明年今日》",
          play: "32.1",
          dianzan: "14.1"
        },
        {
          title: '混剪',
          imgPath: "https://tse3-mm.cn.bing.net/th/id/OIP-C.GT6XnKG0HQTWlwjXZ5fWzQHaJ4?w=182&h=243&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          text: "SuperM 顶级爱豆 直击你心",
          play: "73.1",
          dianzan: "1.1"
        }
      ]
    },
    {
      content: [{
          title: '周杰伦',
          imgPath: "https://tse3-mm.cn.bing.net/th/id/OIP-C.BB2qEO43Z6Hc-JgZPN1bdAHaE7?w=264&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          text: "周杰伦一首《青花瓷》",
          play: "62.1",
          dianzan: "34.1"
        },
        {
          title: '混剪',
          imgPath: "https://tse1-mm.cn.bing.net/th/id/R-C.12617c7dd09e043868f37d2530bbf9dc?rik=UaCWCq1dGX7CHg&riu=http%3a%2f%2fwww.kejidi.cn%2fueditor%2fphp%2fupload%2fimage%2f20190818%2f1566091127505402.jpg&ehk=1yNAGQHtMBPGkNmgUW2VJXPJWlzuyHLXsz2De8u04w0%3d&risl=&pid=ImgRaw&r=0",
          text: "全程热恋 携手与共",
          play: "63.1",
          dianzan: "51.1"
        }
      ]
    },
    {
      content: [{
          title: '舞蹈',
          imgPath: "https://tse1-mm.cn.bing.net/th/id/OIP-C.p-GODuN0EycpxzRXEvGeUwHaKz?w=182&h=266&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          text: "田艺  许诺明天",
          play: "12.1",
          dianzan: "4.1"
        },
        {
          title: '宝藏音乐人',
          imgPath: "https://tse3-mm.cn.bing.net/th/id/OIP-C.n706qWEFUj1UGE8__IkDdwHaLG?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          text: "《你的答案》",
          play: "33.1",
          dianzan: "19.1"
        }
      ]
    },
  ],
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },

  checkCor: function () {
    if (this.data.currentTab > 3) {
      this.setData({
        scrollLeft: 400
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '云村',
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR + 80;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap
})
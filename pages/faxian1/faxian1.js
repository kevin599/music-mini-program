// pages/faxian/faxin.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        UserInfo:{},
        dotIndex:"",
        imgIndex:"",
        imgIndex:"",
        luntArr:['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F592ed55fd1485497e430841e8e35e50eb32df196.jpg&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637251289&t=011f265c8cabdf7e35c8fe4b0eba9ef9','https://gimg2.baidu.com/image_search/src=http%3A%2F%2F00.minipic.eastday.com%2F20170929%2F20170929000051_d41d8cd98f00b204e9800998ecf8427e_3.jpeg&refer=http%3A%2F%2F00.minipic.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637251222&t=89bdb8a8ff4e8cc0b37fbb29a4edd7b0','https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20191211%2Ff50fbdd7b2d342a1b50747250320b6b7.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637251266&t=0b3a115caf6ce4153eb4dc547fe58cff'],
        listArr1:[
            {
                "listclass":"icon-rili",
                "listtext":"每日推荐"
            },
            {
                "listclass":'icon-FM_weixuanze',
                "listtext":"私人FM"
            },
            {
                "listclass":'icon-gedan',
                "listtext":"歌单"
            },
            {
                "listclass":'icon-paihangbanggequ',
                "listtext":"排行榜"
            },
            {
                "listclass":'icon-zhibojianpianhaoshezhi',
                "listtext":"直播"
            },
            {
                "listclass":'icon-zhuanji',
                "listtext":"数字专辑"
            },
            {
                "listclass":'icon-mingxiang',
                "listtext":"专注冥想"
            },
            {
                "listclass":'icon-xingxing',
                "listtext":"歌房"
            },
            {
                "listclass":'icon-youxitianchong',
                "listtext":"游戏专区"
            },
        ],
        tuiArr:[
            {
                "Img":"https://img0.baidu.com/it/u=236928459,1520799132&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889",
                "text1":"【节奏控】一听就",
                "text2":"上瘾的惊艳女声",
                "shuzi":"232万",
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img0.baidu.com/it/u=1439950610,1913716011&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750",
                "text1":"【hiphop】打篮球",
                "text2":"打游戏自带的BGM",
                "shuzi":"23万",
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img1.baidu.com/it/u=4034193640,2533795775&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "text1":"故事都说烂了还",
                "text2":"是意难乎",
                "shuzi":"212万",               
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img0.baidu.com/it/u=1172647062,417764235&fm=26&fmt=auto",
                "text1":"为歌手而赞丨优",
                "text2":"质更新",
                "shuzi":"239万",             
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img1.baidu.com/it/u=3493411902,1547476662&fm=26&fmt=auto",
                "text1":"今天《呼吸有害》",
                "text2":"听起",
                "shuzi":"30万",              
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
         ],
        shuxinArr:{
            shuxinArr1:[
                {
                    "Img":"https://img2.baidu.com/it/u=3499117458,3480561800&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                   "Img":"https://img0.baidu.com/it/u=3117388201,1993826356&fm=26&fmt=auto",
                   "singName":"爱如潮水(live)",
                   "singAuthor":"-张学友",
                   "singIntroduct":"张信哲是潮水 张学友是台风"
               },
               {
                   "Img":"https://img1.baidu.com/it/u=2141720946,721251880&fm=26&fmt=auto",
                   "singName":"爱如潮水(live)",
                   "singAuthor":"-张学友",
                   "singIntroduct":"张信哲是潮水 张学友是台风"
               }
            ],
            shuxinArr2:[
                {
                    "Img":"https://img0.baidu.com/it/u=2145835820,2144686310&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img1.baidu.com/it/u=3531682521,4158087027&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img1.baidu.com/it/u=1892278405,1822803836&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                }
            ],
            shuxinArr3:[
                {
                    "Img":"https://img1.baidu.com/it/u=3268932656,2763531053&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img2.baidu.com/it/u=4232190300,672619014&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img0.baidu.com/it/u=759215174,2700356655&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                }
            ],
            shuxinArr4:[
                {
                    "Img":"https://img0.baidu.com/it/u=3725302402,3346521001&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=727",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img2.baidu.com/it/u=69241206,2198897375&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img1.baidu.com/it/u=1499259869,526042342&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                }
            ]
         },
        shuxinArrA:{
            shuxinArr1:[
                {
                    "Img":"https://img1.baidu.com/it/u=4263279902,2257518719&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                   "Img":"https://img2.baidu.com/it/u=2959883141,880555860&fm=26&fmt=auto",
                   "singName":"爱如潮水(live)",
                   "singAuthor":"-张学友",
                   "singIntroduct":"张信哲是潮水 张学友是台风"
               },
               {
                   "Img":"https://img1.baidu.com/it/u=3890015201,1320180829&fm=26&fmt=auto",
                   "singName":"爱如潮水(live)",
                   "singAuthor":"-张学友",
                   "singIntroduct":"张信哲是潮水 张学友是台风"
               }
            ],
            shuxinArr2:[
                {
                    "Img":"https://img1.baidu.com/it/u=333311331,537194840&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img2.baidu.com/it/u=3575078205,828076630&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img0.baidu.com/it/u=3394329621,3844206522&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=555",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                }
            ],
            shuxinArr3:[
                {
                    "Img":"https://img2.baidu.com/it/u=3396736165,4068937305&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=720",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img1.baidu.com/it/u=2391855882,755207010&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img2.baidu.com/it/u=1641213600,2516356957&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=820",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                }
            ],
            shuxinArr4:[
                {
                    "Img":"https://img0.baidu.com/it/u=861533696,3093687289&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img1.baidu.com/it/u=1597124082,4084464546&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                },
                {
                    "Img":"https://img1.baidu.com/it/u=904389871,539495592&fm=26&fmt=auto",
                    "singName":"爱如潮水(live)",
                    "singAuthor":"-张学友",
                    "singIntroduct":"张信哲是潮水 张学友是台风"
                }
            ]
         },
         jingArr:[
            {
                "Img":"https://img0.baidu.com/it/u=2386633384,1253022438&fm=26&fmt=auto",
                "text1":"【节奏控】一听就",
                "text2":"上瘾的惊艳女声",
                "shuzi":"232万",
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img0.baidu.com/it/u=566592338,2229684599&fm=26&fmt=auto",
                "text1":"【hiphop】打篮球",
                "text2":"打游戏自带的BGM",
                "shuzi":"23万",
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img1.baidu.com/it/u=1000063709,327108903&fm=26&fmt=auto",
                "text1":"故事都说烂了还",
                "text2":"是意难乎",
                "shuzi":"212万",               
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img0.baidu.com/it/u=291325477,2514087940&fm=26&fmt=auto",
                "text1":"为歌手而赞丨优",
                "text2":"质更新",
                "shuzi":"239万",             
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img1.baidu.com/it/u=1516642691,2488144529&fm=26&fmt=auto",
                "text1":"今天《呼吸有害》",
                "text2":"听起",
                "shuzi":"30万",              
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
         ],
         wodeArr:[
            {
                "Img":"https://img1.baidu.com/it/u=1801553496,1948831182&fm=26&fmt=auto",
                "text1":"【节奏控】一听就",
                "text2":"上瘾的惊艳女声",
                "shuzi":"232万",
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img0.baidu.com/it/u=2345446067,714882583&fm=26&fmt=auto",
                "text1":"【hiphop】打篮球",
                "text2":"打游戏自带的BGM",
                "shuzi":"23万",
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img0.baidu.com/it/u=400076936,2993993208&fm=26&fmt=auto",
                "text1":"故事都说烂了还",
                "text2":"是意难乎",
                "shuzi":"212万",               
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img1.baidu.com/it/u=2094394696,3245245196&fm=26&fmt=auto",
                "text1":"为歌手而赞丨优",
                "text2":"质更新",
                "shuzi":"239万",             
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
            {
                "Img":"https://img2.baidu.com/it/u=2048486917,2881478426&fm=26&fmt=auto",
                "text1":"今天《呼吸有害》",
                "text2":"听起",
                "shuzi":"30万",              
                "text":"【节奏控】一听就上瘾的惊艳女声"
            },
         ],
         index1:"",
         rightBox3Arr:[
            {
                "a":"icon-xiaoxitongzhi",
                "b":"我的消息",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-beike",
                 "b":"云贝中心",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-dengpao",
                "b":"创作中心",
                "c":"icon-zuobian-copy"
        },
         ],
         rightBox4Arr:[
            {
                "a":"icon-fapiao",
                "b":"云村有票",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-gouwuche",
                 "b":"商城",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-youxi",
                "b":"游戏专区",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-lingdang",
                "b":"口袋彩铃",
                "c":"icon-zuobian-copy"
            },
         ],
         rightBox5Arr:[
            {
                "a":"icon-shezhi",
                "b":"设置",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-yueliang",
                "b":"夜间模式",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-naozhong1",
                "b":"定时关闭",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-xingxing",
                "b":"个性装扮",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-erji",
                "b":"边听变存",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-liuliang",
                "b":"在线听歌免流",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-jinzhi",
                "b":"音乐黑名单",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-anquan",
                "b":"青少年模式",
                "c":"icon-zuobian-copy"
            },
            {
                "a":"icon-naozhong",
                "b":"音乐闹钟",
                "c":"icon-zuobian-copy"
            },
         ]
    },
    dotViewClick(e){
        console.log(e);
        this.setData({
            dotIndex: e.currentTarget.id
        })
    },
    fun(e) {
        this.setData({
            imgIndex: e.detail.current
        })
    },
    getImageId(e){
        console.log(e);
        this.setData({
            imgIndex: e.currentTarget.dataset.index
        })
    },
    caidan(e){
        var index1=e.currentTarget.dataset.index1;
        this.setData({
            index1:index1
        })
        },
    cdF(e){
        var index1=e.currentTarget.dataset.index1;
        this.setData({
            index1:index1
        })
    },
    boKe(e){
        // var cl1="active"
        // var cl2="active1"
        var index=e.currentTarget.dataset.index;
        this.setData({
            index:index
        })
    },
    youSheng(e){
        var index=e.currentTarget.dataset.index1;
        console.log(e);
        this.setData({
            index:index
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        wx.setNavigationBarTitle({
          title: '发现',
        })
        var UserInfo = wx.getStorageSync('UserInfo');
        this.setData({
            UserInfo
        })
        
    }
})
// component/myimage/myimage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    playData: {
      type: Object,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playAudio(e){
      console.log(e);
      wx.navigateTo({
        url: '/pages/play/play'
      })
    }
  }
})
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {},

  navToEditResume:function(){
    wx.navigateTo({
      url: '../editResume/editResume',
    })
  },

  navToHistory:function(){
    wx.navigateTo({
      url: '../history/history',
    })
  }
})
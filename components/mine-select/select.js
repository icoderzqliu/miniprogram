// components/mine-select/select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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

    navToResume:function(){
      wx.navigateTo({
      url: '../../pages/resume/resume',  
      })
      },

      navToMyTeam:function(){
        wx.navigateTo({
        url: '../../pages/myteam/myteam',  
        })
        }

  }
})

// pages/editTeam/editTeam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    picker: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    date: '不设定',
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
    DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
})
// pages/myteam/myteam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "teamIndex": 0, //current team
    "currentModal": null, //modal type
    "showModal": false, //show modal
    "teamNames": ["大广赛招募队员", "第二个比赛队伍名"], //for select box
    "teamInfos": [{
      "tName": "大广赛招募队员",
      "tId": 0,
      "tView": 15,
      "tInvite": 8,
      "tContact": 2,
      "tInvited": 3,
      "tRemain": 2,
      "tLastUpdate": "2020.10.16  8:00"
    }] //infomation of al teams
    /*REF:teamInfos
    "tName":"队伍名称","tId":队伍id,"tView":阅览数,"tInvite":邀请数,"tContact":沟通中数,"tInvited":已邀请数,"tRemain":剩余名额（成员页显示）,"tLastUpdate":"最后更新日期"
    */
  },
  //Invok when selected a team
  teamChange: function (e) {
    console.log("selected team No." + e.detail.value);
    this.setData({
      teamNameIndex: e.detail.value
    });
    console.log("[Todo] Here will start loading new team info.");
  },
  //confirm Dele Modal
  confirmDeleTeam: function () {
    this.setData({
      "currentModal": "ModalDeleTeam",
      "showModal": true
    });
  },
  //Start dele
  startDeleTeam: function () {
    console.log("[Todo] Here will dele current team.");
    //回调this.hidemodal();
  },
  //hide all modal
  hideModal: function () {
    this.setData({
      "currentModal": null,
      "showModal": false
    });
  },
  navToEditTeam: function () {
    wx.navigateTo({
      url: '../editTeam/editTeam',
    })
  },

  navToMember: function () {
    wx.navigateTo({
      url: '../member/member',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("[Todo] Here will start loading all team names.");
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
// pages/index/index.js
Page({
  e_test : function(e){
    console.log(e)
    this.setData({name : "forria"})
    console.log(this.data)
  },

  /**
   * 页面的初始数据
   */
  data: {
    name : "SteveWoo"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data)
    
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
    console.log("refresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("bottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
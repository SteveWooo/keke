// pages/canvas/canvas.js
var bus = {
  sfc : {},
  // data : require("data.js")
}
const SFC = require("sfc.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    spirits : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bus.sfc = new SFC({
      "canvas_id": "canvas"
    });
    var that = this;
    bus.sfc.create_spirit({src:"http://img.youai123.com/1507376761-5995.jpg", type:"image"})
      .then((res)=>{
        that.setData({spirits : bus.sfc.spirits});
        console.log(that.data.spirits);
      })
      .catch(e=>{
        console.log(e)
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
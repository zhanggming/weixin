// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },
  checkForm:function(e){
    //获取用户输入的商品名称
   var name=(e.detail.value.name)

    if (name=="") {
      //如果出错提示
      wx.showToast({
        title: '请输入商品名称商品',
        icon: "none"
      });
      setTimeout(function () { wx.hideToast(); }, 1500)
      return;
    }
   //发送ajax
   //获取返回的数据
   wx.request({
     url: 'http://mllvue.applinzi.com/index/search',
     data:{key:name},
     success:(res)=>{
       //获取返回的数据
       for (var item of res.data.data) {
         item.img = "http://mllvue.applinzi.com/" + item.img;
       }
       this.setData({ list: res.data.data })
     }
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
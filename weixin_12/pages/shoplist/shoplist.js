// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */ data: {
    rows:[],//保存食物列表
    pno:0,//保存美食列表
    pageSize:7//总页数
  },
  loadMore:function(){
    //显示加载动画
    wx.showLoading({
      title: '加载数据中...',
    })
    //获取两个参数
    var p=this.data.pno+1;
    var ps=this.data.pageSize;
    //发送ajax请求
    wx.request({
      url: 'http://mllvue.applinzi.com/index/shoplist',
      data:{pno:p,pageSize:ps},
      success:(res)=>{
        for (var item of res.data.data) {
          item.img_url = "http://mllvue.applinzi.com/" +  item.img_url;
        }
        //保存数据并且拼接操作
        var nrows=this.data.rows.concat(
          res.data.data
        );
        //console.log(res);
        this.setData({
          rows:nrows,//当前页内容
          pno:p//修改页码
        });
        setTimeout(function(){
          wx.hideLoading();
        },2000)
      }
    })
    //发送ajax请求食物列表
    //将数据保存rows中
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore()
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
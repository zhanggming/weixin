// pages/addproducts/addproducts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  checkForm:function(e){
    //验证用户点击添加商品该方法用户验证表单
    //验证点击事件的触发
    //console.log(123);
    //获取用户输入商品名称
    var name=(e.detail.value.name)
    //console.log(name)
    //创建正则表达式
     var reg=/^[a-z0-9_]{3,8}$/i;
     if(!reg.test(name)){
      //如果出错提示
      wx.showToast({
        title: '商品格式不正确 3~6位',
        icon:"none"
      });
      setTimeout(function (){wx.hideToast();},1500)
      return;
     }
       //发送ajax
       //获取返回的数据
       wx.request({
         url: 'http://mllvue.applinzi.com/index/addpro',
       data:{name:name},
       success:(res)=>{
         //获取返回数据 提示
        wx.showToast({
          title: '添加成功',
        });
        setTimeout(function(){
          wx.hideToast();
        },1000)
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
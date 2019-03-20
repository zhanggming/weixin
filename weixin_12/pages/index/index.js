//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ img: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/banner/banner1.jpg' }, { img: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/banner/banner2.jpg' }, { img: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/banner/banner3.jpg' }, { img: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/banner/banner4.jpg' },
    ],
    navlist: [{ id: 1, title: '家具', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-01.png' },  { id: 2, title: '商品搜索', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-03.png' },
  { id: 3, title: '商品添加', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-04.png' },
      { id: 4, title: '找工作', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-05.png' }, { id:5, title: '辅导班', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-06.png' },
      { id: 6, title: '汽车保修', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-07.png' },
      { id: 7, title: '租房', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-08.png' }, { id: 8, title: '装修', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-09.png' },
      { id:9, title: '更多', img_url: 'cloud://mll-52b2ba.6d6c-mll-52b2ba/img/icon/grid-02.png' },    
    ]
  },
 /*loadMore:function(){
   /*wx.request({
     url: 'http://mllvue.applinzi.com/index/imglist',
     success:(res)=>{
      for (var item of res.data) {
        item.img = "http://mllvue.applinzi.com/"+item.img;
      }
      this.setData({list:res.data})
     } 
   })
 },*/
 /*grid: function () {
  wx.request({
    url: 'http://mllvue.applinzi.com/index/grid',
    //data:{},//代表参数
    success: (res) => {
      for (var item of res.data) {
        item.img_url = "http://mllvue.applinzi.com/" + item.img_url;
      }
      this.setData({ navlist: res.data })
    }
  })
},*/
handleJump:function(e){
  //获取自定义属性
  var id=e.target.dataset.id;
  if(id==1){
    wx.navigateTo({
      url: '/pages/shoplist/shoplist',
    })
  }else if (id == 2) {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  } else if (id == 3) {
    wx.navigateTo({
      url: '/pages/addproducts/addproducts',
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.loadMore();
    //this.grid();
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
//index.js
//获取应用实例
var app = getApp()
var Num = require('./utils/num.js').Num
Page({
  data: {
    motto: 'Hello',
    userInfo: {},
    ifT:false,
    canvas:null,
    action:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getTouch:function(event){
    console.log(event);
   var _self = this;
   _self.ifT = true;
  },
  draw:function(event){
    console.log(event);
    var _self = this;
    console.log(this.canvas);
    this.action.push({ x: event.touches[0].pageX, y: event.touches[0].pageY});

    this.canvas.fillStyle = "#000";    
    this.action.forEach(function(item){
      _self.canvas.lineTo(item.x, item.y);
    });
   
    this.canvas.stroke();    
    this.canvas.draw();
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')
    this.canvas = context;
    this.action = new Array();
    console.log(Num);
   
    var b = new Num(10,10,10);
    var c = new Num(20, 30, 100,b);

    b.paint(context);
    c.paint(context);
    context.draw()


    /**
     * 以下是拖拽实现部分
     */
    
  }
})

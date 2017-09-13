//index.js
//获取应用实例
var app = getApp()
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
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()

    context.draw()
  }
})

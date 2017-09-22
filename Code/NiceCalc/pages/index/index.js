//index.js
//获取应用实例
var app = getApp()
var Num = require('./utils/num.js').Num
var Algebra = require('./utils/algebra.js').Algebra

var wxdraw = require('../../utils/src/index.js').WxDraw;
var Shape = require('../../utils/src/index.js').Shape;



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
    console.log(context);
   
    var b = new Num(10,10,10);
    var c = new Num(20, 30, 100,b);
    var d = new Algebra(10,50);
    console.log(d);
    d.add("100");
    d.add("+");    
    d.add("100");
    d.add("+");    
    d.add("1");
    d.add("+");
    d.add("1");
    d.add("+");
    d.add("1");
    d.add("+");
    
    d.calc()
    d.paint(context);
    b.paint(context);
    c.paint(context);

   



    /**测试我的 动画引擎
     * 
     * */

    var b = new wxdraw(context);

    b.add(new Shape('circle', { x:1 },true));
    
    
    b.draw(context);

    console.log(b);




    context.draw()


    /**
     * 以下是拖拽实现部分
     */


   

    
  }
})

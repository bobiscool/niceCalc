// 单纯的数字对象

/**
 * 数字
 * 与另一个数字加减乘除 最重要的一点是
 * 他与上一个 算式里面的某个数字的联系
 */

function Num(x,y,num,parent){
  this.x = x;
  this.y = y;
  this.num = num;
  this.parent = parent?parent:false;
}

Num.prototype = {
  getCenterX:function(context){
    // 拿到字体长度 
    
    var _self = this;
    var _l = String(_self.num).length;
    return (this.x - _l*3);
  },
  updateNum(num){
    //更新 当前数字对象
    this.num = num
  },
  lineTo:function(context){
     if(this.parent){
       context.save();
       context.beginPath();
       context.moveTo(this.x,this.y-10);
       context.lineTo(this.parent.x, this.parent.y);
       context.stroke();
       context.restore();
     } 
  
  },
  paint(context){
    
    context.save();
    context.fillStyle = "rgb(0,0,0)";
    context.fillText(this.num, this.getCenterX(),this.y);
    if(this.parent){
      this.lineTo(context);
    }
    context.restore();
  } 
}

module.exports = {
  Num: Num
}
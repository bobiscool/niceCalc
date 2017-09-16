// 算式对象
/**
 * 里面有
 * 
 * 若干参与算术计算的数字，以及符号，还有 最后的结果
 */
var Store = require('./store.js').Store;
var Num = require('./num.js').Num;

function CheckNum(sth){
  // 检测一个 文字段 是数字还是数学符号 还是不能用于计算
  if(/^\d+$/.test(sth)){
    return 'num';
  }else if(/^[\+\-\*\\]$/.test(sth)){
    return "syb"; 
  }else {
    return false;
  }
}



function Algebra(x,y){
  this.x = x;
  this.y = y;
  this.store = new Store();
}

Algebra.prototype = {
  add:function(numOrsyb){
    var _tem = null;
    if(CheckNum(numOrsyb) == 'num'){

      _tem = new Num(this.calcX(),this.y,numOrsyb);
      this.store.add(_tem);
    }else if(CheckNum(numOrsyb) == 'syb'){
      // _tem = new Num(this.calcX, this.y, numOrsyb);
      // this.store.push(_tem);
    }
  },
  calcX:function(){
    var _temL=0
    
    this.store._store.forEach(function(item){
      _temL += item.getBorder().width;
    });

    return _temL+this.x;
  },
  update:function(){

  },
  paint:function(context){
    this.store._store.forEach(function(item){
       item.paint(context);
    });
  }


}


module.exports = {
  Algebra : Algebra
}

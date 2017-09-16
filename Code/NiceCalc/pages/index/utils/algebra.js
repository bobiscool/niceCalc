// 算式对象
/**
 * 里面有
 * 
 * 若干参与算术计算的数字，以及符号，还有 最后的结果
 */
var Store = require('./store.js').Store;
var Num = require('./num.js').Num;
var Sym = require('./symbol.js').Sym;
var mathjs = require('./math.min.js')

console.log(mathjs)
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

function CheckCalculable(){
  // 判断是否可以进行计算

}

function Algebra(x,y){
  this.x = x;
  this.y = y;
  this.store = new Store();
  this.calculated = false;
}

Algebra.prototype = {
  add:function(numOrsyb){
    var _tem = null;
    if(CheckNum(numOrsyb) == 'num'){

      _tem = new Num(this.calcX(),this.y,numOrsyb);
      this.store.add(_tem);
    }else if(CheckNum(numOrsyb) == 'syb'){
      _tem = new Sym(this.calcX(), this.y, numOrsyb);
      this.store.add(_tem);
    }
  },
  calcX:function(){
    //这个是计算位置
    var _temL=0
    
    this.store._store.forEach(function(item){
      _temL += item.getBorder().width;
    });

    return _temL+this.x;
  },
  calc:function(){
    //这才是真正的计算
    var _temAl = '';
    this.store._store.forEach(function(item){
       _temAl +=item.getExe();
    });

    var b = eval(_temAl);
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

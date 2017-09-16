//符号对象

function Sym(x, y, sym) {
  this.x = x;
  this.y = y;
  this.sym = sym;
}

Sym.prototype = {
  getCenterX: function (context) {
    // 拿到字体长度 

    var _self = this;
    var _l = String(_self.sym).length;
    return (this.x - _l * 3);
  },
  updateSym(sym) {
    //更新 当前符号对象
    this.sym = sym
  },
  getBorder: function () {
    // 获取这个字段 长宽高
    var _self = this;
    var _l = String(_self.num).length;

    return {
      x: this.x,
      y: this.y,
      width: _l * 6,
      height: 12
    }
  },
  paint(context) {
    context.save();
    context.fillStyle = "rgb(0,0,0)";
    context.fillText(this.sym, this.getCenterX(), this.y);
    context.restore();
  }
}

module.exports = {
  Sym: Sym
}
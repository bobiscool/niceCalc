// 仓库 存储绘图数据 增删改查

function Store(){
  this._store = new Array;
}


Store.prototype = {
  add(alge){
   // 更新代数 仓库   
   this._store.push(alge);
  },
  del(index){
    //删除
  },
  update(index,a){
    this._store[index].update(a);
  },
  find(exe){
    return this._store.find(exe(item,index));
  }

}


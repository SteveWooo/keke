function SFC(options) {
  var $ = wx.createSelectorQuery();
  //创建上下文
  this.ctx = wx.createCanvasContext(options.canvas_id);
  var that = this;

  this.spirits = [];//
  /*
  * 渲染精灵列表
  */
  this.render = function () {
    for (var i = 0; i < that.spirits.length; i++) {
      var item = that.spirits[i];
      if (item.type == "image") {
        that.drawImage(item);
      }
    }
  }
  /*
  * 创建一个场景精灵
  */
  this.create_spirit = function(options){
    var item = {
      x : 0,
      y : 0,
      width : 0,
      high : 0,
      path : ""
    }
    return new Promise((resolve, reject) => {
      if (options.type == "image") {
        if (!options.src) {
          console.error("no images");
          reject({
            message : "no images"
          })
          return;
        }
        item.type = "image";
        that.getImage({src : options.src}, function(res){
          for(var i in res){
            item[i] = res[i];
          }
          that.spirits.push(item);
          that.render();
          resolve(item);
        });
      }
    })
  }

  /*
  * 调用画布画图功能
  */
  this.drawImage = function(options){
    that.ctx.drawImage(options.path, options.x, options.y, options.width, options.high);
    that.ctx.draw();
  }

  /*
  * (待兼容)
  * 下载远程服务器图片
  */
  this.getImage = function(options, callback){
    wx.getImageInfo({
      src: options.src,
      success : function(res){
        var modify_width = res.width / 150;
        var modify_high = res.high / 150;
        callback({
          path : res.path,
          x : 0,
          y : 0,
          width: parseInt(res.width / modify_width),
          high: parseInt(res.width / modify_width)
        })
      },
      fail : function(e){
        console.error(e);
      }
    })
  }
  return this;
}

module.exports = SFC;
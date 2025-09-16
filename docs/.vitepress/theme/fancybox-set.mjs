
function photoSet(md){

    // 先将默认的方法复制
    var defaultRenderer = md.renderer.rules['image'];

    // 新方法在原本的基础增加了属性
    md.renderer.rules['image'] = function (tokens, idx, options, env, self) {
      var token = tokens[idx];
     
      // 设置跟Fancybox一样的属性
      token.attrSet('data-fancybox', "gallery")
      
      return defaultRenderer(tokens, idx, options, env, self);
    };
}



export default photoSet
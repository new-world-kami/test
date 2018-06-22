var http =require('http');

var server=http.createServer(function(){

})

server.on('request',function(req,res){
  
  res.end('返回成功');
}).listen(3000,function(){
  console.log('成功');
})
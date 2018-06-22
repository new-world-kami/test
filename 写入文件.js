var fs=require('fs');

fs.writeFile('./123.txt','里面有内容，我再添加内容',function(err){
    console.log(err);
    
});
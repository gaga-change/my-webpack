## vue-webpack 从简到繁

### DEMO

#### demo01
功能：
* 压缩js文件，以及其它基本操作

使用方法：

命令行方式
    
    # 不压缩
    webpack entry.js test.js
    
    # 压缩(会缩写变量名)
    webpack entry.js test.js -p
    
    # 自动监听文件改动，实时打包
    webpack entry.js test.js --watch
    
    # 在js文件内附加source maps内容
    webpack entry.js test.js -d
    
    # 显示静态资源的颜色（此demo下无用）
    webpack entry.js test.js --colors   

#### demo02

增加： 
1. webpack.config.js 配置文件

#### demo03

增加：
1. 利用js文件引入css样式文件

#### demo04
增加：
1. css文件中和js文件中导入的的图片进行转化


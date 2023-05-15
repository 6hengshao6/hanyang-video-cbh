# 视频共享云平台

## 组件划分

### 公共组件

地图 my-map：自研
页面头部 my-navbar：自研
页面底部 my-footer：自研
报警列表 my-alarm-list：自研
排名列表 my-ranking-list：自研
卡片 el-card：基于 element 的 el-card 修改样式
对话框 el-dialog：基于 element 的 el-dialog 修改样式

### 私有组件

物联接入 lot-access：自研
报警统计 alarm-statistics：自研

## 页面布局

页面头部和底部使用 position: absolute 绝对定位
内容区域宽度 100vw 和高度 100vh，竖向超出自动滚动

## 其他

摄像头点标记图标

![蓝色](https://s3.bmp.ovh/imgs/2022/07/13/b3d5b4369bfd4482.png)

![红色](https://s3.bmp.ovh/imgs/2022/07/13/ca131b4c3b99e1d7.png)

### 运行项目

`npm run serve`

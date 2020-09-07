### 边框 Shadow

### Shadow 阴影1
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-shadow-1		|	全部
|	h-shadow-1-right|	靠右
|	h-shadow-1-down	|	靠下
|	h-shadow-1-left	|	靠左



### Shadow 阴影2
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-shadow-2		|	全部
|	h-shadow-2-right|	靠右
|	h-shadow-2-down	|	靠下
|	h-shadow-2-left	|	靠左



### Shadow 阴影3
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-shadow-3		|	全部
|	h-shadow-3-right|	靠右
|	h-shadow-3-down	|	靠下
|	h-shadow-3-left	|	靠左


### 特别的 Shadow 翘边
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-shadow-warp	|	翘边阴影
|	h-shadow-img	|	背景图阴影
代码实例:
```html
<view class="h-bg-white m-tb-sm p-tb h-shadow-warp">
  <text class="h-text-sm h-text-grey h-text-center h-text-height">翘边阴影</text>
</view>
<view class="m-tb-sm p-tb h-shadow-img h-bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
  <text class="h-text-sm h-text-white h-text-center h-text-height">更具图片该表面的阴影</text>
</view>
```


### Shadow 阴影大小设置
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-shadow-{size}	|	size的值:不填值为正常大小的阴影、lg 长阴影

代码实例:
```html
<view class="h-bg-white m-tb-sm p-tb h-shadow">
  <text class="h-text-sm h-text-grey h-text-center h-text-height">默认阴影</text>
</view>
<view class="h-bg-white m-tb-sm p-tb h-shadow-lg">
  <text class="h-text-sm h-text-grey h-text-center h-text-height">长阴影</text>
</view>
```




### 边框 Border
	
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-border		|	四周边框
|	h-border-top	|	上边框
|	h-border-left	|	左边框
|	h-border-bottom	|	下边框
|	h-border-right	|	右边框

代码实例:
```html
<view class="p h-bg-white">
  <view class="h-bg-white p-tb h-corner-xs h-border">
    <text class="h-text-sm h-text-grey h-text-center h-text-height">四周边框</text>
  </view>
  <view class="h-bg-white p-tb h-corner-xs h-border-top">
    <text class="h-text-sm h-text-grey h-text-center h-text-height">上边框</text>
  </view>
  <view class="h-bg-white p-tb h-corner-xs h-border-left">
    <text class="h-text-sm h-text-grey h-text-center h-text-height">左边框</text>
  </view>
  <view class="h-bg-white p-tb h-corner-xs h-border-right">
    <text class="h-text-sm h-text-grey h-text-center h-text-height">右边框</text>
  </view>
  <view class="h-bg-white p-tb h-corner-xs h-border-bottom">
    <text class="h-text-sm h-text-grey h-text-center h-text-height">下边框</text>
  </view>
</view>
```

### 虚线边框 Border
	
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-dashed		|	四周边框
|	h-dashed-top	|	上边框
|	h-dashed-left	|	左边框
|	h-dashed-bottom	|	下边框
|	h-dashed-right	|	右边框

代码实例:
```html
<view class="h-bg-white p-tb h-corner-xs h-dashed">
	<text class="h-text-sm h-text-grey h-text-center h-text-height">虚线</text>
</view>
```
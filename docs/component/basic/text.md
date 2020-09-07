### 文本 Text

### 文字大小 
|  	class   	|   大小	|	说明	|
|  	:----  		| 	:----  	| 	:----  	|
|	h-text-lg 	|	44rpx	| 用于图标、数字等特大显示
|	h-text-md 	|	36rpx	| 用于图标、数字等较大显示
|	h-text-sm 	|	32rpx	| 页面大标题，用于结果或者单一信息显示
|	h-text-xs 	|	28rpx	| 页面小标题，首要层级显示内容
|	h-text-s 	|	24rpx	| 页面默认字体，用于摘要或者阅读文本
|	h-text-l 	|	20rpx	| 页面辅助信息，次级内容

代码实例:
```html
<view class="h-text-l h-text-center h-bg-white m-tb-sm p-tb">页面辅助信息，次级内容</view>
<view class="h-text-s h-text-center h-bg-white m-tb-sm p-tb">页面默认字体，用于摘要或者阅读文本</view>
<view class="h-text-xs h-text-center h-bg-white m-tb-sm p-tb">页面小标题，首要层级显示内容</view>
<view class="h-text-sm h-text-center h-bg-white m-tb-sm p-tb">页面大标题，用于结果或者单一信息显示</view>
<view class="h-text-md h-text-center h-bg-white m-tb-sm p-tb">用于图标、数字等较大显示</view>
<view class="h-text-lg h-text-center h-bg-white m-tb-sm p-tb">用于图标、数字等特大显示</view>
```


### 文字颜色
文字颜色有主题配置class
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-text-{color}	|	color可选值:主题配置文字颜色值

代码实例:
```html
<view class="h-text-sm h-text-center h-bg-white m-tb-sm p-tb">
  <text class="h-text-red">红色 red</text>
</view>
<view class="h-text-sm h-text-center h-bg-white m-tb-sm p-tb">
  <text class="h-text-orange">桔橙 orange</text>
</view>
<view class="h-text-sm h-text-center h-bg-white m-tb-sm p-tb">
  <text class="h-text-yellow">明黄 yellow</text>
</view>
<view class="h-text-sm h-text-center h-bg-white m-tb-sm p-tb">
  <text class="h-text-olive">橄榄 olive</text>
</view>
<view class="h-text-sm h-text-center h-bg-white m-tb-sm p-tb">
  <text class="h-text-green">森绿 green</text>
</view>
```

### 文字排列方式
|  	class   		|	说明	|
|  	:----  			| 	:----  	|
|	h-text-left		|	靠左排列
|	h-text-center	|	居中排列
|	h-text-right	|	靠右排列
示例代码:
```html
<view class="h-text-sm h-bg-white m-tb-sm p-l p-tb">
  <text class="h-text-left">我于杀戮之中绽放 ,亦如黎明中的花朵</text>
</view>
<view class="h-text-sm h-bg-white m-tb-sm p-l p-tb">
  <text class="h-text-center">我于杀戮之中绽放 ,亦如黎明中的花朵</text>
</view>
<view class="h-text-sm h-bg-white m-tb-sm p-l p-tb">
  <text class="h-text-right">我于杀戮之中绽放 ,亦如黎明中的花朵</text>
</view>
```

### 文字截断
|  	class   	|	说明	|
|  	:----  		| 	:----  	|
|	h-text-cut	|	文字单行截断
示例代码:
```html
<view class="h-text-sm h-bg-white m-tb-sm p-tb">
  <view class="h-text-black h-text-cut m-l" style="width:120px">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
</view>
```


### 特殊处理
英文首字母大写、字母全部大写、字母全部小写、加粗、斜体、删除线
|  	class   	|	说明	|
|  	:----  		| 	:----  	|
|	h-text-Hey	|	英文首字母大写
|	h-text-HEY	|	字母全部大写
|	h-text-hey	|	字母全部小写
|	h-text-bold	|	加粗
|	h-text-skew	|	斜体
|	h-text-del	|	删除线
示例代码:
```html
<view class="h-text-sm h-text-height h-bg-white m-tb-sm h-text-center h-text-HEY p-tb">
  <text>hey ui</text>
  <text>全部字母大写</text>
</view>
<view class="h-text-sm h-text-height h-bg-white m-tb-sm h-text-center h-text-Hey p-tb">
  <text>hey ui</text>
  <text>英文单词首字母大写</text>
</view>
<view class=" h-text-sm h-text-height h-bg-white m-tb-sm h-text-center h-text-hey p-tb">
  <text>hey ui</text>
  <text>全部字母小写</text>
</view>
<view class=" h-text-sm h-text-height h-bg-white m-tb-sm h-text-center h-text-Hey p-tb">
  <text class="h-text-bold">hey ui</text>
  <text>文字加粗</text>
</view>
<view class=" h-text-sm h-text-height h-bg-white m-tb-sm h-text-center h-text-Hey p-tb">
  <text class="h-text-skew">hey ui</text>
  <text>文字倾斜</text>
</view>
<view class=" h-text-sm h-text-height h-bg-white m-tb-sm h-text-center h-text-Hey p-tb">
  <text class="h-text-del">hey ui</text>
  <text>文字删除线</text>
</view>

```

### 输入框 Input

### class 集合

|  class   				| 说明  |
|  :----  				| :----  	|
|.h-btn	 				| 默认的按钮样式
|.h-bg-{color} 			| 有背景色的按钮，red,green,blue,yellow,primary
|.h-text-{color}		| hover下，文字与边框变色的按钮，red,green,blue,yellow
|.h-corner-{size}		| 圆角按钮lg圆角md超大sm大圆角xs常规s小圆角


### 展现形式:卡片||通栏

通栏不需要在外一层加入` menu card-menu`类的名称；卡片需要加入。

示例代码

```html
<!-- 通栏 -->
<view class="h-list">
  <form>
    <view class="h-form-group">
      <view class="title">输入框</view>
      <input placeholder="三字标题"></input>
    </view>
    <view class="h-form-group">
      <view class="title">收货地址</view>
      <input placeholder="统一标题的宽度"></input>
    </view>
  </form>
</view>
<!-- 卡片 -->
<view class="h-list menu card-menu m-tb">
  <form>
    <view class="h-form-group margin-top">
      <view class="title h-text-blue h-text-right">邮件</view>
      <input placeholder="两字短标题"></input>
    </view>
    <view class="h-form-group">
      <view class="title">输入框</view>
      <input placeholder="三字标题"></input>
    </view>
  </form>
</view>
```

### label的对齐方式

	请参考文字的队列方式。


### label的宽度大小

|  	class   	|   大小		|	说明	|
|  	:----  		| 	:----  		| 	:----  	|
|	label-lg 	|	width: 25%;	| 默认字体五个字
|	label-md 	|	width: 20%;	| 默认字体四个字
|	label-sm 	|	width: 10%;	| 默认字体两个字

示例代码
```html
<view class="h-list menu card-menu m-tb">
  <view class="h-form-group margin-top">
    <view class="title label-sm h-text-blue h-text-left">俩字</view>
    <input placeholder="请输入内容"></input>
  </view>
  <view class="h-form-group">
    <view class="title label-md h-text-center">能四个字</view>
    <input placeholder="请输入内容"></input>
  </view>
  <view class="h-form-group">
    <view class="title label-lg h-text-right">五个字很好</view>
    <input placeholder="请输入内容"></input>
  </view>
</view>
```

### 输入类型

主要参考小程序官方手册

示例代码
```html
<view class="h-list menu card-menu m-tb">
  <view class="h-form-group margin-top">
    <view class="title label-sm h-text-blue h-text-left">随便</view>
    <input type="text" placeholder="可以输入任何文本"></input>
  </view>
  <view class="h-form-group margin-top">
    <view class="title label-sm h-text-blue h-text-left">数字</view>
    <input type="number" placeholder="输入数字"></input>
  </view>
  <view class="h-form-group margin-top">
    <view class="title label-sm h-text-blue h-text-left">小数</view>
    <input type="digit" placeholder="输入带小数点"></input>
  </view>
  <view class="h-form-group margin-top">
    <view class="title label-sm h-text-blue h-text-left">身份</view>
    <input type="idcard" placeholder="输入身份证"></input>
  </view>
</view>
```
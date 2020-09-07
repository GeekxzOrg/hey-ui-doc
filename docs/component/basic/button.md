### 按钮 Button

### 按钮形状

结合边角Corner的类名称`h-corner-{size}`,可分为默认、圆角、圆三种形状

示例代码
```html
<view class="p h-flex h-flex-wrap h-justify-between h-align-center h-bg-white">
  <button class="h-btn">默认</button>
  <button class="h-btn h-corner-lg">圆角</button>
  <button class="h-btn icon icon">
    <text class="heyui-emojifill"></text>
  </button>
</view>
```

### 按钮大小

> 注意: 默认按钮大小为`64rpx` 只需定义class为`h-btn`即可

|  	class   	|   大小	|	说明	|
|  	:----  		| 	:----  	| 	:----  	|
|	h-btn-lg 	|	80rpx	| 用于图标、数字等特大显示
|	h-btn-sm 	|	48rpx	| 用于图标、数字等较大显示


示例代码
```html
<view class="p h-flex h-flex-wrap h-justify-between h-align-center h-bg-white">
  <button class="h-btn h-btn-sm h-corner-lg">小尺寸</button>
  <button class="h-btn h-corner-lg">默认</button>
  <button class="h-btn h-btn-lg h-corner-lg">大尺寸</button>
</view>
```


### 按钮颜色

基本色:

|参数			|	说明						|	可选值	|	默认值
|  :----  		| :----  						|  :----  	| :----  
|h-bg-{color}		|	背景有颜色的按钮		|	red,green,blue,yellow,primary...	|	-
|h-bg-{color}-light	|	背景有淡颜色的按钮		|	red,green,blue,yellow,primary...	|	-

示例代码

```html
<view class="h-grid h-col-5 p-sm">
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-bg-red">红色</button>
    <button class="h-btn h-bg-orange">桔橙</button>
    <button class="h-btn h-bg-yellow">明黄</button>
    <button class="h-btn h-bg-olive">橄榄</button>
    <button class="h-btn h-bg-green">森绿</button>
  </view>
</view>
```

主题色:


### 按钮镂空&禁用&通栏


镂空示例代码

```html
<view class="h-grid h-col-5 p-sm">
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-line-red">红色</button>
    <button class="h-btn h-line-orange">桔橙</button>
    <button class="h-btn h-line-yellow">明黄</button>
    <button class="h-btn h-line-olive">橄榄</button>
    <button class="h-btn h-line-green">森绿</button>
  </view>
</view>
```

禁用&通栏示例代码

```html
<view class="p">
  <button class="h-btn h-btn-lg h-corner-lg block h-bg-blue m-tb-sm" disabled type="">无效通栏状态</button>
  <button class="h-btn h-btn-lg block h-line-blue m-tb-sm" disabled>无效状态</button>  
  <button class="h-btn h-btn-lg h-corner-lg h-bg-blue m-tb-sm" disabled type="">无效状态</button>  
  <button class="h-btn h-btn-lg h-line-blue m-tb-sm" disabled>无效状态</button>
</view>
```

###按钮图标

示例代码

```html
<view class="p">
  <button class="h-btn block h-line-orange h-btn-lg">
    <text class="heyui-upload"></text> 图标
  </button>
  <button class="h-btn block h-bg-blue m-tb-sm h-btn-lg">
    <text class="heyui-loading2 iconfont-spin"></text> 加载
  </button>
  <button class="h-btn block h-bg-black m-tb-sm h-btn-lg" loading> 微信加载</button>
</view>
```

### 特殊能力


示例代码
```html
<view class="h-grid h-col-3 p-sm h-bg-white">
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-btn-lg h-corner-sm h-bg-cyan h-shaaow" open-type="contact">
      <text class="h-text-white">客服</text>
    </button>
  </view>  
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-btn-lg h-corner-sm h-bg-blue h-shaaow" open-type="getPhoneNumber">
      <text class="h-text-white">手机</text>
    </button>
  </view>
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-btn-lg h-corner-sm h-bg-purple h-shaaow" open-type="getUserInfo">
      <text class="h-text-white">授权</text>
    </button>
  </view>
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-btn-lg h-corner-sm h-bg-mauve h-shaaow" open-type="openSetting">
      <text class="h-text-white">设置</text>
    </button>
  </view>  
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-btn-lg h-corner-sm h-bg-pink h-shaaow" open-type="feedback">
      <text class="h-text-white">意见</text>
    </button>
  </view>  
  <view class="m-tb-sm h-text-center">
    <button class="h-btn h-btn-lg h-corner-sm h-bg-green h-shaaow " open-type="share">
      <text class="h-text-white">分享</text>
    </button>
  </view>
</view>
```




### class 集合

|  class   				| 说明  |
|  :----  				| :----  	|
|.h-btn	 				| 默认的按钮样式
|.h-bg-{color} 			| 有背景色的按钮，red,green,blue,yellow,primary
|.h-text-{color}		| hover下，文字与边框变色的按钮，red,green,blue,yellow
|.h-corner-{size}		| 圆角按钮lg圆角md超大sm大圆角xs常规s小圆角

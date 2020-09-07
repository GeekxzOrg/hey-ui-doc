### 边角 Corner

边角的class名称

|  	class   		|   大小	|	说明	|
|  	:----  			| 	:----  	| 	:----  	|
|	h-corner-lg 	|	9999rpx	| 圆
|	h-corner-md 	|	32rpx	| 超大圆角
|	h-corner-sm 	|	12rpx	| 大圆角
|	h-corner-xs 	|	6rpx	| 常规圆角
|	h-corner-s 		|	2rpx	| 小圆角
示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
  <view class="h-bg-grey m-t p h-corner-s">s 2rpx</view>
  <view class="h-bg-grey m-t p h-corner-xs">xs 6rpx</view>
  <view class="h-bg-grey m-t p h-corner-sm">sm 12rpx</view>
  <view class="h-bg-grey m-t p h-corner-md">md 32rpx</view>
  <view class="h-bg-grey m-t p h-corner-lg">lg 9999rpx</view>
</view>
```

上边角class名称

|  	class   			|   大小	|	说明	|
|  	:----  				| 	:----  	| 	:----  	|
|	h-corner-tlr-lg 	|	32rpx	| 超大圆角
|	h-corner-tlr-md 	|	12rpx	| 圆角

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
  <view class="h-bg-grey m-t p h-corner-tlr-sm">sm 12rpx</view>
  <view class="h-bg-grey m-t p h-corner-tlr-md">md 32rpx</view>
</view>
```


下边角class名称

|  	class   			|   大小	|	说明	|
|  	:----  				| 	:----  	| 	:----  	|
|	h-corner-tlr-lg 	|	32rpx	| 超大圆角
|	h-corner-tlr-md 	|	12rpx	| 圆角

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
  <view class="h-bg-grey m-t p h-corner-blr-sm">sm 12rpx</view>
  <view class="h-bg-grey m-t p h-corner-blr-md">md 32rpx</view>
</view>
```

左边角class名称

|  	class   			|   大小	|	说明	|
|  	:----  				| 	:----  	| 	:----  	|
|	h-corner-ltb-lg 	|	32rpx	| 超大圆角
|	h-corner-ltb-md 	|	12rpx	| 圆角

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
  <view class="h-bg-grey m-t p h-corner-ltb-sm">sm 12rpx</view>
  <view class="h-bg-grey m-t p h-corner-ltb-md">md 32rpx</view>
</view>
```


右边角class名称

|  	class   			|   大小	|	说明	|
|  	:----  				| 	:----  	| 	:----  	|
|	h-corner-rtb-lg 	|	32rpx	| 超大圆角
|	h-corner-rtb-md 	|	12rpx	| 圆角
|	h-corner-rtb-sm 	|	12rpx	| 小圆角

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
  <view class="h-bg-grey m-t p h-corner-rtb-sm">sm 12rpx</view>
  <view class="h-bg-grey m-t p h-corner-rtb-md">md 32rpx</view>
  <view class="h-bg-grey m-t p h-corner-rtb-lg">lg 9999rpx</view>
</view>
```


特别的边角class名称

|  	class   			|   大小	|	说明	|
|  	:----  				| 	:----  	| 	:----  	|
|	h-corner-clip-sm 	|	12rpx	| 小切角
|	h-corner-clip-md 	|	32rpx	| 大切角
|	h-corner-shape-green|	30rpx	| 内切角

示例代码
```html
<view class="p h-bg-white">
  <view class=" h-bg-img h-corner-clip-sm h-avatar h-avatar-lg m-l" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
  <view class="h-corner-clip-md h-avatar h-avatar-lg m-l h-bg-blue"></view>
</view>

<view class="p h-bg-white">
  <view class="h-corner-shape-green h-avatar h-avatar-lg m-l h-bg-blue"></view>
</view>
```
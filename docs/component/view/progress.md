### 进度条 Progress


### 形状
```html
<view class="p h-bg-white">
  <view class="h-progress h-corner-lg">
    <view class="h-bg-red" style="width:{{loading?'88.8%':''}};">88.8%</view>
  </view>
  <view class="h-progress h-corner-md m-t">
    <view class="h-bg-red" style="width:{{loading?'66.6%':''}};">66.6%</view>
  </view>
  <view class="h-progress h-corner-sm m-t">
    <view class="h-bg-red" style="width:{{loading?'88.8%':''}};">88.8%</view>
  </view>
  <view class="h-progress h-corner-xs m-t">
    <view class="h-bg-red" style="width:{{loading?'66.6%':''}};">66.6%</view>
  </view>  
  <view class="h-progress h-corner-l m-t">
    <view class="h-bg-red" style="width:{{loading?'88.8%':''}};">88.8%</view>
  </view>
</view>

```

### 大小
```html
<view class="p h-bg-white">
  <view class="h-progress">
    <view class="h-bg-red" style="width:{{loading?'88.8%':''}};"></view>
  </view>
  <view class="h-progress m-t h-progress-sm">
    <view class="h-bg-red" style="width:{{loading?'66.6%':''}};"></view>
  </view>
  <view class="h-progress m-t h-progress-xs">
    <view class="h-bg-red" style="width:{{loading?'18.8%':''}};"></view>
  </view>
</view>
```
### 条纹
```html
<view class="p h-bg-white">
  <view class="h-progress h-progress-sm striped active h-corner-lg">
    <view class="h-bg-green" style="width:{{loading?'60%':''}};">60%</view>
  </view>
  <view class="h-progress h-progress-sm striped h-corner-lg m-t">
    <view class="h-bg-black" style="width:{{loading?'40%':''}};"></view>
  </view>
</view>
```

### 其他
```html
<view class="p h-bg-white p-b-xl">
  <view class="h-flex m-t">
    <view class="h-progress h-corner-lg">
      <view class="h-bg-green" style="width:{{loading?'80%':''}};"></view>
    </view>
    <text class="m-l">80%</text>
  </view>
</view>
```
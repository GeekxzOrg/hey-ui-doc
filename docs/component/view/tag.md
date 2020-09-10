### 进度条 Progress


### 形状
```html
<view class="h-bar h-bg-white h-border-bottom">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 标签形状</text>
  </view>
</view>
<view class="p h-bg-white">
  <view class="h-tag">默认</view>
  <view class="h-tag h-corner-xs">6rpx</view>
  <view class="h-tag h-corner-sm">12rpx</view>
  <view class="h-tag h-corner-lg">圆角</view>
</view>
```

### 大小
```html
<view class="h-bar h-bg-white h-border-bottom m-t">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 标签尺寸</text>
  </view>
</view>
<view class="p h-bg-white">
  <view class="h-tag h-tag-sm h-corner-xs">小尺寸</view>
  <view class="h-tag">默认</view>
  <view class="h-tag h-tag-lg h-corner-sm">大尺寸</view>
</view>
```
### 条纹
```html
<view class="h-bar h-bg-white h-border-bottom m-t">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 标签颜色</text>
  </view>
</view>
<view class="p h-bg-white h-flex h-flex-wrap">
  <view class="p-xs" wx:for="{{ColorList}}" wx:key  wx:if="{{item.name!='gray'}}">
    <view class="h-tag h-bg-{{item.name}}">{{item.title}}</view>
  </view>
  <view class="p-xs" wx:for="{{ColorList}}" wx:key  wx:if="{{item.name!='gray' && item.name!='black' && item.name!='white'}}">
    <view class="h-tag h-bg-{{item.name}}-light">{{item.title}}</view>
  </view>
</view>
```

### 其他
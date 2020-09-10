### 选项卡 Tabs

### 默认演示

示例代码
```html

<scroll-view scroll-x class="h-bg-white h-nav" scroll-with-animation scroll-left="{{scrollLeft}}">
  <view class="h-item {{index==TabCur?'h-text-green cur':''}}" wx:for="{{88}}" wx:key ='item' bindtap="selectTab" data-id="{{index}}">
    Tab{{index}}
  </view>
</scroll-view>
```

### 居中
```html
<scroll-view scroll-x class="h-bg-white h-nav h-text-center">
  <view class="h-item {{index==TabCur?'h-text-blue cur':''}}" wx:for="{{3}}" wx:key="item" bindtap="selectTab" data-id="{{index}}">
    HeyUI-{{index}}
  </view>
</scroll-view>
```

### 平分

```html
<scroll-view scroll-x class="h-bg-white h-nav">
  <view class="h-flex h-text-center">
    <view class="h-item h-flex-sub {{index==TabCur?'h-text-orange cur':''}}" wx:for="{{2}}" wx:key='item' bindtap="selectTab" data-id="{{index}}">
      HeyUI-{{index}}
    </view>
  </view>
</scroll-view>
```

### 带图标
```html
<!-- 上边图标 -->
<scroll-view scroll-x class="h-bg-black h-nav h-text-center h-grid h-col-3 m-t">
  <view class="h-item {{0==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="0">
    <view class="heyui-camerafill nav-icon"></view>
    <text class="h-text-white">数码</text>
  </view>  
  <view class="h-item {{1==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="1">
    <view class="heyui-upstagefill  nav-icon"></view>
    <text class="h-text-white">排行榜</text>
  </view>
  <view class="h-item {{2==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="2">
    <view class="heyui-clothesfill nav-icon"></view>
    <text class="h-text-white">皮肤</text>
  </view>
</scroll-view>
<!-- 左边图标 -->
<scroll-view scroll-x class="h-bg-black h-nav h-text-center m-t">
  <view class="h-item {{0==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="0">
    <text class="heyui-camerafill"></text> 数码
  </view>
  <view class="h-item {{1==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="1">
    <text class="heyui-upstagefill"></text> 排行榜
  </view>
  <view class="h-item {{2==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="2">
    <text class="heyui-clothesfill"></text> 皮肤
  </view>
</scroll-view>
<!-- 右边图标 -->
<scroll-view scroll-x class="h-bg-black h-nav h-text-center m-t">
  <view class="h-item {{0==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="0">
    数码 <text class="heyui-camerafill"></text>
  </view>
  <view class="h-item {{1==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="1">
    排行榜 <text class="heyui-upstagefill"></text>
  </view>
  <view class="h-item {{2==TabCur?'h-text-white cur':''}}" bindtap="selectTab" data-id="2">
    皮肤 <text class="heyui-clothesfill"></text>
  </view>
</scroll-view>
```

### 换色
```html
<view class="h-list menu card-menu m-tb">
<scroll-view scroll-x class="h-bg-yellow h-nav">
  <view class="h-flex h-text-center">
    <view class="h-item h-flex-sub {{index==TabCur?'h-text-white cur':''}}" wx:for="{{2}}" wx:key='item' bindtap="selectTab" data-id="{{index}}">
      HeyUI-{{index}}
    </view>
  </view>
</scroll-view>
</view>
<view class="h-list menu card-menu m-tb">
  <scroll-view scroll-x class="h-bg-cyan h-nav h-text-center">
    <view class="h-item {{index==TabCur?'h-text-black cur':''}}" wx:for="{{3}}" wx:key="item" bindtap="selectTab" data-id="{{index}}">
      HeyUI-{{index}}
    </view>
  </scroll-view>
</view>
```
### 列表 List

### 菜单列表形状种类

```html
<view class="h-list menu">
  <view class="h-item h-arrow">
    <view class="content">
      <text class="heyui-circlefill h-text-grey"></text>
      <text class="h-text-grey">图标 + 标题</text>
    </view>
  </view>
  <view class="h-item">
    <view class="content">
      <image src="/images/logo.jpg" class="png" mode="aspectFit"></image>
      <text class="h-text-grey">图片 + 标题</text>
    </view>
  </view>
  <view class="h-item">
    <view class="content">
        <text class="heyui-emojiflashfill h-text-pink"></text>
        <text class="h-text-grey">头像组</text>
      </view>
      <view class="action">
        <view class="h-avatar-group">
          <view class="h-avatar h-corner-lg sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg);"></view>
          <view class="h-avatar h-corner-lg sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg);"></view>
          <view class="h-avatar h-corner-lg sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg);"></view>
          <view class="h-avatar h-corner-lg sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
        </view>
        <text class="text-grey text-sm">4 人</text>
      </view>
  </view>
  <view class="h-item">
    <view class="content">
      <text class="heyui-btn h-text-green"></text>
      <text class="h-text-grey">按钮</text>
    </view>
    <view class="action">
      <button class="h-btn h-corner-sm h-bg-green h-shadow">
        <text class="heyui-upload"> 上传</text></button>
    </view>
  </view>
  <view class="h-item">
    <view class="content">
      <text class="heyui-warn h-text-green"></text>
      <text class="h-text-grey">文本</text>
    </view>
    <view class="action">
      <text class="h-text-grey h-text-s">小目标还没有实现！</text>
    </view>
  </view>
</view>
```

### 特殊功能

```html
<view class="h-list menu card-menu m-tb">
  <view class="h-item h-arrow">
    <button class="h-btn content" open-type="contact">
      <text class="heyui-btn text-olive"></text>
      <text class="h-text-grey">Open-type 按钮</text>
    </button>
  </view>
  <view class="h-item">
    <navigator class="content" hover-class="none" url="/pages/layout/layout" open-type="redirect">
      <text class="heyui-discoverfill h-text-orange"></text>
      <text class="h-text-grey">Navigator 跳转</text>
    </navigator>
  </view>
  
</view
```

### 宫格布局

```html
<view class="h-list h-grid h-col-3 no-border m-tb card-menu">
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
</view>
<view class="h-list h-grid h-col-3 no-border m-tb card-menu">
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-cardboardfill h-text-yellow"><view class="h-tag h-badge">99+</view></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"><view class="h-tag h-badge"></view></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
  <view class="h-item">
    <view class="heyui-picfill h-text-yellow"></view>
    <text>宫格</text>
  </view>
</view>
```
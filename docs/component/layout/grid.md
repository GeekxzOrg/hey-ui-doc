### 栅格布局 Grid

### 等分列
示例代码
```html
<!-- 一 -->
<view class="p h-text-center h-text-sm h-shadow-lg">
  <view class="h-corner-sm h-bg-white p-tb">
    <view class="h-grid h-col-1 m-lr">
      <view class="h-bg-red-light p">1</view>
      <view class="h-bg-orange-light p">1</view>
    </view>
  </view>
</view>
<!-- 两 -->
<view class="p-lr h-text-center h-text-sm h-shadow-lg">
  <view class="h-corner-sm h-bg-white p-tb">
    <view class="h-grid h-col-2 m-lr">
      <view class="h-bg-red-light p">1</view>
      <view class="h-bg-orange-light p">2</view>
      <view class="h-bg-red-light p">3</view>
      <view class="h-bg-orange-light p">4</view>
    </view>
  </view>
</view>
<!-- 三 -->
<view class="p h-text-center h-text-sm h-shadow-lg">
  <view class="h-corner-sm h-bg-white p-tb">
    <view class="h-grid h-col-3 m-lr">
      <view class="h-bg-red-light p">1</view>
      <view class="h-bg-orange-light p">2</view>
      <view class="h-bg-red-light p">3</view>
      <view class="h-bg-orange-light p">4</view>
      <view class="h-bg-red-light p">5</view>
      <view class="h-bg-orange-light p">6</view>
    </view>
  </view>
</view>
<!-- 四 -->
<view class="p-lr h-text-center h-text-sm h-shadow-lg">
  <view class="h-corner-sm h-bg-white p-tb">
    <view class="h-grid h-col-4 m-lr">
      <view class="h-bg-red-light p">1</view>
      <view class="h-bg-orange-light p">2</view>
      <view class="h-bg-red-light p">3</view>
      <view class="h-bg-orange-light p">4</view>
      <view class="h-bg-red-light p">5</view>
      <view class="h-bg-orange-light p">6</view>
      <view class="h-bg-red-light p">7</view>
      <view class="h-bg-orange-light p">8</view>
    </view>
  </view>
</view>
<!-- 五 -->
<view class="p h-text-center h-text-sm h-shadow-lg">
  <view class="h-corner-sm h-bg-white p-tb">
    <view class="h-grid h-col-5 m-lr">
      <view class="h-bg-red-light p">1</view>
      <view class="h-bg-orange-light p">2</view>
      <view class="h-bg-red-light p">3</view>
      <view class="h-bg-orange-light p">4</view>
      <view class="h-bg-red-light p">5</view>
      <view class="h-bg-orange-light p">6</view>
      <view class="h-bg-red-light p">7</view>
      <view class="h-bg-orange-light p">8</view>
      <view class="h-bg-red-light p">9</view>
      <view class="h-bg-orange-light p">10</view>
    </view>
  </view>
</view>
```

### 等高
```html
<view class=" h-text-center h-text-sm">
  <view class="h-bg-white p-tb">
    <view class="h-grid h-col-4 h-grid-square m-lr">
      <view class="h-bg-img p" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">1</view>
      <view class="h-bg-img p" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">1</view>
      <view class="h-bg-img p" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">1</view>
      <view class="h-bg-img p" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">1</view>
    </view>
  </view>
</view>
```
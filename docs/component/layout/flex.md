### 弹性 Flex

### Flex固定尺寸布局

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
  <view class="h-flex h-flex-wrap">
    <view class="h-basis-xs h-bg-grey p-sm h-corner-xs">xs(20%)</view>
    <view class="h-basis-df"></view>
    <view class="h-basis-sm h-bg-grey m-t p-sm h-corner-xs">sm(40%)</view>
    <view class="h-basis-df"></view>
    <view class="h-basis-df h-bg-grey m-t p-sm h-corner-xs">sub(50%)</view>
    <view class="h-basis-lg h-bg-grey m-t p-sm h-corner-xs">lg(60%)</view>
    <view class="h-basis-xl h-bg-grey m-t p-sm h-corner-xs">xl(80%)</view>
  </view>
</view>
```

### Flex比例布局

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
  <view class="h-flex">
    <view class="h-flex-sub h-bg-grey p-sm m-xs h-corner-xs">1</view>
    <view class="h-flex-sub h-bg-grey p-sm m-xs h-corner-xs">1</view>
  </view>
  <view class="h-flex">
    <view class="h-flex-sub h-bg-grey p-sm m-xs h-corner-xs">1</view>
    <view class="h-flex-twice h-bg-grey p-sm m-xs h-corner-xs">2</view>
  </view>
  <view class="h-flex">
    <view class="h-flex-sub h-bg-grey p-sm m-xs radius">1</view>
    <view class="h-flex-twice h-bg-grey p-sm m-xs radius">2</view>
    <view class="h-flex-treble h-bg-grey p-sm m-xs radius">3</view>
  </view>
</view>
```

### Flex水平对齐

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
    <view class="h-flex h-justify-start h-border-bottom p-b">
      <view class="h-bg-grey p-sm m-xs h-corner-xs">start</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">start</view>
    </view>
    <view class="h-flex h-justify-end h-border-bottom p-tb">
      <view class="h-bg-grey p-sm m-xs h-corner-xs">end</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">end</view>
    </view>
    <view class="h-flex h-justify-center h-border-bottom p-tb">
      <view class="h-bg-grey p-sm m-xs h-corner-xs">center</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">center</view>
    </view>
    <view class="h-flex h-justify-between h-border-bottom p-tb">
      <view class="h-bg-grey p-sm m-xs h-corner-xs">between</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">between</view>
    </view>
    <view class="h-flex h-justify-around h-border-bottom p-tb">
      <view class="h-bg-grey p-sm m-xs h-corner-xs">around</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">around</view>
    </view>
</view>
```

### Flex垂直对齐

示例代码
```html
<view class="p h-text-left h-text-s h-bg-white">
    <view class="h-flex h-align-start p">
      <view class="h-bg-grey p-lg m-xs h-corner-xs">Hey-UI</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">start</view>
    </view>
    <view class="h-flex h-align-center p">
      <view class="h-bg-grey p-lg m-xs h-corner-xs">Hey-UI</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">center</view>
    </view>
    <view class="h-flex h-align-end p">
      <view class="h-bg-grey p-lg m-xs h-corner-xs">Hey-UI</view>
      <view class="h-bg-grey p-sm m-xs h-corner-xs">end</view>
    </view>
</view>
```
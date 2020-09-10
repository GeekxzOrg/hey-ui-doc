### 复选框

### 基本案例

示例代码
```html
<view class="h-bg-white h-text-left p-b">
    <view class="h-text-black h-text-sm p">2、下面哪一种瓜不能吃?</view>
    <view class="h-grid h-col-1 m-lr">
      <view class="p-tb">
        <checkbox></checkbox>
        <text class="p-lr">冬瓜</text>
      </view>
      <view class="p-b">
        <checkbox></checkbox>
        <text class="title p-lr">西瓜</text>
      </view>
      <view class="p-b">
        <checkbox></checkbox>
        <text class="title p-lr">哈密瓜</text>
      </view>
      <view class="p-b">
        <checkbox></checkbox>
        <text class="title p-lr">傻瓜</text>
      </view>      
    </view>
</view>
```

### 定义样式
```html
<view class="h-bg-white h-text-left p-b">
    <view class="h-text-black h-text-sm p">1、自带效应器和4倍镜的狙击枪是?</view>
    <view class="h-grid h-col-1 m-lr">
      <view class="p-tb">
        <checkbox class="round"></checkbox>
        <text class="p-lr">SKS</text>
      </view>
      <view class="p-b">
        <checkbox class="round"></checkbox>
        <text class="title p-lr">98K</text>
      </view>
      <view class="p-b">
        <checkbox class="round"></checkbox>
        <text class="title p-lr">VSS</text>
      </view>
      <view class="p-b">
        <checkbox class="round"></checkbox>
        <text class="title p-lr">SLR</text>
      </view>      
    </view>
</view>
```


### 不同布局排列
```html
<view class="h-bg-white p-b">
    <view class="h-text-black h-text-sm p">3、请选择您的性别?</view>
    <view class="h-form-group h-justify-start">
      <checkbox></checkbox>
      <view class="title p-lr">男生</view>
      <checkbox></checkbox>
      <view class="title p-lr">女生</view>
      <checkbox></checkbox>
      <view class="title p-lr">保密</view>
    </view>
</view
```


### 设置禁用
```html
<view class="h-bg-white h-text-left p-b">
    <view class="h-text-black h-text-sm p">5、程序猿最渴望拥有什么?</view>
    <view class="h-grid h-col-1 m-lr">
      <view class="p-tb">
        <checkbox></checkbox>
        <text class="p-lr">斐尔可</text>
      </view>
      <view class="p-b">
        <checkbox></checkbox>
        <text class="title p-lr">MacBook Pro</text>
      </view>
      <view class="p-b">
        <checkbox class="radio" disabled="disabled"></checkbox>
        <text class="title p-lr h-text-grey">女朋友</text>
      </view>      
    </view>
</view>
```

### 更改位置
```html
<view class="h-bg-white h-text-left p-b">
    <view class="h-text-black h-text-sm p">6、程序猿最渴望拥有什么?</view>
    <view class="h-grid h-col-1 m-lr">
      <view class="h-flex h-justify-between h-align-center p-tb">
        <text class="titler">斐尔可</text>
        <checkbox></checkbox>
      </view>
      <view class="h-flex h-justify-between h-align-center p-b">
        <text class="title">MacBook Pro</text>
        <checkbox></checkbox>
      </view>
      <view class="h-flex h-justify-between h-align-center p-b">
        <text class="title h-text-grey">女朋友</text>
        <checkbox class="radio" disabled="disabled"></checkbox>
      </view>      
    </view>
</view>
```


### 设置radio大小
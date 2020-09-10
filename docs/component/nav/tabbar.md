### 自定义 TabBar

### 常规图标TabBar

示例代码
```html
<view class="h-bar h-bg-white h-border-bottom">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 常规图标TabBar</text>
  </view>
</view>
<view class="h-list menu card-menu m-tb">
  <view class="h-bar tabbar h-bg-black">
    <view class="action h-text-orange">
      <view class="heyui-homefill"></view> 首页
    </view>
    <view class="action text-gray">
      <view class="heyui-similar"></view> 分类
    </view>
    <view class="action text-gray">
      <view class="heyui-recharge"></view>
      积分
    </view>
    <view class="action text-gray">
      <view class="heyui-cart">
        <view class="h-tag h-badge">99</view>
      </view>
      购物车
    </view>
    <view class="action text-gray">
      <view class="heyui-my">
        <view class="h-tag h-badge"></view>
      </view>
      我的
    </view>
  </view>
</view>
```

### 自己设计图片TabBar

示例代码
```html
<view class="h-bar h-bg-white h-border-b">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 自己设计图片TabBar</text>
  </view>
</view>
<view class="h-bar tabbar h-bg-white m-t">
  <view class="action">
    <view class="heyui-h-image">
      <image src="/images/tabbar/basics_cur.png"></image>
    </view>
    <view class="h-text-green">元素</view>
  </view>
  <view class="action">
    <view class="heyui-h-image">
      <image src="/images/tabbar/component.png"></image>
    </view>
    <view class="h-text-gray">组件</view>
  </view>
  <view class="action">
    <view class="heyui-h-image">
      <image src="/images/tabbar/plugin.png"></image>
      <view class="h-tag h-badge">99</view>
    </view>
    <view class="h-text-gray">扩展</view>
  </view>
  <view class="action">
    <view class="heyui-h-image">
      <image src="/images/tabbar/about.png"></image>
      <view class="h-tag h-badge"></view>
    </view>
    <view class="h-text-gray">关于</view>
  </view>
</view>
```

#### 评论
示例代码
```html
<view class="h-bar h-bg-white h-border-bottom m-t">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 添加评论</text>
  </view>
</view>
<view class="h-list menu card-menu m-tb">
  <view class="h-bar input">
    <view class="action">
      <text class="heyui-sound h-text-grey"></text>
    </view>
    <input class="h-border-bottom" focus="{{false}}" maxlength="300" cursor-spacing="10"></input>
    <view class="action">
      <text class="heyui-emojifill h-text-grey"></text>
    </view>
    <button class="h-btn h-bg-green h-shadow-blur">发送</button>
  </view>
</view>
<view class="h-bar input">
  <view class="h-avatar h-corner-lg" style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"></view>
  <view class="action">
    <text class="heyui-roundaddfill h-text-grey"></text>
  </view>
  <input class="h-border-bottom" maxlength="300" cursor-spacing="10"></input>
  <view class="action">
    <text class="heyui-emojifill h-text-grey"></text>
  </view>
  <button class="h-btn h-bg-green g-shadow-blur">发送</button>
</view>
```


### 自定义购物类型

示例代码
```html
<view class="h-list menu card-menu m-tb">
  <view class="h-bar h-bg-white tabbar h-border shop">
    <button class="action" open-type="contact">
      <view class="heyui-service h-text-green">
        <view class="h-tag h-badge"></view>
      </view>
      客服
    </button>
    <view class="action h-text-orange">
      <view class="heyui-favorfill"></view> 已收藏
    </view>
    <view class="action">
      <view class="heyui-cart">
        <view class="h-tag h-badge">99</view>
      </view>
      购物车
    </view>
    <view class="h-bg-red submit">立即订购</view>
  </view>
</view>
<view class="h-bar h-bg-white tabbar h-border shop">
  <button class="action h-btn" open-type="contact">
    <view class="heyui-service h-text-green"></view>客服
  </button>
  <view class="action">
    <view class="heyui-cart">
      <view class="h-tag h-badge">99</view>
    </view>
    购物车
  </view>
  <view class="h-bg-orange submit">加入购物车</view>
  <view class="h-bg-red submit">立即订购</view>
</view>
<view class="h-list menu card-menu m-tb">
  <view class="h-bar h-bg-white tabbar h-border shop">
    <button class="action" open-type="contact">
      <view class="heyui-service h-text-green"></view>
      客服
    </button>
    <view class="action">
      <view class=" heyui-shop"></view> 店铺
    </view>
    <view class="action">
      <view class="heyui-cart">
        <view class="h-tag h-badge">99</view>
      </view>
      购物车
    </view>
    <view class="btn-group">
      <button class="h-btn h-bg-red h-shadow-blur">立即订购</button>
    </view>
  </view>
</view>
<view class="h-bar h-bg-white tabbar h-border shop">
  <button class="action" open-type="contact">
    <view class="heyui-service h-text-green"></view> 客服
  </button>
  <view class="action">
    <view class="heyui-cart">
      <view class="h-tag h-badge">99</view>
    </view>
    购物车
  </view>
  <view class="btn-group">
    <button class="h-btn h-bg-orange h-corner-lg h-shadow-blur">加入购物车</button>
    <button class="h-btn h-bg-red h-corner-lg h-shadow-blur">立即订购</button>
  </view>
</view>

<view class="h-bar h-bg-white h-border-b m-b-lg m-t">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 中间凸起TabBar</text>
  </view>
</view>
<view class="h-bar tabbar m-b-xl h-bg-white m-t-lg">
  <view class="action h-text-green">
    <view class="heyui-homefill"></view> 首页
  </view>
  <view class="action h-text-gray">
    <view class="heyui-similar"></view> 分类
  </view>
  <view class="action h-text-gray add-action">
    <button class="h-btn heyui-add h-bg-green h-shadow"></button>
    发布
  </view>
  <view class="action h-text-gray">
    <view class="heyui-cart">
      <view class="h-tag h-badge">99</view>
    </view>
    购物车
  </view>
  <view class="action h-text-gray">
    <view class="heyui-my">
      <view class="h-tag h-badge"></view>
    </view>
    我的
  </view>
</view>
```
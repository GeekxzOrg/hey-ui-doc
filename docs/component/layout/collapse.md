### 折叠面板 Collapse

> 折叠面板，常见应用场景为折叠菜单、优惠券详情展示


### 普通模式


### 示例代码
```html
<view class="h-list menu card-menu m-t">
    <view class="h-item {{showIndex == 1 ? 'h-down':'h-arrow'}}" data-index='1' catchtap='panel'>
      <view class="content">
        <text class="cuIcon-circlefill text-grey"></text>
        <text class="text-grey">图标 + 标题</text>
      </view>
    </view>
    <view class='detail' wx:if="{{showIndex == 1}}">首页右下角有 “使用指南” 按钮，如果您在画画工具上有疑问，请阅读使用指南。</view>
</view>
<view class="h-list menu card-menu">
    <view class="h-item {{showIndex == 2 ? 'h-down':'h-arrow'}}" data-index='2' catchtap='panel'>
      <view class="content">
        <text class="cuIcon-circlefill text-grey"></text>
        <text class="text-grey">图标 + 标题</text>
      </view>
    </view>
    <view class='detail h-bg-gray' wx:if="{{showIndex == 2}}">首页右下角有 “使用指南” 按钮，如果您在画画工具上有疑问，请阅读使用指南。</view>
</view>
```
js部分:
```javascript
data: {
    showIndex: 2,
    showIndex2: 2,
  },
  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  },
  panel2: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex2) {
      this.setData({
        showIndex2: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex2: 0
      })
    }
  },
```
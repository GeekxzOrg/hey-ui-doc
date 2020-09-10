### 图片选择器 Image-pricker

### 基本用法 不限制


### 限制上传个数
```html
<view class="h-bar h-bg-white h-border-bottom">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 限制图片</text>
  </view>
</view>
<view class="h-bar h-bg-white p">
  <view class="action">
    图片上传
  </view>
  <view class="action">
    {{imgList2.length}}/4
  </view>
</view>
<view class="h-form-group p-b">
  <view class="h-grid h-col-4 h-grid-square h-flex-sub">
    <view class="h-bg-img" wx:for="{{imgList2}}" wx:key="index" bindtap="ViewImage2" data-url="{{imgList2[index]}}">
      <image src='{{imgList2[index]}}' mode='aspectFill'></image>
      <view class="h-tag h-bg-red" catchtap="DelImg2" data-index="{{index}}">
        <text class="heyui-close"></text>
      </view>
    </view>
    <view class="h-border" bindtap="ChooseImage2" wx:if="{{imgList2.length<4}}">
      <text class="heyui-cameraadd"></text>
    </view>
  </view>
</view>
```

js部分:
```JavaScript
  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '亲爱的',
      content: '确定要删除这段回忆吗？',
      cancelText: '难忘',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
```

### 删除带弹框提示 


示例代码:
```html
<view class="h-bar h-bg-white h-border-bottom m-t">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 限制图片删除确认</text>
  </view>
</view>
<view class="h-bar h-bg-white p">
  <view class="action">
    图片上传
  </view>
  <view class="action">
    {{imgList.length}}/4
  </view>
</view>
<view class="h-form-group p-b">
  <view class="h-grid h-col-4 h-grid-square h-flex-sub">
    <view class="h-bg-img" wx:for="{{imgList}}" wx:key="index" bindtap="ViewImage" data-url="{{imgList[index]}}">
      <image src='{{imgList[index]}}' mode='aspectFill'></image>
      <view class="h-tag h-bg-red" catchtap="DelImg" data-index="{{index}}">
        <text class="heyui-close"></text>
      </view>
    </view>
    <view class="h-border" bindtap="ChooseImage" wx:if="{{imgList.length<4}}">
      <text class="heyui-cameraadd"></text>
    </view>
  </view>
</view>
```

js部分:
```JavaScript
  data: {
    imgList2: [],
  },
  ChooseImage2() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList2.length != 0) {
          this.setData({
            imgList2: this.data.imgList2.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList2: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage2(e) {
    wx.previewImage({
      urls: this.data.imgList2,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg2(e) {
    this.data.imgList2.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      imgList2: this.data.imgList2
    })
  },
  ```
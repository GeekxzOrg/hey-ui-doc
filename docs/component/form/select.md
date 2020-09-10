### 选择 Select

### 一般常用
示例代码
```html
<view class="h-bar h-bg-white h-border-bottom">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 一般常用</text>
  </view>
</view>
<view class="p h-text-center h-text-sm h-shadow-lg">
  <view class="h-form-group h-corner-sm h-bg-white p-tb">
    <view class="title">普通选择</view>
		<picker bindchange="PickerChange" value="{{index}}" range="{{picker}}">
			<view class="picker">
				{{index?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
			</view>
		</picker>
  </view>
</view>
```

### 多列自定义
示例代码
```html
<view class="h-bar h-bg-white h-border-bottom">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 多列选择</text>
  </view>
</view>
<view class="p h-text-center h-text-sm h-shadow-lg">
  <view class="h-form-group h-corner-sm h-bg-white p-tb">
    <view class="title">多列选择</view>
		<picker mode="multiSelector" bindchange="MultiChange" bindcolumnchange="MultiColumnChange" value="{{multiIndex}}"
		 range="{{multiArray}}">
			<view class="picker">
				{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
			</view>
		</picker>
  </view>
</view>
```

### 不同的键盘
示例代码
```html
<view class="h-bar h-bg-white h-border-bottom">
  <view class="action h-text-sm">
    <text class="heyui-title h-text-blue"> 选择时间</text>
  </view>
</view>
<view class="p h-text-center h-text-sm h-shadow-lg">
  <view class="h-form-group h-corner-sm h-bg-white p-tb">
    <view class="title">选择时间</view>
		<picker mode="time" value="{{time}}" start="09:01" end="21:01" bindchange="TimeChange">
			<view class="picker">
				{{time}}
			</view>
		</picker>
  </view>
</view>
```


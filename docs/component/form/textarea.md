### 文本域 Textarea

### 基本案例

示例代码
```html
<view class="h-form-group p-b">
	<textarea class="h-border h-corner-md p-sm" maxlength="-1" placeholder="多行文本输入框"></textarea>
</view>
```

### 带Label

示例代码

```html
<view class="h-form-group h-align-start p-b">
    <view class="h-text-gray label p-t-sm">文本框</view>
		<textarea class="h-border h-corner-md p-sm" maxlength='140' placeholder="最大限制输入140个字体"></textarea>
</view>
```


### 最大限制140

示例代码
```html
<view class="h-form-group p-b">
		<textarea class="h-border h-corner-md p-sm" maxlength='140' placeholder="最大限制输入140个字体"></textarea>
</view>
```

### 禁用&不带border
```html
<!-- 禁用 -->
<view class="h-form-group p-b">
		<textarea class="h-border h-corner-md p-sm" maxlength="-1" disabled placeholder="说说您的想法"></textarea>
</view>
<!-- 不带border -->
<view class="h-form-group p-b">
		<textarea class="h-corner-md p-sm" maxlength='140' placeholder="最大限制输入140个字体"></textarea>
</view>
```
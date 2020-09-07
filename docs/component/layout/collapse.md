### 折叠面板 Collapse

> 折叠面板，常见应用场景为折叠菜单、优惠券详情展示

折叠面板需要``collapse``和``collapse-item``组件关联使用

### 普通模式


### 示例代码
```wxml
<l-collapse>
  <l-collapse-item title="Lin UI">
    Lin UI 是基于微信小程序原生语法实现的组件库。遵循简洁，易用的设计规范。
  </l-collapse-item>
  <l-collapse-item title="Lin-CMS">
    Lin-CMS 是林间有风团队经过大量项目实践所提炼出的一套内容管理系统框架。
    Lin-CMS 可以有效的帮助开发者提高 CMS 的开发效率。
  </l-collapse-item>
  <l-collapse-item title="林间有风">
    林间有风是一个团队
  </l-collapse-item>
</l-collapse>
```
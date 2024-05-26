TypeScript React Error Boundary Infinite Fallback Demo
=================================

如果Fallback的指向包含了ErrorBoundary的自己，则会无限循环。但此时浏览器console中并不会报错，页面上也没有渲染任何东西，处于假死状态。

但如果Fallback仅指向ErrorBoundary的children组件，而不是自己，则就算fallback组件报错，也不会无限循环，只会渲染一次后导致白屏。

```
npm install
npm run demo
```

It will open page on browser automatically.

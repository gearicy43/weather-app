# SolidJS 天气应用 Demo

一个使用 SolidJS 构建的简洁天气查询应用，展示了 SolidJS 的核心特性和响应式编程能力。

## 🌟 特性

- **响应式设计**: 使用 SolidJS 的 `createSignal` 实现状态管理
- **现代 UI**: 渐变背景和卡片式设计
- **实时天气**: 调用 OpenWeatherMap API 获取天气数据
- **错误处理**: 友好的错误提示和加载状态
- **移动端适配**: 响应式布局，支持各种设备

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 获取 API Key

1. 访问 [OpenWeatherMap](https://openweathermap.org/api)
2. 注册账号并获取免费 API Key
3. 在 `src/App.jsx` 中将 `your-api-key-here` 替换为您的实际 API Key

### 3. 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:3000` 启动。

### 4. 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
weather-app/
├── src/
│   ├── App.jsx          # 主应用组件
│   ├── App.css          # 样式文件
│   └── main.jsx         # 入口文件
├── public/              # 静态资源
├── index.html           # HTML 模板
├── vite.config.js       # Vite 配置
├── package.json         # 项目配置
└── README.md           # 项目文档
```

## 🛠️ 技术栈

- **SolidJS**: 用于构建用户界面
- **Vite**: 现代前端构建工具
- **CSS3**: 样式和动画
- **OpenWeatherMap API**: 天气数据源

## 📚 SolidJS 核心概念演示

这个项目展示了 SolidJS 的以下核心特性：

### 1. 信号 (Signals)
```jsx
const [city, setCity] = createSignal('')
const [weather, setWeather] = createSignal(null)
```

### 2. 响应式更新
UI 会自动响应信号值的变化，无需手动重新渲染。

### 3. 条件渲染
```jsx
{weather() && (
  <div class="weather-card">
    {/* 天气内容 */}
  </div>
)}
```

## 🔧 自定义

您可以轻松扩展这个应用：

- 添加更多天气数据（如预报、空气质量等）
- 实现地理定位功能
- 添加主题切换
- 集成更多天气服务提供商

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🌐 在线演示

如果您已经部署了这个应用，可以在这里添加演示链接。

---

**注意**: 这是一个演示项目，主要用于展示 SolidJS 的功能。在生产环境中使用时，请注意 API Key 的安全性。
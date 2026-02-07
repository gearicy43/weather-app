# Node.js 版本管理

本项目使用 Node.js 18.x LTS 版本，推荐使用 nvm 进行版本管理。

## 安装 nvm

### Linux/macOS
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

### 重新加载 shell 配置
```bash
source ~/.bashrc
```

## 使用 nvm 管理 Node.js 版本

### 安装项目所需的 Node.js 版本
```bash
nvm install 18
nvm use 18
```

### 设置默认版本
```bash
nvm alias default 18
```

### 验证安装
```bash
node --version
npm --version
```

## 项目配置

项目包含以下版本控制文件：

- `.nvmrc` - 指定项目使用的 Node.js 版本
- `package.json` - 在 `engines` 字段中指定版本要求
- `.node-version` - 某些工具使用的版本文件

## 自动切换版本

当进入项目目录时，如果安装了 `nvm` 的自动切换插件，会自动使用项目指定的 Node.js 版本：

```bash
cd weather-app  # 自动切换到 Node.js 18
```

## 常用 nvm 命令

```bash
# 列出已安装的版本
nvm ls

# 列出可用的远程版本
nvm ls-remote

# 安装最新 LTS 版本
nvm install --lts

# 切换版本
nvm use 18

# 卸载版本
nvm uninstall 18
```
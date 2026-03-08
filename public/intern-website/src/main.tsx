import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 1. 将渲染逻辑封装成一个函数
const renderApp = () => {
  const rootElement = document.getElementById('root');

  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  } else {
    console.error('React 启动失败：找不到 id 为 root 的挂载点');
  }
};

// 2. 安全检查：如果 root 元素已经存在，直接渲染；否则，等待网页 DOM 加载完毕后再渲染
if (document.getElementById('root')) {
  renderApp();
} else {
  document.addEventListener('DOMContentLoaded', renderApp);
}

import React, { useState } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow/ChatWindow';
import TopMenu from './components/TopMenu/TopMenu';
import 'antd/dist/reset.css';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

function App() {
  const [theme, setTheme] = useState('dark');
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = (isDark) => {
    setTheme(isDark ? 'dark' : 'light');
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="app">
      <TopMenu theme={theme} toggleTheme={toggleTheme} collapsed={collapsed} toggleCollapse={toggleCollapse} />
      <SidebarMenu collapsed={collapsed} theme={theme} />
      <div className="content">
        <ChatWindow menuCollapsed={collapsed} /> {/* Pasa collapsed como prop */}
      </div>
    </div>
  );
}

export default App;

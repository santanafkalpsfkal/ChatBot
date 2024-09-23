import React from 'react';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import robotIcon from '../../assets/robotIcon.png'; // Asegúrate de tener este archivo en la ruta indicada
import './SidebarMenu.css'; // Asegúrate de tener este archivo CSS está correctamente configurado

const SidebarMenu = ({ collapsed, theme }) => {
  const [current, setCurrent] = React.useState('1'); // Establecer '1' como la opción seleccionada por defecto

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      key: 'sub1',
      label: 'Home',
      icon: <HomeOutlined />,
      children: [
        {
          key: '1',
          label: 'Chat Bot',
        },
      ],
    },
   
  ];

  React.useEffect(() => {
    // Cuando el componente se monta, asegúrate de que 'Asistente Virtual' esté seleccionado
    setCurrent('1');
  }, []);

  return (
    <div
      className={`sidebar-menu ${collapsed ? 'collapsed' : ''} ${theme === 'dark' ? 'sidebar-menu-dark' : 'sidebar-menu-light'}`}
    >
      <div className="sidebar-header">
        <img
          src={robotIcon}
          alt="Robot Icon"
          style={{
            width: collapsed ? 50 : 100,
            marginRight: collapsed ? 0 : 10,
          }}
        />
        {!collapsed && (
          <h2>Asistente Virtual</h2>
        )}
      </div>
      <Menu
        theme={theme}
        onClick={onClick}
        defaultSelectedKeys={['1']} // Selecciona 'Asistente Virtual' por defecto
        defaultOpenKeys={['sub1']} // Abre el submenú 'Home' por defecto
        selectedKeys={[current]} // Asegúrate de que la opción seleccionada sea la actual
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default SidebarMenu;

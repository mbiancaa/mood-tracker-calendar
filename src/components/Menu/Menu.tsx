import React from 'react';
import MenuButton from './MenuButton';

const Menu: React.FC = () => {
    return (
        <div className={`MenuBar`}>
            <MenuButton url="/" label="Home" />
            <MenuButton url="/history" label="History" />
            <MenuButton url="/intro" label="Info" />
        </div>
    );
}

export default Menu;
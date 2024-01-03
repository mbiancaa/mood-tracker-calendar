import React from 'react';
import { Link } from 'react-router-dom';

interface MenuButtonProps {
    url: string;
    label: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ url, label }) => {
    return (
        <Link to={url} className={`MenuButton`}>
            {label}
        </Link>
    );
}

export default MenuButton;
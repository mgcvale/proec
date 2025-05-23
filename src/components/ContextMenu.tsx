import { ContextMenuProps } from '@/types';
import React, { useEffect } from 'react';

const ContextMenu = ({ items, position, onClose, inverted=false }: ContextMenuProps) => {
  useEffect(() => {
    const handleClick = () => onClose();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [onClose]);

  return (
    <ul
        className="fixed bg-surface text-on-surface border-1 border-surface-border rounded-xl min-w-fit shadow-md z-50 p-2"
        style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            transform: inverted ? 'translateX(-100%)' : 'none'
        }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            item.onClick();
            onClose();
          }}
          className="px-2 py-2 hover:bg-surface-hover rounded-md cursor-pointer text-on-surface text-sm inline-block w-full text-nowrap text-start"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default ContextMenu;

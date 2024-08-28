import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  ICON: 'icon',
};

const icons = [
  { id: 1, type: 'circle', label: 'Circle Icon' },
  { id: 2, type: 'rectangle', label: 'Rectangle Icon' },
  // Add more icons as per your requirement
];

const SidebarIcon = ({ icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ICON,
    item: { type: icon.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        border: '1px solid gray',
        marginBottom: '5px',
        cursor: 'move',
      }}
    >
      {icon.label}
    </div>
  );
};

const DropArea = () => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ICON,
    drop: (item) => alert(`Dropped: ${item.type}`),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: '100%',
        height: '500px',
        border: '2px dashed gray',
        marginTop: '20px',
      }}
    >
      Drop Icons Here
    </div>
  );
};

const Dragdrop = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', padding: '20px', borderRight: '1px solid black' }}>
          <h3>Sidebar</h3>
          {icons.map((icon) => (
            <SidebarIcon key={icon.id} icon={icon} />
          ))}
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <h3>Design Area</h3>
          <DropArea />
        </div>
      </div>
    </DndProvider>
  );
};

export default Dragdrop;

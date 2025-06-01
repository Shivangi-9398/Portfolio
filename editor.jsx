import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Section from './Section';

const Editor = ({ sections, setSections }) => {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(sections);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setSections(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="sections">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {sections.map((section, index) => (
              <Draggable key={section.id} draggableId={section.id} index={index}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Section section={section} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Editor;

<DragDropContext onDragEnd={handleOnDragEnd}>
  <Droppable droppableId="sections">
    {(provided) => (
      <div {...provided.droppableProps} ref={provided.innerRef}>
        {sections.map((section, index) => (
          <Draggable key={section.id} draggableId={section.id} index={index}>
            {/* Render Section */}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>

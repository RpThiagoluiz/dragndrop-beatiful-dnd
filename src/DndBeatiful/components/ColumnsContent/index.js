import { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { BsFillGearFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { ConfigBlocks } from "./ConfigBlocks";

export const ColumnsContent = ({
  columnId,
  column,
  dragDisabledForEditColumn = null,
  handleRemoveColumns,
  handleEditColumns,
}) => {
  //TODO: aqui tem q vim do backend e a informacao vai ser repassada.

  const isEditColumn =
    dragDisabledForEditColumn.disabled &&
    dragDisabledForEditColumn.id === columnId;

  const [configureBlock, setConfigureBlock] = useState({
    justOneItem: false,
    moreItens: false,
    oneItemRefuseContinue: false,
    moreItemsRefuseContinue: false,
    aproved: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(configureBlock);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      key={columnId}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginRight: 18 }}>{column.name}</h2>

        {column.type === "block" && (
          // TODO: _!important_
          // Nao esquecer de quando deletar um bloco, refazer a request dos servicos e dos flows.
          <div>
            <BsFillGearFill
              style={{ marginRight: 5 }}
              onClick={() => handleEditColumns(columnId)}
            />

            <FaTrashAlt onClick={() => handleRemoveColumns(columnId)} />
          </div>
        )}
      </div>
      <div style={{ margin: 8 }}>
        <Droppable droppableId={columnId} key={columnId}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: isEditColumn
                    ? "pink"
                    : snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 5,
                  width: 250,
                  height: isEditColumn ? 500 : 200,
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                {isEditColumn ? (
                  <ConfigBlocks
                    handleSubmit={handleSubmit}
                    configureBlock={configureBlock}
                    setConfigureBlock={setConfigureBlock}
                  />
                ) : (
                  column.items.map((item, index) => {
                    return (
                      <Draggable
                        key={item.validatorCode}
                        draggableId={item.validatorCode}
                        //isDragDisabled={item.itemIdenfitier === "resolveRisk"}
                        // pegar essa props e passar ela para o
                        isDragDisabled={dragDisabledForEditColumn.disabled}
                        ignoreContainerClipping
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: "none",
                                padding: 16,
                                margin: "0 0 8px 0",
                                minHeight: "50px",
                                backgroundColor: snapshot.isDragging
                                  ? "#263B4A"
                                  : "#456C86",
                                color: "white",
                                ...provided.draggableProps.style,
                              }}
                            >
                              {item.title}
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })
                )}

                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
};

import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { BsFillGearFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { ConfigBlocks } from "../ConfigBlocks";
import styles from "../../../style.module.scss";

export const BlockColumn = ({
  columnId,
  column,
  dragDisabledForEditColumn = null,
  handleRemoveColumns,
  handleEditColumns,
  isEditColumn,
  handleSubmit,
  configureBlock,
  setConfigureBlock,
}) => {
  return (
    <div className={styles.contentDragBlocks} key={columnId}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginRight: 18 }}>{column.name}</h2>
        <div>
          <BsFillGearFill
            style={{ marginRight: 5 }}
            onClick={() => handleEditColumns(columnId)}
          />

          <FaTrashAlt onClick={() => handleRemoveColumns(columnId)} />
        </div>
      </div>
      <div style={{ margin: 8 }}>
        <Droppable droppableId={columnId} key={columnId}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.cardContentBlocks}
                style={{
                  background: isEditColumn
                    ? "pink"
                    : snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",

                  height: isEditColumn ? 500 : 200,
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
                              className={styles.cardDrag}
                              style={{
                                backgroundColor: snapshot.isDragging
                                  ? "#f2f4f8"
                                  : "#fff",
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

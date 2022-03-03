import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { BsFillGearFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { ConfigBlocks } from "../ConfigBlocks";
import styles from "../../../style.module.scss";

export const ServiceColumn = ({
  columnId,
  column,
  dragDisabledForEditColumn = null,
  handleRemoveColumns,
  handleEditColumns,
  handleSubmit,
  configureBlock,
  setConfigureBlock,
}) => {
  return (
    <div className={styles.contentDragServices} key={columnId}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginRight: 18 }}>{column.name}</h2>
      </div>
      <div style={{ margin: 8 }}>
        <Droppable droppableId={columnId} key={columnId}>
          {(provided, snapshot) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.cardContentServices}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                }}
              >
                {column.items.map((item, index) => {
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
                })}

                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
};

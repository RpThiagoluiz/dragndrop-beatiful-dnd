import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
export const Services = (data) => {
  const DraggableItens = ({ data }) => {
    return data.data.validators.map((validator, index) => {
      return (
        <Draggable
          key={validator.validatorCode}
          draggableId={validator.validatorCode}
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
                  backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                  color: "white",
                  ...provided.draggableProps.style,
                }}
              >
                {validator.title}
              </div>
            );
          }}
        </Draggable>
      );
    });
  };

  return (
    <div key={data.data.id}>
      <h2>{data.data.serviceCode}</h2>
      <DraggableItens data={data} />
    </div>
  );
};

// return (
//   <Draggable
//     key={item.id}
//     draggableId={item.id}
//     index={index}
//   >
//     {(provided, snapshot) => {
//       return (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           style={{
//             userSelect: "none",
//             padding: 16,
//             margin: "0 0 8px 0",
//             minHeight: "50px",
//             backgroundColor: snapshot.isDragging
//               ? "#263B4A"
//               : "#456C86",
//             color: "white",
//             ...provided.draggableProps.style,
//           }}
//         >
//           {item.content}
//         </div>
//       );
//     }}
//   </Draggable>
//);

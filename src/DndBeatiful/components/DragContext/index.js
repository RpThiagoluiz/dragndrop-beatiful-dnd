import { DragDropContext } from "react-beautiful-dnd";
import { onDragEnd } from "../../utils";
import { ColumnsContent } from "../ColumnsContent";

export const DragContext = ({ columns, setColumns, isDragDisabled, data }) => (
  <DragDropContext
    onDragEnd={(result) => onDragEnd(result, columns, setColumns, data)}
  >
    {Object.entries(columns).map(([columnId, column], index) => (
      <ColumnsContent
        columnId={columnId}
        column={column}
        key={index}
        isDragDisabled={isDragDisabled}
      />
    ))}
  </DragDropContext>
);

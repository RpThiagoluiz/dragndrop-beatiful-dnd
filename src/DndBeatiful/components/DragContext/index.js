import { DragDropContext } from "react-beautiful-dnd";
import { onDragEnd } from "../../utils";
import { ColumnsContent } from "../ColumnsContent";

export const DragContext = ({
  columns,
  setColumns,
  dragDisabledForEditColumn,
  data,
  handleRemoveColumns,
  handleEditColumns,
}) => (
  <DragDropContext
    onDragEnd={(result) => onDragEnd(result, columns, setColumns, data)}
  >
    {Object.entries(columns).map(([columnId, column], index) => (
      <ColumnsContent
        columnId={columnId}
        column={column}
        key={index}
        dragDisabledForEditColumn={dragDisabledForEditColumn}
        handleRemoveColumns={() => handleRemoveColumns(columnId)}
        handleEditColumns={() => handleEditColumns(columnId)}
      />
    ))}
  </DragDropContext>
);

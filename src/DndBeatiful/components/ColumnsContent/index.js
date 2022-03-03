import { useState } from "react";
import { BlockColumn } from "./BlockColumn";
import { ServiceColumn } from "./ServiceColumn";

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

  const serviceColumns = column.type === "service";
  const blockColumns = column.type === "block";

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

  if (blockColumns)
    return (
      <div>
        <BlockColumn
          columnId={columnId}
          column={column}
          dragDisabledForEditColumn={dragDisabledForEditColumn}
          handleRemoveColumns={handleRemoveColumns}
          handleEditColumns={handleEditColumns}
          isEditColumn={isEditColumn}
          handleSubmit={handleSubmit}
          configureBlock={configureBlock}
          setConfigureBlock={setConfigureBlock}
        />
      </div>
    );

  return (
    <ServiceColumn
      columnId={columnId}
      column={column}
      dragDisabledForEditColumn={dragDisabledForEditColumn}
      handleRemoveColumns={handleRemoveColumns}
      handleEditColumns={handleEditColumns}
      isEditColumn={isEditColumn}
      handleSubmit={handleSubmit}
      configureBlock={configureBlock}
      setConfigureBlock={setConfigureBlock}
    />
  );
};

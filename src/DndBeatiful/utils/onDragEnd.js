import { servicesNames } from "./servicesNames";

export const onDragEnd = (result, columns, setColumns, data) => {
  if (!result.destination) {
    return;
  }

  const { source, destination } = result;
  const sourceColumn = columns[source.droppableId];
  const destinyColumn = columns[destination.droppableId];
  const services = servicesNames(data);

  if (destinyColumn?.type !== "block") return;

  if (sourceColumn?.type === "block" && destinyColumn?.type !== "block") {
    console.log(`aq`, services);

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    // voltar o servico ou remover ele.

    // const [removed] = sourceItems.splice(source.index, 1);
    // destItems.splice(destination.index, 0, removed);
    // setColumns({
    //   ...columns,
    //   [source.droppableId]: {
    //     ...sourceColumn,
    //     items: sourceItems,
    //   },
    //   [destination.droppableId]: {
    //     ...destColumn,
    //     items: destItems,
    //   },
    // });

    return;
  }

  //   console.log(sourceColumn, "👉", destinyColumn);
  //   //console.log(`result`, result);
  // }
  // 1 - undefined -> destinyColumn notSend manda pra la
  // 2 -

  // console.log(`sourceColumn`, notSend.includes(sourceColumn));

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

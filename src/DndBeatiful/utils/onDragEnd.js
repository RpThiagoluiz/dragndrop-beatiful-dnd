import { servicesNames } from "./servicesNames";

export const onDragEnd = (result, columns, setColumns, data) => {
  if (!result.destination) return;

  const { source, destination } = result;
  const verifyDestinationItens = columns[destination.droppableId]?.items;
  const verifyDestinyServiceName = columns[destination.droppableId]?.name;
  const verifySourceServiceName = columns[source.droppableId]?.name;

  // const servicesName = ["data-valid", "resolve-risk", "inova-mind"]; // Remover

  // console.log(`verifyDestinationItens`, verifyDestinationItens);

  const sourceColumn = columns[source.droppableId]?.type;
  const destinyColumn = columns[destination.droppableId]?.type;
  const services = servicesNames(data);
  // sourceColumn === undefined &&
  if (destinyColumn !== "block") {
    // preciso do dado do item q esta se movendo.
    const verifyDestinationItens = columns[destination.droppableId];

    console.log(`verifyDestinationItens`, verifyDestinationItens);

    return;
  }

  //   console.log(sourceColumn, "👉", destinyColumn);
  //   //console.log(`result`, result);
  // }
  // 1 - undefined -> destinyColumn notSend manda pra la
  // 2 -

  // console.log(`sourceColumn`, notSend.includes(sourceColumn));

  // if (dontSend) return;

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

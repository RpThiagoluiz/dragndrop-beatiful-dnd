export const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  const verifyDestinationItens = columns[destination.droppableId]?.items;
  const verifyDestinyServiceName = columns[destination.droppableId]?.name;
  const verifySourceServiceName = columns[source.droppableId]?.name;
  const notSend = ["datavalid", "resolveRisk", "inovaMind"]; // Remover

  // console.log(`verifyDestinationItens`, verifyDestinationItens);

  // const dontSend = verifyDestinationItens.map((item) => {
  //   let identifier = item.itemIdenfitier;
  //   console.log(
  //     `IDENTIFIER, ${identifier}`,
  //     notSend.includes(identifier),
  //     "👉",
  //     verifyDestinyServiceName
  //   );
  //   // let revert = false;
  //   // if (notSend.includes(item.itemIdenfitier)) {
  //   //   revert = true;
  //   //   console.log(`revert`, revert);
  //   // }
  //   // return revert;
  // });

  // if (dontSend) return;
  console.log(verifySourceServiceName, "👉", verifyDestinyServiceName);

  if (notSend.includes(verifyDestinyServiceName)) {
    console.log(`notSend`, verifyDestinyServiceName);
    // de um drag and drop de um item que esta concluido nao conseguir voltar
  }

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

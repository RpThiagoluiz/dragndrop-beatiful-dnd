export const formatedBlocksToSave = (columns, setColumnsToSave) => {
  setColumnsToSave(null);
  let formatedValue = {
    blocks: [],
    reuse: {
      flowCode: "PF",
      stepCode: "PF",
    },
  };
  Object.entries(columns).map(([key, value]) => {
    if (value.type === "block") {
      const formatedValidators = {
        validators: value.items,
      };
      const { blocks } = formatedValue;
      blocks.push(formatedValidators);
    }
  });
  setColumnsToSave(() => ({ ...formatedValue }));
};

export const addNewBlockName = (arrayOfFlows) => {
  let formatedName;

  arrayOfFlows.map((item, index) => {
    const blocks = item.blocks;

    blocks.map((block, indexBlock) => {
      formatedName =
        indexBlock === 0 ? "Block " + 1 : "Block " + (Number(indexBlock) + 1);
    });
  });

  return formatedName;
};

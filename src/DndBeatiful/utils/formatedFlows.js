import { v4 as uuidv4 } from "uuid";

export const formatedFlows = (arrayOfFlows) => {
  let formatedData = {};
  let formatedBlocks;

  arrayOfFlows.map((item) => {
    const blocks = item.blocks;

    blocks.map((block, indexBlock) => {
      const formatedBlock = {
        [uuidv4()]: {
          name:
            indexBlock === 0
              ? "Block " + 1
              : "Block " + (Number(indexBlock) + 1),
          items: block.validators,
          type: "block",
          ...block,
        },
      };

      formatedBlocks = { ...formatedBlocks, ...formatedBlock };
    });

    formatedData = { ...formatedBlocks };
  });
  return formatedData;
};

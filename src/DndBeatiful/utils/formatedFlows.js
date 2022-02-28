import { v4 as uuidv4 } from "uuid";

export const formatedFlows = (arrayOfFlows) => {
  let formatedData = {};
  let formatedBlocks;

  arrayOfFlows.map((item, index) => {
    const blocks = item.blocks;
    const stepCode = item.stepCode;

    blocks.map((block, indexBlock) => {
      const formatedBlock = {
        [uuidv4()]: {
          name:
            indexBlock === 0
              ? "Block " + 1
              : "Block " + (Number(indexBlock) + 1),
          stepCode,
          items: block.validators,
          type: "block",
          createAccountIfApproved: block.createAccountIfApproved,
        },
      };

      formatedBlocks = { ...formatedBlocks, ...formatedBlock };
    });

    formatedData = { ...formatedBlocks };
  });
  return formatedData;
};

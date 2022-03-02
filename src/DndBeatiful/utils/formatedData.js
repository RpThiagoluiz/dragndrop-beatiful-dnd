import { v4 as uuidv4 } from "uuid";

export const formatedData = (arrayOfServices) => {
  let formatedData = {};
  arrayOfServices.map((item) => {
    const formatedItem = {
      [uuidv4()]: {
        name: item.serviceCode,
        type: item.serviceCode,
        items: item.validators,
        configured: item.configured,
      },
    };

    formatedData = { ...formatedData, ...formatedItem };
  });
  return formatedData;
};

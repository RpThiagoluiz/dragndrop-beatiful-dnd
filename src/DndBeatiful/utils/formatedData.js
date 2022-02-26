import { v4 as uuidv4 } from "uuid";

export const formatedData = (arrayOfServices) => {
  let formatedData = {};
  let itens = [];
  arrayOfServices.map((item) => {
    // identificador de onde aquele servico pertence
    itens = [...item.validators];
    itens.map((i) => {
      i.itemIdenfitier = item.serviceCode;
    });

    const formatedItem = {
      [uuidv4()]: {
        name: item.serviceCode,
        items: itens,
        configured: item.configured,
      },
    };

    formatedData = { ...formatedData, ...formatedItem };
  });
  return formatedData;
};

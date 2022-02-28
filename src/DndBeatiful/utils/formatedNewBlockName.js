import { antiFraudFlows } from "../data";
import { addNewBlockName } from "./addNewBlockName";

export const formatedNewBlockName = (newBlockName, setNewBlockName) => {
  let resultNewName;
  let last = 0;
  console.log(`resultNewName`, newBlockName);

  if (newBlockName === "") {
    resultNewName = addNewBlockName(antiFraudFlows);

    const result = resultNewName.split(" ");
    const [first, second] = result;
    last = Number(second) + 1;

    resultNewName = `${first} ${last}`;
    setNewBlockName(resultNewName);
  } else {
    const result = newBlockName.split(" ");
    const [first, second] = result;
    last = Number(second) + 1;

    resultNewName = `${first} ${last}`;
    setNewBlockName(resultNewName);
  }

  if (last > 10) {
    alert(`Alguma mensagem alertando q o maximo de blocos foi criado`);
    resultNewName = null;
  }

  return resultNewName;
};

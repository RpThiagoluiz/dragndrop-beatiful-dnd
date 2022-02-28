import React, { useEffect, useState } from "react";
import { DragContext } from "./components";
import {
  formatedBlocksToSave,
  formatedData,
  formatedFlows,
  formatedNewBlockName,
} from "./utils";
import { antiFraudControlsServices, antiFraudFlows } from "./data";
import { v4 as uuidv4 } from "uuid";

export function DndBeatiful() {
  const [columns, setColumns] = useState(null);
  const [isDragDisabled, setIsDragDisabled] = useState(false);
  const [columnsToSave, setColumnsToSave] = useState(null);
  const [newBlockName, setNewBlockName] = useState("");

  const handleAddBlock = (e) => {
    e.preventDefault();

    const resultNewName = formatedNewBlockName(newBlockName, setNewBlockName);

    if (!resultNewName) return;

    const formtedNewColumn = {
      [uuidv4()]: {
        name: resultNewName,
        type: "block",
        items: [],
      },
    };

    setColumns((prevState) => ({ ...prevState, ...formtedNewColumn }));
  };

  const handleSave = () => {
    formatedBlocksToSave(columns, setColumnsToSave);
  };

  useEffect(() => {
    const data = formatedData(antiFraudControlsServices);
    const result = formatedFlows(antiFraudFlows);
    setColumns({ ...data, ...result });
  }, []);

  useEffect(() => {
    columnsToSave && console.log(columnsToSave);
  }, [columnsToSave]);

  if (!columns) {
    return <h2>LOADING</h2>;
  }

  return (
    <>
      <div style={{ margin: 15 }}>
        <form onSubmit={handleAddBlock}>
          <input type="submit" value="Add bloco" />
        </form>
      </div>
      <button onClick={() => setIsDragDisabled((prevState) => !prevState)}>
        Desativar drag`n drop
      </button>

      <button onClick={handleSave}>Salvar</button>

      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <DragContext
          columns={columns}
          setColumns={setColumns}
          isDragDisabled={isDragDisabled}
          data={antiFraudControlsServices}
        />
      </div>
    </>
  );
}

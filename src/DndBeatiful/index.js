import React, { useEffect, useState } from "react";
import { DragContext } from "./components";
import { formatedData } from "./utils";
import { antiFraudControls } from "./data";
import { v4 as uuidv4 } from "uuid";

export function DndBeatiful() {
  const [columns, setColumns] = useState(null);

  const handleAddBlock = (e) => {
    e.preventDefault();

    const formtedNewColumn = {
      [uuidv4()]: {
        name: "Block", // verificar se o nome ja inclui
        items: [],
      },
    };

    setColumns((prevState) => ({ ...prevState, ...formtedNewColumn }));
  };

  useEffect(() => {
    const data = formatedData(antiFraudControls);
    setColumns(data);
  }, []);

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
      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragContext columns={columns} setColumns={setColumns} />
      </div>
    </>
  );
}

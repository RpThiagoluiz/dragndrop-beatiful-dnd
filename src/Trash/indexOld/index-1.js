import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import { Services } from "./Services";

export function JustGo() {
  const [columnsServices, setColumnsServices] = useState(null);
  const [newBlockName, setNewBlockName] = useState("");

  const [services, setServices] = useState(null);

  const handleAddBlock = (e) => {
    e.preventDefault();

    const formtedNewColumn = {
      [uuidv4()]: {
        name: newBlockName,
        items: [],
      },
    };

    setColumnsServices((prevState) => ({ ...prevState, ...formtedNewColumn }));
    setNewBlockName("");
  };

  const dataServices = [
    {
      serviceCode: "inova-mind",
      id: uuidv4(),
      validators: [
        {
          validatorCode: "validate-document",
          title: "Validação de documentos",
          description: "Serviço utilizado para bla bla bla",
          active: true,
          frequencyInDays: 0,
        },
        {
          validatorCode: "validate-love",
          title: "Validação de amor",
          description: "Serviço utilizado para amar",
          active: true,
          frequencyInDays: 0,
        },
        {
          validatorCode: "validate-angry",
          title: "Validação de raiva",
          description: "Serviço utilizado para hate nas inimigas!",
          active: true,
          frequencyInDays: 0,
        },
      ],
      configured: true,
    },

    {
      serviceCode: "datavalid",
      id: uuidv4(),
      validators: [
        {
          validatorCode: "validate-datavaliddocument",
          title: "Validação de documentos",
          description: "Serviço utilizado para bla bla bla",
          active: true,
          frequencyInDays: 0,
        },

        {
          validatorCode: "validate-datavalidangry",
          title: "Validação de raiva",
          description: "Serviço utilizado para hate nas inimigas!",
          active: true,
          frequencyInDays: 0,
        },
      ],
      configured: true,
    },

    {
      serviceCode: "resolvRisk",
      id: uuidv4(),
      validators: [
        {
          validatorCode: "validate-resolvRiskdocument",
          title: "Validação de documentos",
          description: "Serviço utilizado para bla bla bla",
          active: true,
          frequencyInDays: 0,
        },
        {
          validatorCode: "validate-resolvRisklove",
          title: "Validação de amor",
          description: "Serviço utilizado para amar",
          active: true,
          frequencyInDays: 0,
        },
      ],
      configured: true,
    },
  ];

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

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

  const formatedData = () => {
    dataServices.map((service, index) => {
      const format = {
        [uuidv4()]: {
          id: service.id,
          name: service.serviceCode,
          items: service.validators,
        },
      };

      setServices(...format);
    });
  };

  const columnsFromBackendFristPlace = {
    [uuidv4()]: {
      name: "Requested",
      items: services,
    },
  };

  useEffect(() => {
    formatedData();
    setColumnsServices(columnsFromBackendFristPlace);
  }, []);

  if (columnsServices === null) return <h1>Carregando DADOS</h1>;

  return (
    <>
      <div style={{ margin: 15 }}>
        <form onSubmit={handleAddBlock}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={newBlockName}
              onChange={(e) => setNewBlockName(e.target.value)}
            />
          </label>
          <input type="submit" value="Add bloco" />
        </form>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        <DragDropContext
          onDragEnd={(result) =>
            onDragEnd(result, columnsServices, setColumnsServices)
          }
        >
          {Object.entries(columnsServices).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            console.log(item);
                            return <Services data={item} />;
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </>
  );
}

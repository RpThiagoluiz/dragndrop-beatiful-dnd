import { useEffect } from "react";

export const ConfigBlocks = ({
  handleSubmit,
  setConfigureBlock,
  configureBlock,
}) => {
  const configureSaveBlock = (event) => {
    const nameInput = event.target.name;
    const valueInput = event.target.checked;
    const newState = {
      [nameInput]: valueInput,
    };
    // const prevState = {
    //   justOneItem: false,
    //   moreItens: false,
    //   oneItemRefuseContinue: false,
    //   moreItemsRefuseContinue: false,
    //   aproved: false,
    // };
    setConfigureBlock((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="checkbox"
          id="justOneItem"
          name="justOneItem"
          onChange={(e) => {
            configureSaveBlock(e);
          }}
          value={configureBlock.justOneItem}
        />
        <label htmlFor="justOneItem">
          Se apenas 1 item for reprovado, reprovar o cadastro
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="moreItens"
          name="moreItens"
          onChange={(e) => {
            configureSaveBlock(e);
          }}
          value={configureBlock.moreItens}
        />
        <label htmlFor="moreItens">
          Se mais de 1 item for reprovado, reprovar o cadastro
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="oneItemRefuseContinue"
          name="oneItemRefuseContinue"
          onChange={(e) => {
            configureSaveBlock(e);
          }}
          value={configureBlock.oneItemRefuseContinue}
        />
        <label htmlFor="oneItemRefuseContinue">
          Se apenas 1 item for reprovado, continuar validação dos próximos
          blocos
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="moreItemsRefuseContinue"
          name="moreItemsRefuseContinue"
          onChange={(e) => {
            configureSaveBlock(e);
          }}
          value={configureBlock.moreItemsRefuseContinue}
        />
        <label htmlFor="moreItemsRefuseContinue">
          Se mais de 1 item for reprovado, reprovar o cadastro
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          id="aproved"
          name="aproved"
          onChange={(e) => {
            configureSaveBlock(e);
          }}
          value={configureBlock.aproved}
        />
        <label htmlFor="aproved">Se bloco aprovado, criar conta bancária</label>
      </div>
      <button style={{ marginTop: 15 }} type="submit">
        Salvar
      </button>
    </form>
  );
};

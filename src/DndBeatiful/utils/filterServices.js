export const filterServices = (arrayOfServices, arrayOfFlows) => {
  let services = { ...arrayOfServices };
  const flows = { ...arrayOfFlows };

  let validatorForRemove = [];

  Object.values(flows).map((service) => {
    service.items.map((item) => {
      validatorForRemove.push(item);
    });
  });

  console.log(`oi`, validatorForRemove);

  Object.values(services).map((service) => {
    const items = service.items;
    items.filter((item, index) => item.validatorCode !== "pep_search_v2");

    console.log(`services - ${service.name}`, items);

    service.items = items;
    // Formatar o item do bloco para ficar igual, ao item do servico.
    // pegar esse itens e remover do servico
  });

  const result = { ...services, ...flows };
  return result;
};

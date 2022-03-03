export const filterServices = (arrayOfServices, arrayOfFlows) => {
  let services = { ...arrayOfServices };
  const flows = { ...arrayOfFlows };

  let validatorForRemove = [];

  Object.values(flows).map((service) => {
    service.items.map((item) => {
      validatorForRemove.push(item.validatorCode);
    });
  });

  Object.values(services).map((service) => {
    const filterItems = service.items.filter((item) => {
      return validatorForRemove.indexOf(item.validatorCode) === -1;
    });
    service.items = filterItems;
  });

  const result = { ...services, ...flows };
  return result;
};

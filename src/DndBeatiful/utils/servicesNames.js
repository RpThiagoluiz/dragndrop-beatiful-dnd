export const servicesNames = (arrayOfServices) => {
  let result;
  arrayOfServices.map((item) => {
    const services = {
      [Math.random()]: {
        name: item.serviceCode,
      },
    };
    result = { ...result, ...services };
  });

  return result;
};

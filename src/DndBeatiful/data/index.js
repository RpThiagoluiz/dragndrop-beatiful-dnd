import { v4 as uuidv4 } from "uuid";

export const antiFraudControls = [
  {
    serviceCode: "inovaMind",
    validators: [
      {
        validatorCode: "validate-inovaMind-document" + uuidv4(),
        title: "Validação de documentos",
        description: "Serviço utilizado para bla bla bla",
        active: true,
        frequencyInDays: 0,
      },
      {
        validatorCode: "validate-inovaMind-love" + uuidv4(),
        title: "Validação de amor inovaMind",
        description: "Serviço utilizado para bla bla bla",
        active: false,
        frequencyInDays: 0,
      },
    ],
    configured: true,
  },
  {
    serviceCode: "resolveRisk",
    validators: [
      {
        validatorCode: "validate-resolveRisk-document" + uuidv4(),
        title: "Validação de amor resolveRisk",
        description: "Serviço utilizado para bla bla bla",
        active: true,
        frequencyInDays: 0,
      },
      {
        validatorCode: "validate-resolveRisk-love" + uuidv4(),
        title: "Validação de documentos resolveRisk",
        description: "Serviço utilizado para bla bla bla",
        active: false,
        frequencyInDays: 0,
      },
    ],
    configured: true,
  },
  {
    serviceCode: "datavalid",
    validators: [
      {
        validatorCode: "validate-datavalid-document" + uuidv4(),
        title: "Validação de documentos datavalid",
        description: "Serviço utilizado para bla bla bla",
        active: true,
        frequencyInDays: 0,
      },
      {
        validatorCode: "validate-datavalid-love" + uuidv4(),
        title: "Validação de amor datavalid",
        description: "Serviço utilizado para bla bla bla",
        active: true,
        frequencyInDays: 0,
      },
    ],
    configured: true,
  },
];

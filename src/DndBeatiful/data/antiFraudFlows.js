import { v4 as uuidv4 } from "uuid";

export const antiFraudFlows = [
  {
    stepCode: "partners",
    blocks: [
      {
        validators: [
          {
            serviceCode: "inova-mind",
            validatorCode: "validate-document",
            title: "Validação de documentos inova-mind",
          },
          {
            serviceCode: "data-valid",
            validatorCode: "validate-datavalid-document" + uuidv4(),
            title: "Validação de amor data-valid",
          },
        ],
        createAccountIfApproved: false,
      },

      {
        validators: [
          {
            serviceCode: "resolve-risk",
            validatorCode: "validate-document resolve-risk",
            title: "Validação de documentos resolve-risk",
          },
          {
            serviceCode: "resolve-risk",
            validatorCode:
              "validate-datavalid-document resolve-risk" + uuidv4(),
            title: "Validação de amor resolve-risk",
          },
        ],
        createAccountIfApproved: false,
      },
    ],
  },
];

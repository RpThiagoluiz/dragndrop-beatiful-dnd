export const getValidationsFlow = [
  {
    stepCode: "enterprise",
    blocks: [
      {
        createAccountIfApproved: false,
        stepCode: "enterprise",
        sequential: 1,
        validators: [
          {
            title: "Pessoas expostas politicamente",
            serviceCode: "inovamind",
            validatorCode: "pep_search_v2",
          },
        ],
      },
      {
        createAccountIfApproved: false,
        stepCode: "enterprise",
        sequential: 2,
        validators: [
          {
            title: "Cálculo de patrimônio/renda",
            serviceCode: "inovamind",
            validatorCode: "patr_calc_cpf",
          },
        ],
      },
    ],
  },
];

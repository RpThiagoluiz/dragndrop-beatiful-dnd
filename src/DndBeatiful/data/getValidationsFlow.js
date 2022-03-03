export const getValidationsFlow = [
  {
    stepCode: "enterprise",
    blocks: [
      {
        stepCode: "enterprise",
        sequential: 1,
        validators: [
          {
            title: "Pessoas expostas politicamente",
            serviceCode: "inovamind",
            validatorCode: "pep_search_v2",
          },
        ],
        createAccountIfApproved: true,
        blockConfigurations: "reproveUniqueRegister",
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

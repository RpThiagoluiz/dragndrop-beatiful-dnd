export const getConfigurationService = [
  {
    serviceCode: "datavalid",
    validators: [
      {
        fields: ["cnpj"],
        active: false,
        validatorCode: "consulta_cnpj",
        serviceCode: "datavalid",
        description:
          "Validação de informações de pessoa jurídica como situação cadastral, endereço, atividade econômica, natureza jurídica e telefone.",
        title: "Consulta de pessoa jurídica",
      },
      {
        validatorCode: "consulta_cpf",
        fields: ["cpf"],
        active: true,
        files: ["foto_face"],
        serviceCode: "datavalid",
        description:
          "Validação de informações pessoais (ex.: nome, data de nascimento) e documentais (CPF, RG e CNH).",
        frequencyInDays: 30,
        title: "Consulta de pessoa física",
      },
    ],
    configured: true,
  },
  {
    serviceCode: "inovamind",
    validators: [
      {
        fields: ["name"],
        active: false,
        validatorCode: "negative_media",
        serviceCode: "inovamind",
        description:
          "Consulta notícias negativas relacionadas ao nome de uma pessoa. Exibe o número total de notícias encontradas e os tipos, podendo ser: crimes contra propriedade, pessoas, honra, sexualidade, administração pública, segurança pública, justiça, propriedade histórica e crimes econômicos.",
        title: "Notícias negativas",
      },
      {
        fields: ["cpf"],
        active: true,
        validatorCode: "patr_calc_cpf",
        serviceCode: "inovamind",
        description:
          "Consulta e exibe valores de patrimônio e renda, caso sejam encontrados.",
        frequencyInDays: 50,
        title: "Cálculo de patrimônio/renda",
      },
      {
        fields: ["cpf"],
        active: true,
        validatorCode: "pep_search_v2",
        serviceCode: "inovamind",
        description:
          "Consulta informações de uma pessoa para saber se ela é uma Pessoa Exposta Politicamente - PEP, trazendo dados pessoais e de seus sócios e familiares.",
        title: "Pessoas expostas politicamente",
      },
      {
        fields: ["cpf"],
        active: false,
        validatorCode: "search_infos_person_complete_v2",
        serviceCode: "inovamind",
        description:
          "Consulta diversas informações de uma pessoa física, desde dados pessoais, dados de óbito, documentações, endereço, empresas, dados no Procon, carteira de trabalho, empregos, telefones, veículos, restrições bancárias, além de dados de seus sócios e familiares.",
        title: "Informações completas de pessoa física",
      },
      {
        fields: ["cpf"],
        active: true,
        validatorCode: "social_assistance_person",
        serviceCode: "inovamind",
        description:
          "Consulta para identificar se a pessoa possui alguma assistência social e os dados relativos à mesma.",
        frequencyInDays: 60,
        title: "Informações de benefícios e assistência social",
      },
      {
        fields: ["query", "envolved_kind", "type", "filter"],
        active: false,
        validatorCode: "summary_of_processes",
        serviceCode: "inovamind",
        description:
          "Consulta se o pessoa está envolvida em processos judiciais identificando quantidade de processo, nome do advogado que mais aparece, nome da parte que mais aparece, estados onde tem mais processos e informações básicas sobre os processos.",
        title: "Processos encontrados",
      },
    ],
    configured: true,
  },
  {
    serviceCode: "resolvrisk",
    validators: [
      {
        fields: ["cpf", "nome", "dt_nsct", "nm_mae"],
        active: false,
        validatorCode: "search_by_dados",
        serviceCode: "resolvrisk",
        description:
          "Consulta o status do CPF da pessoa física exibindo todas as informações relativas ao óbito, caso se aplique. São consultados dados pessoais, número do livro, da folha, do termo, data de lavratura, id e endereço do cartório, risco de homônimo dentre outras informações.",
        title: "Consulta de óbito completa",
      },
    ],
    configured: true,
  },
];

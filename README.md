## REGRAS

_Formatar_
[x] Return do get dos Servicos
[x] Return dos Blocks criados `flows`
[x] Adc numero maximo de blocos de 10. Vc vai pegar a quantidade de blocos ja existente do retorno do backend. Criar um nome para eles.
Salvar o estado do novo nome do bloco. Caso o bloco estoure 10 unidades alertar o usuario e nao permitir criar mais blocos.
[x] Salvar formatar a data para o backend
[x] Salvar remover os tipos resolve-risk, data-valid e Inova-mind

_Drag and Drop_
[] Servicos, os servicos nao poderam conversar entre SI, ["data-valid", "resolve-risk", "inova-mind"].
Caso o usuario tente adc voltar o servico para a sua categoria.
[x] Blocos, podem enviar informacao entre si.
[] Blocos, podem remover um item da sua coluna retornar esse item para a sua coluna inicial.
[] Blocos, se um item que estiver no bloco for movido para fora de outro bloco ele deve retornar a sua origiem

_Filtro_
[] Assim que a request dos servicos e do flow for executada, remover os servicos q ja estao sendo utilizados.

_Configuracao do `ACEITE DO USUARIO`_
Editar os blocos -> CheckBox para o usuario marcar
Se apenas 1 item for reprovado, reprovar o cadastro
Se mais de 1 item for reprovado, reprovar o cadastro
Se apenas 1 item for reprovado, continuar validação dos próximos blocos
Se mais de item for reprovado, continuar validação dos próximos blocos.
Se bloco aprovado, criar conta bancária

Commit -> https://github.com/cartos-devs/Cartos.DASHBOARD.FRONT/commit/ce40c194a28a415fccb1c2aa00917bb92f4ff6ae

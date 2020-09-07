'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const CategoriaModel = use('App/Models/Categoria')

class CategoriaSeeder {
  async run () {
    await CategoriaModel.create({
      id: 1,
      nome: 'como o olist funciona',
      descricao: `Seja bem-vindo (a) a nossa plataforma. O Guia Olist foi feito para você nos conhecer melhor!

-   Quer vender online?
-   Busca melhores posicionamentos nos marketplaces?
-   Busca novos canais de vendas?
-   Deseja atrair mais clientes?

Vem com o Olist! 

Somos a maior loja de departamentos dentro dos maiores marketplaces do Brasil.

Através de um cadastro único na platafoma Olist, você começa a aumentar suas vendas. Simples e eficiente!`,
      order: 1
    })

    await CategoriaModel.create({
      id: 2,
      nome: 'primeiros passos',
      descricao: `**Após o login, você encontra uma visão geral da nossa plataforma, onde é possível acompanhar o andamento de todos os seus processos. **

Na aba de pedidos, você consegue visualizar o status de cada um. Basta clicar em cima e acompanhar o que deseja saber. Preparo de etiquetas, envio e atendimento ao cliente (sac) também é nessa parte.`,
      order: 2
    })

    await CategoriaModel.create({
      id: 3,
      nome: 'cadastro de produtos',
      descricao: `Se você deseja vender um produto já existente em nosso banco de dados, basta localiza-lo na busca pelo título, marca ou código de barras. 

**Para cadastrar um novo produto, você vai precisar ter em mãos:**

-   Código interno do produto
-   Título/ descrição
-   Preço/ disponibilidade de estoque
-   foto do produto 

Importe os produtos caso na esteja presente no nosso banco de dados ou caso precise cadastrar muitos produtos de uma vez. Nessa última opção, você pode baixar uma única planilha e preencher com toda a sua lista de produtos. Após preencher, é só carregar o arquivo na parte indicada (3 na imagem).

Na aba do financeiro, você consegue acompanhar mês a mês, dia a dia das suas vendas, basta apenas clicar e ver tudo especificado. Você também pode ter acesso a um relatório.`,
      order: 3
    })

    await CategoriaModel.create({
      id: 4,
      nome: 'como fidelizar e manter seu cliente informado',
      descricao: `**Dica de ouro Olist:** mantenha o seu canal de atendimento sempre aberto  aos seus clientes! 

Não demore para tirar dúvidas sobre os produtos e entrega. Dê voz e ouvidos ao seu cliente e deixe-o à vontade para se comunicar. Esteja sempre presente!`,
      order: 4
    })

    await CategoriaModel.create({
      id: 5,
      nome: 'estratégias de divulgação',
      descricao: `Vem com o Olist! Vender com a gente é um grande passo para a dar visibilidade aos seus produtos. 

Na plataforma Olist você aproveita o que há de melhor nos principais marketplaces do Brasil. 

Pense em montar a melhor vitrine de produtos, com fotos e textos nas descrições que chamem a atenção. 

Esteja presente onde há o melhor ranqueamento nos mecanismos de busca. Divulgue seus produtos com a gente!`,
      order: 5
    })

    await CategoriaModel.create({
      id: 6,
      nome: 'estratégia de vendas',
      descricao: `Como funciona a sua abordagem hoje? Você se esforça para demonstrar simpatia e interesse aos seus clientes? Uma das primeiras regras da conversão assertiva é a abordagem de venda. No caso da venda digital, uma bela apresentação do produto com uma descrição detalhada podem ser a sua porta abrindo para efetuar uma venda. 

**E no momento das dúvidas?** Lembre-se que algumas perguntas tem respostas obvias para você, mas não para o cliente. Responda sempre com dedicação e atenção total, assim seus resultados tem tudo para aumentar todos os meses. 

Aqui você vai aprender essas e outras técnicas de vendas essenciais para o seu negócio!`,
      order: 6
    })

    await CategoriaModel.create({
      id: 7,
      nome: 'cases de sucesso',
      descricao: `Nosso time é formado por mais de 10.000 vendedores profissionais. 

Mais de 3 milhões já compraram com os lojistas Olist.

> Estamos tendo resultados significativos com o Olist. Ter uma vitrine com alta visibilidade é essencial porque chama clientes. 
> -- Marcello Gonçalves, sócio-proprietário da loja Especiolista e cliente Olist desde 2017.`,
      order: 7
    })

    await CategoriaModel.create({
      id: 8,
      nome: 'tendências de consumo',
      descricao: `Segundo o site do G1, um seguimento de mercado que cresceu muito durante a pandemia foi o mobiliário relacionado ao teletrabalho. Com a necessidade de uma estrutura para trabalhar em home office, clientes começaram a cada vez mais buscar por esse tipo de produto, aumentando a demanda.`,
      order: 8
    })
  }
}

module.exports = CategoriaSeeder

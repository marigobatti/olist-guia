'use strict'

const CategoriaModel = use('App/Models/Categoria')
const ProgressoModel = use('App/Models/Progresso')

class ProgressoController {
  async index ({ request, response, auth }) {
    const user = await auth.getUser();


    const categorias = await CategoriaModel.query()
      .with('etapas.progresso', (builder) => {
        builder.where('vendedor_id', user.id)
      })
      .with('etapas', (builder) => {
        builder.orderBy('etapas.order', 'asc')
      })
      .orderBy('categorias.order', 'asc')
      .fetch()

    return response.json(categorias)
  }

  async store({ request, response, auth }) {
    const user = await auth.getUser()
    const { etapa_id, terminou } = request.all()

    const progresso = await ProgressoModel.create({
      vendedor_id: user.id,
      etapa_id,
      terminou
    });

    return response.json(progresso)
  }
}

module.exports = ProgressoController

import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Mtos} from '../models';
import {MtosRepository} from '../repositories';

export class MtosController {
  constructor(
    @repository(MtosRepository)
    public mtosRepository : MtosRepository,
  ) {}

  @post('/mtos')
  @response(200, {
    description: 'Mtos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mtos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mtos, {
            title: 'NewMtos',
            exclude: ['mto_id'],
          }),
        },
      },
    })
    mtos: Omit<Mtos, 'mto_id'>,
  ): Promise<Mtos> {
    return this.mtosRepository.create(mtos);
  }

  @get('/mtos/count')
  @response(200, {
    description: 'Mtos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Mtos) where?: Where<Mtos>,
  ): Promise<Count> {
    return this.mtosRepository.count(where);
  }

  @get('/mtos')
  @response(200, {
    description: 'Array of Mtos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mtos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Mtos) filter?: Filter<Mtos>,
  ): Promise<Mtos[]> {
    return this.mtosRepository.find(filter);
  }

  @patch('/mtos')
  @response(200, {
    description: 'Mtos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mtos, {partial: true}),
        },
      },
    })
    mtos: Mtos,
    @param.where(Mtos) where?: Where<Mtos>,
  ): Promise<Count> {
    return this.mtosRepository.updateAll(mtos, where);
  }

  @get('/mtos/{id}')
  @response(200, {
    description: 'Mtos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Mtos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Mtos, {exclude: 'where'}) filter?: FilterExcludingWhere<Mtos>
  ): Promise<Mtos> {
    return this.mtosRepository.findById(id, filter);
  }

  @patch('/mtos/{id}')
  @response(204, {
    description: 'Mtos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mtos, {partial: true}),
        },
      },
    })
    mtos: Mtos,
  ): Promise<void> {
    await this.mtosRepository.updateById(id, mtos);
  }

  @put('/mtos/{id}')
  @response(204, {
    description: 'Mtos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mtos: Mtos,
  ): Promise<void> {
    await this.mtosRepository.replaceById(id, mtos);
  }

  @del('/mtos/{id}')
  @response(204, {
    description: 'Mtos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mtosRepository.deleteById(id);
  }
}

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
import {ReportsCaa} from '../models';
import {ReportsCaaRepository} from '../repositories';

export class ReportsCaaController {
  constructor(
    @repository(ReportsCaaRepository)
    public reportsCaaRepository : ReportsCaaRepository,
  ) {}

  @post('/reports-caas')
  @response(200, {
    description: 'ReportsCaa model instance',
    content: {'application/json': {schema: getModelSchemaRef(ReportsCaa)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReportsCaa, {
            title: 'NewReportsCaa',
            exclude: ['report_id'],
          }),
        },
      },
    })
    reportsCaa: Omit<ReportsCaa, 'report_id'>,
  ): Promise<ReportsCaa> {
    return this.reportsCaaRepository.create(reportsCaa);
  }

  @get('/reports-caas/count')
  @response(200, {
    description: 'ReportsCaa model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ReportsCaa) where?: Where<ReportsCaa>,
  ): Promise<Count> {
    return this.reportsCaaRepository.count(where);
  }

  @get('/reports-caas')
  @response(200, {
    description: 'Array of ReportsCaa model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ReportsCaa, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ReportsCaa) filter?: Filter<ReportsCaa>,
  ): Promise<ReportsCaa[]> {
    return this.reportsCaaRepository.find(filter);
  }

  @patch('/reports-caas')
  @response(200, {
    description: 'ReportsCaa PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReportsCaa, {partial: true}),
        },
      },
    })
    reportsCaa: ReportsCaa,
    @param.where(ReportsCaa) where?: Where<ReportsCaa>,
  ): Promise<Count> {
    return this.reportsCaaRepository.updateAll(reportsCaa, where);
  }

  @get('/reports-caas/{id}')
  @response(200, {
    description: 'ReportsCaa model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ReportsCaa, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ReportsCaa, {exclude: 'where'}) filter?: FilterExcludingWhere<ReportsCaa>
  ): Promise<ReportsCaa> {
    return this.reportsCaaRepository.findById(id, filter);
  }

  @patch('/reports-caas/{id}')
  @response(204, {
    description: 'ReportsCaa PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReportsCaa, {partial: true}),
        },
      },
    })
    reportsCaa: ReportsCaa,
  ): Promise<void> {
    await this.reportsCaaRepository.updateById(id, reportsCaa);
  }

  @put('/reports-caas/{id}')
  @response(204, {
    description: 'ReportsCaa PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() reportsCaa: ReportsCaa,
  ): Promise<void> {
    await this.reportsCaaRepository.replaceById(id, reportsCaa);
  }

  @del('/reports-caas/{id}')
  @response(204, {
    description: 'ReportsCaa DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reportsCaaRepository.deleteById(id);
  }
}

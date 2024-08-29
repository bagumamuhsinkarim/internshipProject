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
import {HospitalList} from '../models';
import {HospitalListRepository} from '../repositories';

export class HospitalListController {
  constructor(
    @repository(HospitalListRepository)
    public hospitalListRepository : HospitalListRepository,
  ) {}

  @post('/hospital-lists')
  @response(200, {
    description: 'HospitalList model instance',
    content: {'application/json': {schema: getModelSchemaRef(HospitalList)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HospitalList, {
            title: 'NewHospitalList',
            exclude: ['hospt_id'],
          }),
        },
      },
    })
    hospitalList: Omit<HospitalList, 'hospt_id'>,
  ): Promise<HospitalList> {
    return this.hospitalListRepository.create(hospitalList);
  }

  @get('/hospital-lists/count')
  @response(200, {
    description: 'HospitalList model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(HospitalList) where?: Where<HospitalList>,
  ): Promise<Count> {
    return this.hospitalListRepository.count(where);
  }

  @get('/hospital-lists')
  @response(200, {
    description: 'Array of HospitalList model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HospitalList, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HospitalList) filter?: Filter<HospitalList>,
  ): Promise<HospitalList[]> {
    return this.hospitalListRepository.find(filter);
  }

  @patch('/hospital-lists')
  @response(200, {
    description: 'HospitalList PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HospitalList, {partial: true}),
        },
      },
    })
    hospitalList: HospitalList,
    @param.where(HospitalList) where?: Where<HospitalList>,
  ): Promise<Count> {
    return this.hospitalListRepository.updateAll(hospitalList, where);
  }

  @get('/hospital-lists/{id}')
  @response(200, {
    description: 'HospitalList model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(HospitalList, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HospitalList, {exclude: 'where'}) filter?: FilterExcludingWhere<HospitalList>
  ): Promise<HospitalList> {
    return this.hospitalListRepository.findById(id, filter);
  }

  @patch('/hospital-lists/{id}')
  @response(204, {
    description: 'HospitalList PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HospitalList, {partial: true}),
        },
      },
    })
    hospitalList: HospitalList,
  ): Promise<void> {
    await this.hospitalListRepository.updateById(id, hospitalList);
  }

  @put('/hospital-lists/{id}')
  @response(204, {
    description: 'HospitalList PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() hospitalList: HospitalList,
  ): Promise<void> {
    await this.hospitalListRepository.replaceById(id, hospitalList);
  }

  @del('/hospital-lists/{id}')
  @response(204, {
    description: 'HospitalList DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.hospitalListRepository.deleteById(id);
  }
}

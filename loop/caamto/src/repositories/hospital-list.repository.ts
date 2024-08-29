import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CaamtoDataSource} from '../datasources';
import {HospitalList, HospitalListRelations} from '../models';

export class HospitalListRepository extends DefaultCrudRepository<
  HospitalList,
  typeof HospitalList.prototype.hospt_id,
  HospitalListRelations
> {
  constructor(
    @inject('datasources.caamto') dataSource: CaamtoDataSource,
  ) {
    super(HospitalList, dataSource);
  }
}

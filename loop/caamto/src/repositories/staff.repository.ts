import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CaamtoDataSource} from '../datasources';
import {Staff, StaffRelations} from '../models';

export class StaffRepository extends DefaultCrudRepository<
  Staff,
  typeof Staff.prototype.staff_id,
  StaffRelations
> {
  constructor(
    @inject('datasources.caamto') dataSource: CaamtoDataSource,
  ) {
    super(Staff, dataSource);
  }
}

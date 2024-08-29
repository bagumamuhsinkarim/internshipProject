import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CaamtoDataSource} from '../datasources';
import {ReportsCaa, ReportsCaaRelations} from '../models';

export class ReportsCaaRepository extends DefaultCrudRepository<
  ReportsCaa,
  typeof ReportsCaa.prototype.report_id,
  ReportsCaaRelations
> {
  constructor(
    @inject('datasources.caamto') dataSource: CaamtoDataSource,
  ) {
    super(ReportsCaa, dataSource);
  }
}

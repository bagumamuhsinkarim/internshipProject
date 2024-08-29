import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CaamtoDataSource} from '../datasources';
import {Alerts, AlertsRelations} from '../models';

export class AlertsRepository extends DefaultCrudRepository<
  Alerts,
  typeof Alerts.prototype.alert_id,
  AlertsRelations
> {
  constructor(
    @inject('datasources.caamto') dataSource: CaamtoDataSource,
  ) {
    super(Alerts, dataSource);
  }
}

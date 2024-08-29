import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CaamtoDataSource} from '../datasources';
import {Mtos, MtosRelations} from '../models';

export class MtosRepository extends DefaultCrudRepository<
  Mtos,
  typeof Mtos.prototype.mto_id,
  MtosRelations
> {
  constructor(
    @inject('datasources.caamto') dataSource: CaamtoDataSource,
  ) {
    super(Mtos, dataSource);
  }
}

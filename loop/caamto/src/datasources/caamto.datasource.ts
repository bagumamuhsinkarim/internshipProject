import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'caamto',
  connector: 'postgresql',
  url: 'caamto://postgres:1234k@localhost/caamto',
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: '1234k',
  database: 'caamto'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CaamtoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'caamto';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.caamto', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

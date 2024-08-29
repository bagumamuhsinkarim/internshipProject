import {Entity, model, property} from '@loopback/repository';

@model()
export class Alerts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  alert_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  alert_message: string;

  @property({
    type: 'string',
  })
  feedback?: string;

  @property({
    type: 'number',
    required: true,
  })
  hospt_id: number;


  constructor(data?: Partial<Alerts>) {
    super(data);
  }
}

export interface AlertsRelations {
  // describe navigational properties here
}

export type AlertsWithRelations = Alerts & AlertsRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class HospitalList extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  hospt_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  hospt_name: string;

  @property({
    type: 'date',
    required: true,
  })
  dates: string;

  @property({
    type: 'number',
    required: true,
  })
  alert_id: number;

  @property({
    type: 'number',
    required: true,
  })
  staff_id: number;

  @property({
    type: 'string',
    required: true,
  })
  mto: string;


  constructor(data?: Partial<HospitalList>) {
    super(data);
  }
}

export interface HospitalListRelations {
  // describe navigational properties here
}

export type HospitalListWithRelations = HospitalList & HospitalListRelations;

import {Entity, model, property} from '@loopback/repository';

@model()
export class Mtos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  mto_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  patient_name: string;

  @property({
    type: 'number',
  })
  invoice?: number;

  @property({
    type: 'string',
    required: true,
  })
  hospital: string;

  @property({
    type: 'date',
    required: true,
  })
  dates: string;

  @property({
    type: 'string',
    required: true,
  })
  staff_name: string;


  constructor(data?: Partial<Mtos>) {
    super(data);
  }
}

export interface MtosRelations {
  // describe navigational properties here
}

export type MtosWithRelations = Mtos & MtosRelations;

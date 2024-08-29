import {Entity, model, property} from '@loopback/repository';

@model()
export class Staff extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  staff_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  staff_name: string;


  constructor(data?: Partial<Staff>) {
    super(data);
  }
}

export interface StaffRelations {
  // describe navigational properties here
}

export type StaffWithRelations = Staff & StaffRelations;

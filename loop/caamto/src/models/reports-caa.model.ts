import {Entity, model, property} from '@loopback/repository';

@model()
export class ReportsCaa extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  report_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  report: string;

  @property({
    type: 'number',
    required: true,
  })
  staff_id: number;


  constructor(data?: Partial<ReportsCaa>) {
    super(data);
  }
}

export interface ReportsCaaRelations {
  // describe navigational properties here
}

export type ReportsCaaWithRelations = ReportsCaa & ReportsCaaRelations;

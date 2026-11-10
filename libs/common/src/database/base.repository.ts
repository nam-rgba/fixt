import { BaseEntity } from './base.schema.js';

export abstract class BaseRepository<T extends BaseEntity> {
  constructor(protected readonly entity: T) {}
}

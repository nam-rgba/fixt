import { Logger } from '@nestjs/common';
import { CoreEntity } from './base.schema.js';
import { DeepPartial, Repository } from 'typeorm';

export abstract class BaseRepository<T extends CoreEntity> {
  protected abstract readonly logger: Logger;

  constructor(protected readonly repo: Repository<T>) {}

  async create(data: DeepPartial<T>): Promise<T> {
    const created = this.repo.create(data);
    return this.repo.save(created);
  }

  async findOneById(id: string): Promise<T | null> {
    return this.repo.findOneBy({ id } as any);
  }

  //patch
  async update(id: string, data: DeepPartial<T>): Promise<T | null> {
    const updated = await this.repo.preload({ id, ...data });
    if (!updated) return null;

    return await this.repo.save(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repo.softDelete(id);
  }
}

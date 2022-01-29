import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCards1641776298972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'cards',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'areaCode',
          type: 'varchar',
        },
        {
          name: 'cpf',
          type: 'varchar',
        },
        {
          name: 'fone',
          type: 'varchar',
        },
        {
          name: 'birthDate',
          type: 'timestamp',
        },
        {
          name: 'token',
          type: 'varchar',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        }],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cards');
  }
}

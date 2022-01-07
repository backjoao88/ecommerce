import { MigrationInterface, Table, QueryRunner } from 'typeorm';

export class CreateAddresses1641185069963 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'addresses',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name', type: 'varchar',
        },
        {
          name: 'number', type: 'varchar',
        },
        {
          name: 'complement', type: 'varchar',
        },
        {
          name: 'district', type: 'varchar',
        },
        {
          name: 'city', type: 'varchar',
        },
        {
          name: 'cep', type: 'varchar',
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
    await queryRunner.dropTable('addresses');
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateVariationShipping1641583459061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'variation_shippings',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'height_cm', type: 'real',
        },
        {
          name: 'width_cm', type: 'real',
        },
        {
          name: 'depth_cm', type: 'real',
        },
        {
          name: 'weight_kg', type: 'real',
        },
        {
          name: 'free_shipping', type: 'boolean',
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
    await queryRunner.dropTable('variation_shippings');
  }
}

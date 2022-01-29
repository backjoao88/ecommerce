import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateVariation1641584285262 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'variations',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'code',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
        },

        {
          name: 'price',
          type: 'real',
        },
        {
          name: 'price_promotion',
          type: 'real',
        },

        {
          name: 'quantity',
          type: 'real',
        },

        {
          name: 'blocked_quantity',
          type: 'real',
        },

        {
          name: 'shippingVariation_id',
          type: 'uuid',
        },

        {
          name: 'product_id',
          type: 'uuid',
        },

        {
          name: 'shop_id',
          type: 'uuid',
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
      foreignKeys: [{
        name: 'VariationShipping',
        referencedColumnNames: ['id'],
        referencedTableName: 'variation_shippings',
        columnNames: ['shippingVariation_id'],
      }, {
        name: 'VariationProduct',
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        columnNames: ['product_id'],
      }],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('variations');
  }
}

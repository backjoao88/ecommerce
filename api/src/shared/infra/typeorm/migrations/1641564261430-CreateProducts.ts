import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1641564261430 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'title', type: 'varchar',
        },
        {
          name: 'description', type: 'varchar',
        },
        {
          name: 'available', type: 'boolean', default: true,
        },
        {
          name: 'price', type: 'real',
        },
        {
          name: 'price_promotion', type: 'real',
        },
        {
          name: 'sku', type: 'varchar',
        },
        {
          name: 'category_id', type: 'uuid',
        },
        {
          name: 'shop_id', type: 'uuid',
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
      foreignKeys: [
        {
          name: 'ProductCategoryId',
          columnNames: ['category_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}

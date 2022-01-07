import { MigrationInterface, Table, QueryRunner } from 'typeorm';

export class CreateCustomers1641414836253 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'customers',
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
          name: 'birth_date', type: 'timestamp',
        },
        {
          name: 'cpf', type: 'varchar', isUnique: true,
        },
        {
          name: 'inactive', type: 'boolean', default: false,
        },
        {
          name: 'fone', type: 'varchar',
        },
        {
          name: 'user_id',
          type: 'uuid',
        },
        {
          name: 'shop_id',
          type: 'uuid',
        },
        {
          name: 'address_id',
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
        name: 'ClientUser',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      {
        name: 'ClientShop',
        referencedTableName: 'shops',
        referencedColumnNames: ['id'],
        columnNames: ['shop_id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      {
        name: 'ClientAddress',
        referencedTableName: 'addresses',
        referencedColumnNames: ['id'],
        columnNames: ['address_id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
  }
}

import {
  MigrationInterface, QueryRunner, TableColumn, TableForeignKey,
} from 'typeorm';

export class AddShopIdColumnUsers1641230857680 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', new TableColumn({
      name: 'shop_id',
      type: 'uuid',
      isNullable: true,
    }));

    const UserShopIdForeignKey = new TableForeignKey({
      columnNames: ['shop_id'],
      referencedTableName: 'shops',
      referencedColumnNames: ['id'],
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createForeignKey('users', UserShopIdForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'UserShopId');
    await queryRunner.dropColumn('users', 'shop_id');
  }
}

import { MigrationInterface, TableColumn, QueryRunner } from 'typeorm';

export class AddNameColumnShop1641185709395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('shops', new TableColumn({
      name: 'name',
      type: 'varchar',
      isNullable: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('shops', 'name');
  }
}

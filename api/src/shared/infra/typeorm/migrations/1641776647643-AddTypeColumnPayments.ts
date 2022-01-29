import {
  MigrationInterface, QueryRunner, TableColumn,
} from 'typeorm';

export class AddTypeColumnPayments1641776647643 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('payments', new TableColumn({
      name: 'type',
      type: 'varchar',
      isNullable: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('payments', 'type');
  }
}

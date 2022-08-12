import { TableColumn, MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductAmmount1660060495397 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'cart_products_product',
      new TableColumn({
        name: 'productAmout',
        type: 'int',
        default: 1,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(
      'cart_products_product',
      new TableColumn({
        name: 'productAmout',
        type: 'int',
        default: 1,
      })
    );
  }
}

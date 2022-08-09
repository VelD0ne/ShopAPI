import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class DbCreation1659093284311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cart',
        columns: [
          {
            name: 'uuid',
            type: 'varchar',
            isPrimary: true,
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'integer',
          },
          {
            name: 'price',
            type: 'integer',
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: 'cart_products_product',
        columns: [
          {
            name: 'cartProductId',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'productId',
            type: 'integer',
          },
          {
            name: 'cartUuid',
            type: 'varchar',
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'cart_products_product',
      new TableForeignKey({
        columnNames: ['productId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'cart_products_product',
      new TableForeignKey({
        columnNames: ['cartUuid'],
        referencedColumnNames: ['uuid'],
        referencedTableName: 'cart',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('cart_products_product');
    const productForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('productId') !== -1
    );
    const cartForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('cartUuid') !== -1
    );
    await queryRunner.dropForeignKey(
      'cart_products_product',
      productForeignKey
    );
    await queryRunner.dropForeignKey(
      'cart_products_product',
      cartForeignKey
    );
    await queryRunner.dropTable('cart_products_product');
    await queryRunner.dropTable('cart');
    await queryRunner.dropTable('product');
  }
}

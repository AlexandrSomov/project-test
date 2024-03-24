import { MigrationInterface, QueryRunner } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class addProductTable1678019392498 implements MigrationInterface {
  name = 'addProductTable1678019392498';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" (
          "id" SERIAL NOT NULL,
          "name" VARCHAR(255) NOT NULL,
          "description" VARCHAR(1000) NOT NULL,
          "price" INTEGER NOT NULL,
          "screen" VARCHAR(50) NOT NULL,
          "capacity" VARCHAR(50) NOT NULL,
          "ram" VARCHAR(50) NOT NULL,
          CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }
}

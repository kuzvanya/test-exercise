import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1714332970590 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "user" (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            login TEXT NOT NULL,
            password TEXT NOT NULL
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "user";
    `);
  }
}

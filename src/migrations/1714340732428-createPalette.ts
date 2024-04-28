import { MigrationInterface, QueryRunner } from 'typeorm';

export class Pallete1714334992424 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE palette (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            user_id INTEGER NOT NULL REFERENCES "user"
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE palette;
    `);
  }
}

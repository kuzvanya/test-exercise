import { MigrationInterface, QueryRunner } from 'typeorm';

export class Session1714338449608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE session (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES "user",
            token UUID NOT NULL,
            expired_at TIMESTAMPTZ
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE session;
    `);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePaletteColor1714343987947 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE palette_color (
            id SERIAL PRIMARY KEY,
            palette_id INTEGER NOT NULL REFERENCES palette,
            hex_value TEXT NOT NULL,
            name TEXT NOT NULL
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DROP TABLE palette_color;
    `);
  }
}

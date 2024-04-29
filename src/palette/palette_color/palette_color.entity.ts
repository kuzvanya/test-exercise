import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaletteColor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  palette_id: number;

  @Column({ nullable: false })
  hex_value: string;

  @Column({ nullable: false })
  name: string;
}

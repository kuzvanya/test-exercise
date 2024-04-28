import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palette {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  user_id: number;
}

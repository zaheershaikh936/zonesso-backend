import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  name: string;

  @Column({ type: "varchar", nullable: true })
  image: string;

  @Column({ type: "varchar", nullable: true })
  label: string;

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  created: Date;

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  updated: Date = new Date();
}

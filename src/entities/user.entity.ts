import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  email: string;

  @Column({ type: "varchar", nullable: true })
  password: string;

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  created: Date;

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  updated: Date = new Date();
}

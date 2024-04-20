import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Showroom } from "./showroom.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true, array: true })
  images: string[];

  @Column({ type: "varchar", nullable: true })
  price: string;

  @Column({ type: "varchar", nullable: true })
  title: string;

  @Column({ type: "varchar", nullable: true, array: true })
  tags: string[];

  @Column({ type: "varchar", nullable: true })
  year: string;

  @Column({ type: "varchar", nullable: true })
  description: string;

  @Column({ type: "varchar", nullable: true, default: "Premium" })
  label: string;

  @ManyToOne(() => Showroom, (showroom) => showroom.products)
  @JoinColumn({ name: "showroomId" })
  showroom: Showroom;

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  created: Date;

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  updated: Date = new Date();
}

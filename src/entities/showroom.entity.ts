import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Showroom {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: true })
  distance: string;

  @Column({ type: "varchar", nullable: true })
  image: string;

  @Column({ type: "varchar", nullable: true })
  title: string;

  @Column({
    type: "varchar",
    nullable: true,
  })
  logo: string;

  @Column({ type: "varchar", nullable: true })
  location: string;

  @OneToMany(() => Product, (product) => product.showroom)
  products: Product[];

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  created: Date;

  @Column({ type: "timestamp", nullable: true, default: new Date() })
  updated: Date = new Date();
}

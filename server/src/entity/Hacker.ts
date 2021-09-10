import { Field, Float ,Int, ObjectType  } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class Hacker extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ nullable: false })
  fullName: string;

  @Field()
  @Column({ nullable: false })
  email: string;

  @Field()
  @Column({ nullable: true })
  github: string;

  @Field()
  @Column({ nullable: true })
  linkedIn: string;

  @Field(() => Int)
  @Column("int", {nullable: false})
  hackathonAttended: number;

  @Field()
  @Column({nullable: false})
  programmingExp: string;

  @Field()
  @Column({nullable: false})
  academics: string;

  @Field()
  @Column({nullable: false})
  major: string;

  @Field(() => Float)
  @Column({nullable: false})
  phoneNumber: number;

  @Field()
  @Column({nullable: false})
  disUserName: string;
}

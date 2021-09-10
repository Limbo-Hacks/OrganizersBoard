import { Hacker } from "../entity/Hacker";
import { Arg, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { HackerInputCreate } from "./HackerInputCreate";
import { HackerInputUpdate } from "./HackerInputUpdate";
import { isAuth } from "../isAuth";

@Resolver()
export class HackerResolver {

  @Mutation(() => Hacker)
  @UseMiddleware(isAuth)
  async addHacker(
    @Arg("options", () => HackerInputCreate) options: HackerInputCreate
  ) {
    const hacker = await Hacker.create(options).save();
    return hacker;
  }


  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async updateHacker(
    @Arg("id") id: number,
    @Arg("input", () => HackerInputUpdate) input: HackerInputUpdate
  ) {
    await Hacker.update({ id }, input);
    return `Updated hacker no:- ${id}`;
  }

  @Mutation(() => String)
  @UseMiddleware(isAuth)
  async deleteHacker(@Arg("id", () => Int) id: number) {
    await Hacker.delete({ id });
    return `Deleted hacker no:- ${id}`;
  }

  @Query(() => [Hacker])
  @UseMiddleware(isAuth)
  hacker() {
    return Hacker.find();
  }
}

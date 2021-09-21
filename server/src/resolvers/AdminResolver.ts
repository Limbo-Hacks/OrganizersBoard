import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { sign } from "jsonwebtoken";
import { isAuth } from "../isAuth";
import { AdminContext } from "../AdminContext";

@ObjectType()
class LoginResp {
  @Field()
  accessToken: string;
}

@Resolver()
export class AdminResolver {
  @Query(() => String)
  hello() {
    return `Umm check`;
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: AdminContext) {
    console.log(payload);
    return `Middleware working`;
  }

  @Mutation(() => LoginResp)
  async login(@Arg("password") password: string): Promise<LoginResp> {
    const pass = process.env.P;
    const at = process.env.AT;
    if (pass !== password) {
      throw new Error("Err");
    }
    return {
      accessToken: sign({}, at as string, { expiresIn: "7d" }),
    };
  }
}

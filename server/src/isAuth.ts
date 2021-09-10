import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";
import { AdminContext } from "./AdminContext";

export const isAuth: MiddlewareFn<AdminContext> = ({context}, next) => {
    const authorization = context.req.headers['authorization'];

    if(!authorization){
        throw new Error('Not authenticated')
    }

    try {
        const token = authorization.split(" ")[1];
        const payload = verify(token, "sbjsbdbds")
        context.payload = payload as any;
    } catch (err) {
        console.log(err);
        throw new Error('not authenticated')
    }
    return next();
}
import * as jwt from 'jsonwebtoken';
import { GraphQLFieldResolver } from "graphql";

import { ComposableResolver } from "./composable.resolver";
import { ResolverContext } from "../../interfaces/ResolverContextInterface";
import { JWT_SECRET, getToken } from '../../utils/utils';

export const verifyTokenResolver: ComposableResolver<any, ResolverContext> =
    (resolver: GraphQLFieldResolver<any, ResolverContext>): GraphQLFieldResolver<any, ResolverContext> => {

        return (parent, args, context: ResolverContext, info) => {
            
            return jwt.verify(getToken(context.authorization), JWT_SECRET, (err, decoded: any) => {
                if (!err) {
                    return resolver(parent, args, context, info);
                }
                throw new Error(`${err.name}: ${err.message}`);
            });

        };

    };
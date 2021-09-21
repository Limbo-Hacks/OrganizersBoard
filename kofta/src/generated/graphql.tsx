import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Hacker = {
  __typename?: 'Hacker';
  academics: Scalars['String'];
  disUserName: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  github: Scalars['String'];
  hackathonAttended: Scalars['Int'];
  id: Scalars['Int'];
  linkedIn: Scalars['String'];
  major: Scalars['String'];
  phoneNumber: Scalars['Float'];
  programmingExp: Scalars['String'];
};

export type HackerInputCreate = {
  academics: Scalars['String'];
  disUserName: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  github?: Maybe<Scalars['String']>;
  hackathonAttended: Scalars['Int'];
  linkedIn?: Maybe<Scalars['String']>;
  major: Scalars['String'];
  phoneNumber: Scalars['Float'];
  programmingExp: Scalars['String'];
};

export type HackerInputUpdate = {
  academics: Scalars['String'];
  disUserName: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  github?: Maybe<Scalars['String']>;
  hackathonAttended: Scalars['Int'];
  linkedIn?: Maybe<Scalars['String']>;
  major: Scalars['String'];
  phoneNumber: Scalars['Float'];
  programmingExp: Scalars['String'];
};

export type LoginResp = {
  __typename?: 'LoginResp';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addHacker: Hacker;
  deleteHacker: Scalars['String'];
  login: LoginResp;
  updateHacker: Scalars['String'];
};


export type MutationAddHackerArgs = {
  options: HackerInputCreate;
};


export type MutationDeleteHackerArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
};


export type MutationUpdateHackerArgs = {
  id: Scalars['Float'];
  input: HackerInputUpdate;
};

export type Query = {
  __typename?: 'Query';
  bye: Scalars['String'];
  hacker: Array<Hacker>;
  hello: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
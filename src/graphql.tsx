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

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN'
}

export type Login = {
  __typename?: 'Login';
  hasPhone: Scalars['Boolean'];
  hasUser: Scalars['Boolean'];
  token: Scalars['String'];
};

export type LoginInput = {
  code: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Login;
  updateUser: User;
  weappUpdatePhone: User;
  weappUpdateUser: User;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationWeappUpdatePhoneArgs = {
  data: WeappUpdateUserInput;
};


export type MutationWeappUpdateUserArgs = {
  data: WeappUpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  findUser: User;
  weappRefreshSessionKey: Scalars['Boolean'];
  weappRefreshToken: RefreshToken;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  token?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  nickName?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatarUrl?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  nickName?: Maybe<Scalars['String']>;
};

export type WeappUpdateUserInput = {
  encryptedData: Scalars['String'];
  iv: Scalars['String'];
};

export type FindUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUserQuery = { __typename?: 'Query', findUser: { __typename?: 'User', nickName?: Maybe<string> } };


export const FindUserDocument = gql`
    query findUser {
  findUser {
    nickName
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUserQuery(baseOptions?: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
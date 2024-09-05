import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  submitUserInput?: Maybe<Recommendation>;
};


export type MutationSubmitUserInputArgs = {
  input: UserInputType;
};

export type NotRecommendedProduct = {
  __typename?: 'NotRecommendedProduct';
  explanation: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  downloadRecommendationReport?: Maybe<RecommendationReport>;
  getRecommendations?: Maybe<Recommendation>;
};


export type QueryDownloadRecommendationReportArgs = {
  input: UserInputType;
};


export type QueryGetRecommendationsArgs = {
  input: UserInputType;
};

export type Recommendation = {
  __typename?: 'Recommendation';
  notRecommendedProducts: Array<NotRecommendedProduct>;
  products: Array<RecommendedProduct>;
};

export type RecommendationReport = {
  __typename?: 'RecommendationReport';
  reasoning: Scalars['String']['output'];
  recommendation: Recommendation;
};

export type RecommendedProduct = {
  __typename?: 'RecommendedProduct';
  explanation: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type UserInputType = {
  query: Scalars['String']['input'];
};

export type GetRecommendationsQueryVariables = Exact<{
  input: UserInputType;
}>;


export type GetRecommendationsQuery = { __typename?: 'Query', getRecommendations?: { __typename?: 'Recommendation', products: Array<{ __typename?: 'RecommendedProduct', name: string, price: number, url: string, explanation: string }>, notRecommendedProducts: Array<{ __typename?: 'NotRecommendedProduct', name: string, price: number, url: string, explanation: string }> } | null };


export const GetRecommendationsDocument = gql`
    query getRecommendations($input: UserInputType!) {
  getRecommendations(input: $input) {
    products {
      name
      price
      url
      explanation
    }
    notRecommendedProducts {
      name
      price
      url
      explanation
    }
  }
}
    `;

/**
 * __useGetRecommendationsQuery__
 *
 * To run a query within a Vue component, call `useGetRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecommendationsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetRecommendationsQuery({
 *   input: // value for 'input'
 * });
 */
export function useGetRecommendationsQuery(variables: GetRecommendationsQueryVariables | VueCompositionApi.Ref<GetRecommendationsQueryVariables> | ReactiveFunction<GetRecommendationsQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GetRecommendationsQuery, GetRecommendationsQueryVariables>(GetRecommendationsDocument, variables, options);
}
export function useGetRecommendationsLazyQuery(variables?: GetRecommendationsQueryVariables | VueCompositionApi.Ref<GetRecommendationsQueryVariables> | ReactiveFunction<GetRecommendationsQueryVariables>, options: VueApolloComposable.UseQueryOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GetRecommendationsQuery, GetRecommendationsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<GetRecommendationsQuery, GetRecommendationsQueryVariables>(GetRecommendationsDocument, variables, options);
}
export type GetRecommendationsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GetRecommendationsQuery, GetRecommendationsQueryVariables>;
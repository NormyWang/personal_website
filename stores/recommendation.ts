import { defineStore } from 'pinia';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { GetRecommendationsDocument, GetRecommendationsQuery, GetRecommendationsQueryVariables, Recommendation } from '@/types/graphql';

export const useRecommendationStore = defineStore('recommendation', {
  state: () => ({
    recommendedProducts: [],
    notRecommendedProducts: [],
    loading: false,
  }),
  actions: {
    async fetchRecommendations(query: string) {
        this.loading = true;
        const { result, loading } = await useQuery<GetRecommendationsQuery, GetRecommendationsQueryVariables>(GetRecommendationsDocument, {
            input: { query },
        });
        this.loading = loading.value;
        if (!loading.value) {
          const { getRecommendations } = result.value;
          this.recommendedProducts = getRecommendations.products;
          this.notRecommendedProducts = getRecommendations.notRecommendedProducts;
        }
    },
  },
  getters: {
    recommendedProductsList: (state) => state.recommendedProducts,
    notRecommendedProductsList: (state) => state.notRecommendedProducts,
  }
})
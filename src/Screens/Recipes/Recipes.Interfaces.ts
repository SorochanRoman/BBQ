export type CategoryRecipe = 'meet' | 'desert' | 'vegetables';

export interface Recipe {
    id: string;
    name: string;
    description: string;
    category: CategoryRecipe;
}
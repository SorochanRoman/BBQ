export type CategoryRecipe = 'meet' | 'desert' | 'vegetables';
export type DifficultRecipe = 'easy' | 'medium' | 'hard';

export interface Recipe {
    id: string;
    title: string;
    description: string;
    category: CategoryRecipe;
    difficult: DifficultRecipe;
}
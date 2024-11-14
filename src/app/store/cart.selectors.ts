import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.reducer";

export const selectCartState = createFeatureSelector<CartState>('cart')

export const selectCartItems = createSelector(
    selectCartState,
    (state) => state.items
)

export const selectTotalCount = createSelector(
    selectCartState,
    (state) => state.totalCount
)

export const selectTotalPrice = createSelector(
    selectCartState,
    (state) => state.items.reduce((total, item) => total + item.price, 0)
)
import { createReducer, on } from "@ngrx/store";
import { ICart } from "./cart.state";
import { addItem, removeItem } from "./cart.actions";

export interface CartState {
    items: ICart[],
    totalCount: number
}

export const InitialState: CartState = {
    items: [],
    totalCount: 0
}

export const cartReducer = createReducer(
    InitialState,
    on(addItem, (state, { item }) => ({
        ...state,
        items: [...state.items, item],
        totalCount: state.totalCount + 1
    })),
    on(removeItem, (state, { itemId }) => {
        const updatedItems = state.items.filter(item => item.id !== itemId)
        return {
            ...state,
            items: updatedItems,
            totalCount: state.totalCount - 1
        }
    })
)
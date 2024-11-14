import { createAction, props } from "@ngrx/store";
import { ICart } from "./cart.state";

export const addItem = createAction('[Cart] add item', props<{item: ICart}>())

export const removeItem = createAction('[Cart] remove item', props<{itemId: string}>())
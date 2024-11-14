import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../../store/cart.state';
import { Store } from '@ngrx/store';
import { selectCartItems, selectTotalCount, selectTotalPrice } from '../../store/cart.selectors';
import { addItem, removeItem } from '../../store/cart.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  store = inject(Store)

  item$: Observable<ICart[]> = this.store.select(selectCartItems)
  totalCount$:Observable<number> = this.store.select(selectTotalCount)
  totalPrice$:Observable<number> = this.store.select(selectTotalPrice)

  addToCart(){
    const newItem: ICart = {id: '1', name: 'Whey Isolate', price: 3000}
    this.store.dispatch(addItem({item: newItem}))
  }

  removeFromCart(itemId: string){
    this.store.dispatch(removeItem({itemId}))
  }

}

import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { TotalCount } from '../components/TotalCount';
import { CartList } from '../components/CartList';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';

    this.header = new Header(page);
    this.totalCount = new TotalCount(page);
    this.cartList = new CartList(page);
  }
}

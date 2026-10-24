import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart cleaned after page refresh', async ({ cartPage, menuPage }) => {
  await menuPage.open();
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.header.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.cartList.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.reload();

  await cartPage.cartList.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.cartList.assertNoCoffeeMessageIsVisible();
});

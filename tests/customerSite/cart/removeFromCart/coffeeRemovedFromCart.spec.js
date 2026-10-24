import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

let testParameters = [];

for (const [key] of Object.entries(COFFEE_NAMES)) {
  testParameters.push({ coffee: COFFEE_NAMES[key] });
}

testParameters.forEach(({ coffee }) => {
  test(`The ${coffee} removed from Cart after clicking remove`, async ({
    cartPage,
    menuPage,
  }) => {
    await menuPage.open();
    await menuPage.cup.clickCoffeeCup(coffee);

    await menuPage.header.clickCartLink();
    await cartPage.waitForLoading();

    await cartPage.cartList.clickCoffeeListItemRemoveAllButton(coffee);
    await cartPage.cartList.assertNoCoffeeMessageIsVisible();
  });
});

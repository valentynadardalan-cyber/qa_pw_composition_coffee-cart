import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { Promo } from '../components/Promo';
import { Cup } from '../components/Cup';
import { TotalCount } from '../components/TotalCount';

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/';
    this.header = new Header(page);
    this.promo = new Promo(page);
    this.cup = new Cup(page);
    this.totalCount = new TotalCount(page);
  }

  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');

    return this.page.getByTestId(testId);
  }

  coffeeCupCostLocator(coffeeName) {
    const coffeeCup = this.coffeeCupLocator(coffeeName);
    return this.page.getByRole('listitem').filter({ has: coffeeCup });
  }

  async clickCoffeeCup(coffeeName) {
    await step(`Click ${coffeeName} cup`, async () => {
      await this.coffeeCupLocator(coffeeName).click();
    });
  }

  async assertCoffeeCupCostHasValue(coffee, value) {
    await step(`Assert ${coffee} cup cost has value: ${value}`, async () => {
      await expect(this.coffeeCupCostLocator(coffee)).toContainText(value);
    });
  }
}

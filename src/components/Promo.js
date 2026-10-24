import { expect, step } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Promo extends BaseComponent {
  constructor(page) {
    super(page);

    this.promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.",
    );
    this.yesPromoButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });
  }

  async clickYesPromoButton() {
    await step(`Click 'Yes' promo button`, async () => {
      await this.yesPromoButton.click();
    });
  }

  async clickNoPromoButton() {
    await step(`Click 'No' promo button`, async () => {
      await this.noPromoButton.click();
    });
  }

  async assertPromoMessageIsVisible() {
    await step(`Assert promo message is visible`, async () => {
      await expect(this.promoMessage).toBeVisible();
    });
  }
}
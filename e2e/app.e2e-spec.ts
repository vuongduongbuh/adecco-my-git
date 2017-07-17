import { AdxAnalyticsPage } from './app.po';

describe('adx-analytics App', () => {
  let page: AdxAnalyticsPage;

  beforeEach(() => {
    page = new AdxAnalyticsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

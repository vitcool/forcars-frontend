import { ForcarsFrontendPage } from './app.po';

describe('forcars-frontend App', () => {
  let page: ForcarsFrontendPage;

  beforeEach(() => {
    page = new ForcarsFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

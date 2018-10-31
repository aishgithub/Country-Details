import { CoutryListPage } from './app.po';

describe('coutry-list App', () => {
  let page: CoutryListPage;

  beforeEach(() => {
    page = new CoutryListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

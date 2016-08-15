import { EstPage } from './app.po';

describe('est App', function() {
  let page: EstPage;

  beforeEach(() => {
    page = new EstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

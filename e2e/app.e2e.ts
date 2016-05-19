import { CoworkingPage } from './app.po';

describe('coworking App', function() {
  let page: CoworkingPage;

  beforeEach(() => {
    page = new CoworkingPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('coworking works!');
  });
});

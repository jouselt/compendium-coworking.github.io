export class CoworkingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('coworking-app h1')).getText();
  }
}

import { browser, element, by } from 'protractor';

export class EcolservicesViewerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ecol-viewer-root h1')).getText();
  }
}

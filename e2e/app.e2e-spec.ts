import { EcolservicesViewerPage } from './app.po';

describe('ecolservices-viewer App', () => {
  let page: EcolservicesViewerPage;

  beforeEach(() => {
    page = new EcolservicesViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ecol-viewer works!');
  });
});

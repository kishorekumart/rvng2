import { RootvinnCli1Page } from './app.po';

describe('rootvinn-cli1 App', () => {
  let page: RootvinnCli1Page;

  beforeEach(() => {
    page = new RootvinnCli1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

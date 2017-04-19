import { TypescriptHeroBarrelMisbehaviorPage } from './app.po';

describe('typescript-hero-barrel-misbehavior App', () => {
  let page: TypescriptHeroBarrelMisbehaviorPage;

  beforeEach(() => {
    page = new TypescriptHeroBarrelMisbehaviorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

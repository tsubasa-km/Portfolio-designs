
export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  projects: Project[];
  contactEmail: string;
  quirkyQuote: string;
}

export enum ThemeType {
  NEO_BRUTALISM = 'NEO_BRUTALISM',
  HOLOGRAPHIC = 'HOLOGRAPHIC',
  RECEIPT = 'RECEIPT',
  TRADING_CARD = 'TRADING_CARD',
  SELF_CHECKOUT = 'SELF_CHECKOUT',
}

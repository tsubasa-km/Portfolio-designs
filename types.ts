
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
  RETRO_OS = 'RETRO_OS',
  NEO_BRUTALISM = 'NEO_BRUTALISM',
  HOLOGRAPHIC = 'HOLOGRAPHIC',
  RPG_STATS = 'RPG_STATS',
  RECEIPT = 'RECEIPT',
  BSOD = 'BSOD',
  NUTRITION = 'NUTRITION',
  WANTED = 'WANTED',
  IDE = 'IDE',
  SUBWAY = 'SUBWAY',
  VHS = 'VHS',
  TRADING_CARD = 'TRADING_CARD',
  INSTRUCTION = 'INSTRUCTION',
  TOP_SECRET = 'TOP_SECRET',
  VENDING = 'VENDING',
  SELF_CHECKOUT = 'SELF_CHECKOUT',
}

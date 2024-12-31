export interface Detail {
  unix_timestamp: number;
  dateTime: string;
  ip: string;
  browser: string;
  country: string;
  city: string;
  regionName: string;
  isp: string;
}

export type LinkDetails = {
  longUrl: string;
  totalClicks: number;
  details: Detail[];
};

export interface LinkData {
  longUrl: string;
  totalClicks: number;
  shortUrl: string;
  details: Detail[];
}

export enum Marketing_Lead_Source {
  CONTACT_US = 'CONTACT_US',
  DEMO = 'DEMO',
  EBOOK = 'EBOOK',
  EMAIL_SUBSCRIPTION = 'EMAIL_SUBSCRIPTION',
  SEO_TOOL = 'SEO_TOOL',
  REPORT = 'REPORT',
  LEAD_GEN = 'LEAD_GEN',
}
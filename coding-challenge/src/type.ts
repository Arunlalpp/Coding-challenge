export interface Sellers {
  reports: string[];
  sellerID: string;
}

export interface SellerAppData {
  count: number;
  sellers: Sellers[];
}

export interface SellerData {
  failures: SellerAppData[];
}

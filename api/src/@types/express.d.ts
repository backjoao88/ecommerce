declare namespace Express {
  export interface Request {
    user: {
      id: string;
      shop_id: string;
      perm: string;
    };
  }
}

interface Yaqrcode {
  (str: string, opt?: { size: number }): string;
}

declare module "yaqrcode" {
  export = Yaqrcode;
}

declare const yaqrcode: Yaqrcode;

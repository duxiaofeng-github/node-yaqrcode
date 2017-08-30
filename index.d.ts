interface YaQrcodeStatic {
    (str: string, opt?: { size: number }): string;
}

declare module "yaqrcode" {
    export = YaQrcodeStatic;
}

export declare var yaqrcode: YaQrcodeStatic;

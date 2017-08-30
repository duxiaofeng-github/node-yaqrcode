interface YaQrcodeStatic {
    (str: string, opt?: { size: number }): string;
}

declare module "yaqrcode" {
    export var yaqrcode: YaQrcodeStatic;
    export default YaQrcodeStatic;
}

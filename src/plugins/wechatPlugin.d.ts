export default class WechatPlugin {
    static isInstalled: () => Promise<unknown>;
    static share: () => Promise<void>;
}

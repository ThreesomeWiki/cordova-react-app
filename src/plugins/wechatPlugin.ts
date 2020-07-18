export default class WechatPlugin {
    static isInstalled = () => {
        return new Promise(resolve => {
            if (window.Wechat) {
                window.Wechat.isInstalled(
                    installed => {
                        if (installed) {
                            return resolve(true);
                        }
                        resolve(false);
                    },
                    () => {
                        resolve(false);
                    }
                );
            } else {
                resolve(false);
            }
        });
    };
    static share = async () => {
        const isinstall = await WechatPlugin.isInstalled();
        if (isinstall) {
            window.Wechat.share(
                {
                    text: 'This is just a plain string',
                    scene: window.Wechat.Scene.TIMELINE,
                },
                () => {},
                e => {}
            );
        }
    };
}

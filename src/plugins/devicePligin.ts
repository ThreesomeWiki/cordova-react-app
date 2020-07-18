export interface DeviceType {
    version: string;
    model: string;
    uuid: string;
}

export default class DevicePlugin {
    static getInfo = () => {
        return new Promise(resolve => {
            if (!window.device) return resolve({});
            return resolve(window.device);
        });
    };
}

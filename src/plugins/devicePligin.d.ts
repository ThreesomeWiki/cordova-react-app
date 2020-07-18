export interface DeviceType {
    version: string;
    model: string;
    uuid: string;
}
export default class DevicePlugin {
    static getInfo: () => Promise<unknown>;
}

export default class StoragePlugin {
    static setItem: (key: any, value: any) => Promise<unknown>;
    static getItem: (key: any) => Promise<unknown>;
}

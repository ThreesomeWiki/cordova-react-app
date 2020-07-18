import { strict } from 'assert';

export default class StoragePlugin {
    static setItem = async (key, value) => {
        const storage = window.cordova ? window.NativeStorage : localStorage;
        if (window.cordova) {
            return new Promise(resolve => {
                storage.setItem(
                    key,
                    value,
                    () => {
                        resolve();
                    },
                    () => {
                        resolve();
                    }
                );
            });
        } else {
            storage.setItem(key, value);
        }
    };
    static getItem = async key => {
        const storage = window.cordova ? window.NativeStorage : localStorage;
        if (window.cordova) {
            return new Promise(resolve => {
                storage.getItem(
                    key,
                    data => resolve(data),
                    () => resolve()
                );
            });
        } else {
            storage.getItem(key);
        }
    };
}

import { resolve } from 'path';

export default class RequestPlugin {
    static request = () => {
        return new Promise(resolve => {
            if (window.cordova.plugin.http) {
                window.cordova.plugin.http.sendRequest(
                    'https://www.baidu.com',
                    { method: 'get' },
                    response => {
                        resolve(response);
                        alert(response.data);
                    },
                    response => {
                        resolve(response);
                    }
                );
            } else {
                resolve('');
            }
        });
    };
}

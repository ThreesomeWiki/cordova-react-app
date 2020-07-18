export default class GeolocationPlugin {
    static getLocation = () => {
        if (!window.navigator.geolocation) return;
        return new Promise(resolve => {
            window.navigator.geolocation.getCurrentPosition(position => {
                resolve(position);
            });
        });
    };
}

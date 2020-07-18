export default class CameraPlugin {
    static getPicture = () => {
        return new Promise((resolve, reject) => {
            if (!window.navigator.camera) return reject('非mobile 环境');
            window.navigator.camera.getPicture(
                image => {
                    resolve(image);
                },
                error => {
                    reject(error);
                },
                {
                    destinationType: 0,
                    sourceType: 1,
                }
            );
        });
    };
}

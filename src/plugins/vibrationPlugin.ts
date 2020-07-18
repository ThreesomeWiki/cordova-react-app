export default class VibrationPlugin {
    static vibrate = () => {
        navigator.vibrate && navigator.vibrate(2000);
    };
}

export default class ContactPlugin {
    static getContact = () => {
        return new Promise(resolve => {
            if (!window.navigator.contacts) return resolve({});
            navigator.contacts.pickContact(
                concate => {
                    resolve(concate);
                },
                () => {
                    resolve({});
                }
            );
        });
    };
}

export default class FilePlugin {
    static download = () => {
        return new Promise(resolve => {
            if (!window.FileTransfer) return resolve('');
            const fileTransfer = new FileTransfer();
            const uri = encodeURI('http://some.server.com/download.php');

            fileTransfer.download(
                uri,
                '',
                function (entry) {
                    alert('download complete: ' + entry.toURL());
                    resolve(entry.toURL());
                },
                function (error) {
                    resolve('');
                },
                false,
                {
                    headers: {
                        Authorization: 'Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA==',
                    },
                }
            );
        });
    };
}

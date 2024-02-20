import messaging from '@react-native-firebase/messaging';

class NotificationHelper {
    constructor() {
        console.log('Notification Helper')
    }

    getDeviceToken = async () => {
        await messaging().registerDeviceForRemoteMessages();
        let token = await messaging().getToken()
        return token
    }

}

export default new NotificationHelper()
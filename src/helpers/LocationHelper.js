import Geolocation from 'react-native-geolocation-service';
class LocationHelper {

    getCurrentLocation = (callback) => {
        Geolocation.getCurrentPosition(
            (position) => {
                callback(position)
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                showLocationDialog: true
            }
        );
    }

    watchUserLocation = (callback) => {
        Geolocation.watchPosition((position) => {
            callback(position)
        }, (err) => {
            console.log(err)
        }, {
            interval: 5000
        })
    }

}
export default new LocationHelper()
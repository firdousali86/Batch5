import analytics from '@react-native-firebase/analytics';
class AnalyticsHelper {
  constructor() {
    console.log('Analytics helper');
  }

  mapScreenEvent = async () => {
    try {
      await analytics().logEvent('basket', {
        id: 3745092,
        item: 'mens grey t-shirt',
        description: ['round neck', 'long sleeved'],
        size: 'L',
      });
      console.log('Done');
    } catch (e) {
      console.log(e);
    }
  };
}

export default new AnalyticsHelper();

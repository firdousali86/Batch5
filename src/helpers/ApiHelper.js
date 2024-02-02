import {create} from 'apisauce';

const api = create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
});
class ApiHelper {
  myobject = undefined;

  get = async (url, data, headers) => {
    try {
      const response = await api.get(url, data, {headers});
      return response;
    } catch (ex) {
      console.log(ex);
    }
  };
}

export default new ApiHelper();

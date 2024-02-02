class ApiHelper {
  myobject = undefined;

  get = async url => {
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();

      return responseJSON;
    } catch (ex) {
      console.log(ex);
    }
  };
}

export default new ApiHelper();

import axios from 'axios';

// Mocked api
const profileEndpoint = '/profile';

export default class Api {
  static saveProfile(data) {
    console.log('SAVING PROFILE WITH DATA', data);
    return Api.post(profileEndpoint, data);
  }

  static post(uri, data) {
    console.log(`SENDING TO ${uri}...`);
    return axios.post(uri, data)
      .then(response => {
        console.log('Success!', response);
        return response;
      })
      .catch(error => {
        console.error('Something went wrong', error);
        return false;
      });
  }
}

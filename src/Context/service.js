import API from './../Api/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCars: async () => {
    const { data: json } = await API.get(`carros`);
    return json;
  }
}

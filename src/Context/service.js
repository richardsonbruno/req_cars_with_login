import API from './../Api/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCars: async (year) => {
    const { data: json } = await API.get(`carros?ano=${year}`);
    return json;
  },

  loginCars: async (email, password) => {
    const { data: json } = await API.post(`auth/login`, { email, password });
    return json;
  }
}

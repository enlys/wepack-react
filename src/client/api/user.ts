import request from '../utils/request';

export default {
  login(user) {
    console.log('user-login', user);
    const userInfo = JSON.stringify(user);
    return request.axiosInstance({
      url: '/user/login',
      method: 'post',
      data: {
        username: userInfo,
        password: userInfo,
      }
    });
  },

  logout() {
    return request.axiosInstance({
      url: '/user/logout',
      method: 'post',
    });
  },
};
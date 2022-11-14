/* eslint-disable @typescript-eslint/no-non-null-assertion */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestConfig } from '..';
import { Toast } from 'antd-mobile';

axios.defaults.withCredentials = true;

class Request {
  public axiosInstance: AxiosInstance;

  constructor() {
    // 创建axios实例
    this.axiosInstance = axios.create({
      baseURL: `${document.baseURI}api/`, // api的base_url
      // timeout: 3000
    });
    // 初始化拦截器
    this.initInterceptors();
  }

  // 初始化拦截器
  public initInterceptors() {
    // 设置post请求头
    // this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    /**
     * 请求拦截器
     * 每次请求前，如果存在token则在请求头中携带token
     */
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
        config!.headers!['Content-Type'] = 'application/json';
        // 请求增加sysMark
        // if (store.state.sysMark) {
        //   config.params = {
        //     sysMark: store.state.sysMark,
        //     ...config.params,
        //   };
        // }
        return config;
      },
      (error) => {
        console.log(error);
      },
    );

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      // 请求成功
      (response) => {
        if (response.status === 200) {
          // return Promise.resolve(response.data);
          return response.data;
        } else {
          Request.errorHandle(response);
          // return Promise.reject(response.data);
          return response.data;
        }
      },
      // 请求失败
      (error) => {
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          Request.errorHandle(response);
          return Promise.reject(response.data);
        } else {
          // 处理断网的情况
          // eg:请求超时或断网时，更新state的network状态
          // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
          // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
          Toast.show({
            content: '网络连接异常,请稍后再试!',
            duration: 3000,
          });
          return Promise.reject(response.data);
        }
      });
  }


  /**
   * http握手错误
   * @param res 响应回调,根据不同响应进行不同操作
   */
  private static errorHandle(res) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        Toast.show({
          content: '请求的资源不存在',
          duration: 3000,
        });
        break;
      default:
        Toast.show({
          content: '连接错误',
          duration: 3000,
        });
    }
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, T>(config)
        .then(res => {
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })

}
}

export default new Request();
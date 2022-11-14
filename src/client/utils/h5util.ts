/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { getTraceInfo } from './native';

export default {
  /**
   * 线程休眠
   * @param ms
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * 异步方法超时
   * @param promise
   * @param ms
   * @returns {Promise<any>}
   */
  timeoutPromise(promise, ms) {
    const timeout = this.sleep(ms).then(() => ({ timeout: 1 }));
    return Promise.race([promise, timeout]);
  },
  // 获取留痕信息
  async fetchSysMarkByTime() {
    let sysMark = '';
    try {
      const { timeout, data } = await this.timeoutPromise(getTraceInfo(), 300);
      if (!timeout) {
        sysMark = data;
      }
      return sysMark;
    } catch (error) {
      return sysMark;
    }
  }
};

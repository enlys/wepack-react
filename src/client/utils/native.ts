/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-undef */
export function setNavigation(options) {
  upNativeComm.exec('Navigation.setNavigation', options);
}

export function accountLogin() {
  return new Promise((resolve, reject) => {
    upNativeComm.exec('Media.getAccountInfo', {
      needLogin: 1,
      callback: function cb(code, data) {
        const user = data ? JSON.parse(data) : {};
        if (code === 0) {
          resolve(user);
        } else {
          reject(code);
        }
      }
    });
  });
}

export function openWebView(url) {
  upNativeComm.exec('Navigation.open', {
    url,
  });
}

export function closeWebView() {
  upNativeComm.exec('Navigation.closeWebView', {});
}

export function toReportPayResult(options) {
  upNativeComm.exec('Navigation.toReportPayResult', options);
}
/**
 * 设置页面的title
 * @param title
 */
export function setWebViewTitle(title) {
  // eslint-disable-next-line func-names
  const nativecomm = function (options, funname, callback) {
    const option = options;
    const cmd = funname;
    if (callback) {
      option.callback = callback;
    }
    upNativeComm.exec(cmd, option, callback);
  };
  nativecomm({ title }, 'Navigation.setTitle', ()=> {});
}

// 获取sysMark
export function getTraceInfo() {
  return new Promise((resolve, reject) => {
    upNativeComm.exec('Navigation.getTraceInfo', {
      needLogin: 0,
      callback: function cb(code, raw) {
        if (code === 0) {
          resolve(JSON.parse(raw));
        } else {
          reject(code);
        }
      }
    });
  });
}

// 获取用户信息
export function getUserInfo() {
  return new Promise((resolve, reject) => {
    upNativeComm.exec('Media.getUserInfo', {
      callback: function cb(code, data) {
        const user = data ? JSON.parse(data) : {};
        if (code === 0) {
          resolve(user);
        } else {
          reject(code);
        }
      },
    });
  });
}

export function setTitle(title) {
  document.title = title;
  const mobile = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(mobile)) {
    const iframe = document.createElement('iframe');
    iframe.src = '/favicon.ico';
    iframe.style.display = 'none';
    const iframeCallback = function iframeCallback() {
      setTimeout(() => {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
}
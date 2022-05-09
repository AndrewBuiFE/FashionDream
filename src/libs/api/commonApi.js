const commonApi = {
  // Get app configs
  //   getConfig: params => {
  //     const url = 'https://visearch.net/remotetv/get_remote_config.php';
  //     return axiosClient.get(url, {params});
  //   },
  //   getSource: params => {
  //     const url = 'https://newsapi.org/v2/top-headlines/sources';
  //     return axiosClient.get(url, {params});
  //   },
  //   getFeeds: params => {
  //     const url = 'https://newsapi.org/v2/top-headlines';
  //     return axiosClient.get(url, {params});
  //   },
  //   // Get app notifications
  //   getNotifications: params => {
  //     const url = 'https://visearch.net/remotetv/get_app_notifications.php';
  //     return axiosClient.get(url, {params});
  //   },
  //   // Subscribe by Apple
  //   subscribeByApple: async params => {
  //     const url = 'https://visearch.net/remotetv/subscribe_by_apple.php';
  //     const data = new URLSearchParams();
  //     Object.keys(params).forEach(key => {
  //       data.append(key, params[key]);
  //     });
  //     return axiosClient.post(url, data, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });
  //   },
  //   // Subscribe by Google
  //   subscribeByGoogle: async params => {
  //     const url = 'https://visearch.net/remotetv/subscribe_by_googleplay.php';
  //     const data = new URLSearchParams();
  //     Object.keys(params).forEach(key => {
  //       data.append(key, params[key]);
  //     });
  //     return axiosClient.post(url, data, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });
  //   },
  //   // Update payment info
  //   updatePaymentInfo: async params => {
  //     const url = 'https://visearch.net/remotetv/update_payment_info.php';
  //     const data = new URLSearchParams();
  //     Object.keys(params).forEach(key => {
  //       data.append(key, params[key]);
  //     });
  //     return axiosClient.post(url, data, {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     });
  //   },
};

export default commonApi;

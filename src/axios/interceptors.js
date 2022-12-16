function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    apikey: import.meta.env.VITE_APP_API_KEY,
    plot: "full",
  });
  return config;
}

function returnData(res) {
  return res.data;
}

export default function (axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData);
}

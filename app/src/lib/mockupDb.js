const axios = require('axios');

export const getMeliAds = (success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `https://api.mercadolibre.com/sites/MLB/search?category=MLB1744`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};


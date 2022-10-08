const axios = require('axios');

export const getCep = (_cep, success, error) => {

    const configAxios = {
      method: 'get',
      timeout: 20000,
      url: `https://viacep.com.br/ws/${_cep}/json/`,
    };
  
    axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
  };
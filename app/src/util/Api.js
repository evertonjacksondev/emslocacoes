const axios = require('axios');

export const getReserva = (success, error) => {

    const configAxios = {
      method: 'get',
      timeout: 20000,
      url: "https://ironrest.herokuapp.com/ems-reserva",
    };
  
  
    axios(configAxios).then((response)=>{ success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
  }

  export const getReservaid = (_id, success, error) => {

    const configAxios = {
      method: 'get',
      timeout: 20000,
      url: `https://ironrest.herokuapp.com/ems-reserva/${_id}`,
    };

    axios(configAxios).then((response)=>{ success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
}
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

export const deleteReservaid = (_id, success, error) => {

  const configAxios = {
    method: 'delete',
    timeout: 20000,
    url: `https://ironrest.herokuapp.com/ems-reserva/${_id}`,
  };

  axios(configAxios).then((response)=>{ success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
}


export const postCreateReserva = (body, success, error) => {
  /*{
    "Category": "",
    "Brand": "",
    "Model": "Ford 2022",
    "DateOfWithdraw": "",
    "DateOfDevolution": "",
    "Price": "",
    "Plate": "",
    "Name": "",
    "ZipCode": "",
    "PhoneNumber": "",
    "Address": ""
  }*/

  const configAxios = {
    method: 'post',
    timeout: 20000,
    url: "https://ironrest.herokuapp.com/ems-reserva",
    data: body,
  };


  axios(configAxios).then((response)=>{ success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
}

export const putReservaid = (_id, body, success, error) => {
  /*{
    "Category": "",
    "Brand": "",
    "Model": "Ford 2022",
    "DateOfWithdraw": "",
    "DateOfDevolution": "",
    "Price": "",
    "Plate": "",
    "Name": "",
    "ZipCode": "",
    "PhoneNumber": "",
    "Address": ""
  }*/
  
  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `https://ironrest.herokuapp.com/ems-reserva/${_id}`,
    data: body,
  };

  axios(configAxios).then((response)=>{ success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
}
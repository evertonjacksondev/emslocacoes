const axios = require('axios');

let baseUrl = 'https://ironrest.herokuapp.com';

export const getReserva = (success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `${baseUrl}/ems-reservas`,
  };


  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const getReservaId = (_id, success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `${baseUrl}/ems-reservas/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const deleteReservaId = (_id, success, error) => {

  const configAxios = {
    method: 'delete',
    timeout: 20000,
    url: `${baseUrl}/ems-reservas/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const postCreateReserva = (body, success, error) => {
  try {

    const configAxios = {
      method: 'post',
      timeout: 20000,
      url: `${baseUrl}/ems-reservas`,
      data: body,
    };


    axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
  } catch (error) {
    error(error.response ? error.response.data : error);
  }
}

export const putReservaId = (_id, body, success, error) => {
  try {

    const configAxios = {
      method: 'put',
      timeout: 20000,
      url: `${baseUrl}/ems-reservas/${_id}`,
      data: body,
    };

    axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
  } catch (error) {
    error(error.response ? error.response.data : error);
  }
}

export const getCatalog = (success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `${baseUrl}/ems-catalog`,
  };


  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const getCatalogId = (_id, success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `${baseUrl}/ems-catalog/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const deleteCatalogId = (_id, success, error) => {

  const configAxios = {
    method: 'delete',
    timeout: 20000,
    url: `${baseUrl}/ems-catalog/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const postCreateCatalog = (body, success, error) => {
  try {

    const configAxios = {
      method: 'post',
      timeout: 20000,
      url: `${baseUrl}/ems-catalog`,
      data: body,
    };
    axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });

  } catch (error) {
    error(error.response ? error.response.data : error);
  }
};

export const putCatalogId = (_id, body, success, error) => {
  try {

    delete body._id;

    const configAxios = {
      method: 'put',
      timeout: 20000,
      url: `${baseUrl}/ems-catalog/${_id}`,
      data: body,
    };

    axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
  } catch (error) {
    error(error.response ? error.response.data : error);
  }

};



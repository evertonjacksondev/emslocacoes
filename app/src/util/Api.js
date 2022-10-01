const axios = require('axios');


export const getReserva = (success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: "https://ironrest.herokuapp.com/ems-reserva",
  };


  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const getReservaId = (_id, success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `https://ironrest.herokuapp.com/ems-reserva/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const deleteReservaId = (_id, success, error) => {

  const configAxios = {
    method: 'delete',
    timeout: 20000,
    url: `https://ironrest.herokuapp.com/ems-reserva/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const postCreateReserva = (body, success, error) => {

  try {

    if (!body.category) throw 'required Category'
    if (!body.brand) throw 'required Brand '
    if (!body.model) throw 'required Model '
    if (!body.dateOfWithdraw) throw 'required DateOfWithdraw '
    if (!body.dateOfDevolution) throw 'required DateOfDevolution '
    if (!body.price) throw 'required Price '
    if (!body.plate) throw 'required Plate '
    if (!body.name) throw 'required Name '
    if (!body.zipCode) throw 'required ZipCode '
    if (!body.phoneNumber) throw 'required PhoneNumber '
    if (!body.address) throw 'required Address'

  const configAxios = {
    method: 'post',
    timeout: 20000,
    url: "https://ironrest.herokuapp.com/ems-reserva",
    data: body,
  };


  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
} catch (error) {
  error(error.response ? error.response.data : error);
}
}

export const putReservaId = (_id, body, success, error) => {

  try {

    if (!body.category) throw 'required Category'
    if (!body.brand) throw 'required Brand '
    if (!body.model) throw 'required Model '
    if (!body.dateOfWithdraw) throw 'required DateOfWithdraw '
    if (!body.dateOfDevolution) throw 'required DateOfDevolution '
    if (!body.price) throw 'required Price '
    if (!body.plate) throw 'required Plate '
    if (!body.name) throw 'required Name '
    if (!body.zipCode) throw 'required ZipCode '
    if (!body.phoneNumber) throw 'required PhoneNumber '
    if (!body.address) throw 'required Address'

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `https://ironrest.herokuapp.com/ems-reserva/${_id}`,
    data: body,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
} catch (error){
  error(error.response ? error.response.data : error);
  }
}

export const getCatalog = (success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: "https://ironrest.herokuapp.com/ems-reserva",
  };


  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const getCatalogId = (_id, success, error) => {

  const configAxios = {
    method: 'get',
    timeout: 20000,
    url: `https://ironrest.herokuapp.com/ems-reserva/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const deleteCatalogId = (_id, success, error) => {

  const configAxios = {
    method: 'delete',
    timeout: 20000,
    url: `https://ironrest.herokuapp.com/ems-Catalog/${_id}`,
  };

  axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
};

export const postCreateCatalog = (body, success, error) => {

  try {

    if (!body.category) throw 'required Category'
    if (!body.brand) throw 'required Brand '
    if (!body.model) throw 'required Model '
    if (!body.dateOfWithdraw) throw 'required DateOfWithdraw '
    if (!body.dateOfDevolution) throw 'required DateOfDevolution '
    if (!body.price) throw 'required Price '
    if (!body.plate) throw 'required Plate '
    if (!body.name) throw 'required Name '
    if (!body.zipCode) throw 'required ZipCode '
    if (!body.phoneNumber) throw 'required PhoneNumber '
    if (!body.address) throw 'required Address'

    const configAxios = {
      method: 'post',
      timeout: 20000,
      url: "https://ironrest.herokuapp.com/ems-catalog",
      data: body,
    };
    axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });

  } catch (error) {
    error(error.response ? error.response.data : error);
  }
};

export const putCatalogId = (_id, body, success, error) => {
  try {

    if (!body.category) throw 'required Category'
    if (!body.brand) throw 'required Brand '
    if (!body.model) throw 'required Model '
    if (!body.dateOfWithdraw) throw 'required DateOfWithdraw '
    if (!body.dateOfDevolution) throw 'required DateOfDevolution '
    if (!body.price) throw 'required Price '
    if (!body.plate) throw 'required Plate '
    if (!body.name) throw 'required Name '
    if (!body.zipCode) throw 'required ZipCode '
    if (!body.phoneNumber) throw 'required PhoneNumber '
    if (!body.address) throw 'required Address'

    const configAxios = {
      method: 'get',
      timeout: 20000,
      url: `https://ironrest.herokuapp.com/ems-catalog/${_id}`,
      data: body,
    };

    axios(configAxios).then((response) => { success(response.data) }).catch((err) => { error(err.response ? err.response.data : err) });
  } catch (error) {
    error(error.response ? error.response.data : error);
  }

};
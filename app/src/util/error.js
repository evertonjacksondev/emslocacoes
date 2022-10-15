
export function handleError(error) {
  let err = Array.isArray(error.cause) ? error.cause[0].message :
    error.response ?
      error.response.data :
      error.message ? error.message : typeof error == 'string' ? error : JSON.stringify(error);


  return err


}
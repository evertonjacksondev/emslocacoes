import React, { Fragment } from 'react'
import { useSnackbar } from 'notistack';

const Home = () => {

  const { enqueueSnackbar } = useSnackbar();
  const handleClick = (type) => {
    enqueueSnackbar('I love hooks', { variant: type })
  };

  return (
    <Fragment>
      <button onClick={() => handleClick('error')}>Error</button>
      <button onClick={() => handleClick('success')}>sucesso</button>
    </Fragment>

  );
}

export default Home
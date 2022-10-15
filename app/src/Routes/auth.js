import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {
  let sessionLog = sessionStorage.getItem('userLogin')
  const user = JSON.parse(sessionLog)
  return user?.loggedIn ? user.loggedIn : false;
};

export const ProtectedRoutes = () => {

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/catalogo"></Navigate>;
};


export const login = (mail, password, handleSuccess, handleError) => {
  try {
    if (mail != 'admin@admin.com') throw handleError('Email incorreto!')
    if (password != 'admin') throw handleError('Senha incorreta!')
    sessionStorage.setItem('userLogin', JSON.stringify({ loggedIn: true }));
    return handleSuccess()


  } catch (err) {


  }

}


export const logout = () => {

  <Navigate to="/catalogo"></Navigate>;
  sessionStorage.clear()
}
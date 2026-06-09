import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Inicia Sesión y Administra tus <span className="text-black">Pacientes</span></h1>
      </div>
      <div>
        <form>
          <div className="my-5">
            <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
            <input type="email" placeholder="Email de registro" id="email" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <div className="my-5">
            <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
            <input type="password" placeholder="Email de registro" id="password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <input type="submit" value="Iniciar Sesión" className="bg-indigo-600 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto md:px-10"/>
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to="/registrar" className="block text-center my-5 text-gray-500">¿No tienes una cuenta? Registrate</Link>
          <Link to="/olvide-password" className="block text-center my-5 text-gray-500">Olvide mi password</Link>
        </nav>
      </div>
    </>
  )
}

export default Login
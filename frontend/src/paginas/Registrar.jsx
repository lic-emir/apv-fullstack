import { Link } from "react-router-dom"

const Registrar = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y administra <span className="text-black">tus pacientes.</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-5">
            <label htmlFor="nombre" className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
            <input type="email" placeholder="Tu nombre" id="nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <div className="my-5">
            <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
            <input type="email" placeholder="Email de registro" id="email" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <div className="my-5">
            <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
            <input type="password" placeholder="Tu password" id="password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <div className="my-5">
            <label htmlFor="repeat-password" className="uppercase text-gray-600 block text-xl font-bold">Repetir Password</label>
            <input type="password" placeholder="Repetir tu password" id="repeat-password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <input type="submit" value="Crear cuenta" className="bg-indigo-600 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto md:px-10"/>
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link to="/" className="block text-center my-5 text-gray-500">¿Ya tienes una cuenta? Inicia Sesión</Link>
          <Link to="/olvide-password" className="block text-center my-5 text-gray-500">Olvide mi password</Link>
        </nav>
      </div>
    </>
  )
}

export default Registrar
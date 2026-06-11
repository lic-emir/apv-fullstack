import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [passsword, setPassword] = useState('');
  const [repeatPasssword, setRepeatPassword] = useState('');
  const [alerta, setAlerta] = useState({});
  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre, email, passsword, repeatPasssword].includes('')) {
      setAlerta({msg:'Hay campos vacias', error:true});
      return;
    }
    if (passsword !== repeatPasssword) {
      setAlerta({msg:'Los password no son iguales', error:true});
      return;
    }
    if (passsword < 6) {
      setAlerta({msg:'Password corto, minimo 6 caracteres', error:true});
      return;
    }
    setAlerta({});
  }
  const {msg} = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">Crea tu cuenta y administra <span className="text-black">tus pacientes.</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta}/>}
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label htmlFor="nombre" className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
            <input type="text" placeholder="Tu nombre" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <div className="my-5">
            <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
            <input type="email" placeholder="Email de registro" id="email" value={email} onChange={e => setEmail(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <div className="my-5">
            <label htmlFor="password" className="uppercase text-gray-600 block text-xl font-bold">Password</label>
            <input type="password" placeholder="Tu password" id="password" value={passsword} onChange={e => setPassword(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
          </div>
          <div className="my-5">
            <label htmlFor="repeat-password" className="uppercase text-gray-600 block text-xl font-bold">Repetir Password</label>
            <input type="password" placeholder="Repetir tu password" id="repeat-password" value={repeatPasssword} onChange={e => setRepeatPassword(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"/>
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
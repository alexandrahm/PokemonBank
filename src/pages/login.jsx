import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import logo from './../resources/Logo.svg';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    function setUser() {
      if (!localStorage.getItem('user')) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            nombre: 'Ash Ketchum ',
            cuenta: ' 0987654321 ',
            pin: '1234',
            saldoInicial: 500.00,
            transacciones: [],
          })
        );
      }
    }

    setUser();
  }, []);

  const [input, setInput] = useState({
    pin: '',
  });

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      const loggedUser = JSON.parse(localStorage.getItem('user'));
      if (loggedUser && loggedUser.pin && input.pin.toString() === loggedUser.pin) {
        swal('Bienvenido', 'Ha ingresado correctamente', 'success');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
        localStorage.setItem('loggedin', true);
        Cookies.set('loggedin', true);
      } else {
        swal('Error', 'El PIN es incorrecto', 'error');
      }
    },
    [input, navigate]
  );

  return (
    <>
      <ToastContainer position="top-center" />
      <main className="max-w-full">
        <section className="flex flex-col items-center justify-center h-screen">
          <img src={logo} alt="Pokémon Bank Logo" height={300} width={300} style={{ height: 'auto' }} />
          <form onSubmit={handleLogin}>
            <div className="mt-20">
              <div className="my-2">
                <h1 className="text-3xl font-bold text-white">Ingrese su PIN</h1>
              </div>
              <input
                name="pin"
                value={input.pin}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-100 text-5xl font-bold border-4 border-pokeblue-light rounded-xl p-3 focus:outline-none"
                type="password"
                placeholder="PIN"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="px-20 py-4 bg-pokeorange hover:bg-pokeblue transition hover:transition  text-white font-bold rounded-full text-2xl mt-10"
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </form>
          <h1 className="text-pokeblack">(pin: 1234)</h1>
        </section>
      </main>
    </>
  );
}

export default Login;

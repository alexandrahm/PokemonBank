import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import Image from "./Image"; // import the Image component
import swal from "sweetalert"; // import the swal library

import house from "/src/resources/icons/noun-house-5026194.svg";
import deposit from "/src/resources/icons/noun-receive-money-5673855.svg";
import withdraw from "/src/resources/icons/noun-send-money-5673861.svg";
import payService from "/src/resources/icons/noun-bank-2307169.svg";
import history from "/src/resources/icons/noun-bill-notification-3820887.svg";
import logo  from "/src/resources/Logo.png";

const NavBar = () => {
  const [links, setLinks] = useState([
    {
      name: "Inicio",
      href: "/dashboard",
      icon: house,
      current: false,
    },
    {
      name: "Depositar",
      href: "/dashboard/deposit",
      icon: deposit,
      current: false,
    },
    {
      name: "Retirar",
      href: "/dashboard/withdraw",
      icon: withdraw,
      current: false,
    },
    {
      name: "Pagar Servicios",
      href: "/dashboard/payService",
      icon: payService,
      current: false,
    },
    {
      name: "Historial",
      href: "/dashboard/history",
      icon: history,
      current: false,
    },
  ]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    const url = pathname + searchParams.toString();
    const currentLink = links.find((link) => link.current);
    if (!currentLink || currentLink.href !== url) {
      const newLinks = links.map((link) => ({
        ...link,
        current: link.href === url,
      }));
      setLinks(newLinks);
    }
  }, [location]);

  const userName = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    swal({
      title: '¿Estás seguro?',
      text: '¿Deseas cerrar sesión?',
      icon: 'warning',
      buttons: ['Cancelar', 'Cerrar sesión'],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        localStorage.removeItem('loggedin');
        Cookies.remove('loggedin');
        window.location.href = '/PokeBank/';
      }
    });
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="p-6 w-full bg-red shadow duration-300">
        <div className="flex items-center justify-between">
          <Image
            className="w-25 h-20"
            src={logo}
            alt="Pokémon Bank Logo"
          />
          <ul className="flex space-x-4 text-xl">
            {links.map(({ name, href, icon, current }) => (
              <li className="rounded-sm" key={href}>
              <Link
                to={href}
                className={`nav-link p-2 rounded-sm ${current ? "nav-link-current" : "text-white"}`}
              >
                <img src={icon} alt={name} className="w-6 h-6 inline-block mr-2" />
                {name}
              </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col text-center text-pokegray font-bold">
            <button onClick={handleLogout} className="mt-4 text-xl text-white">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

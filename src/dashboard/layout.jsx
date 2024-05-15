import React from 'react';
import './../index.css';
import NavBar from '/src/components/NavBar';

function Layout({ children }) {
  return (
    <>
      <div className="flex-col lg:flex h-screen">
        <div className="w-full">
          <NavBar />
        </div>
        <div className="container mx-auto bg-white mt-5 lg:mt-0 flex-1">
          <div className="p-10 mx-2 w-full">
            {children ? children : 'No hay contenido para mostrar'}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;

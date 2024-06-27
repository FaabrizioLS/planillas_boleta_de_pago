import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import logoImage from "@/public/images/logo.png";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative">
      <div className="grid grid-cols-[minmax(30px,_2fr)_minmax(220px,_2fr)] px-8 py-4 backdrop-blur bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white font-semibold text-lg">
        <Link href="/">
          <Image src={logoImage} alt="Logo" className="w-11 h-11 mt-0" />
        </Link>
        <div className="hidden md:flex md:justify-between md:items-center text-xl font-medium">
          <Link href="/empresas/list" className="hover:text-blue-600 mr-4 md:mr-0 md:ml-2">Empresas</Link>
          <Link href="/" className="hover:text-blue-600 mr-4 md:mr-0 md:ml-2">Empleados</Link>
          <Link href="/boletas_de_pago/list" className="hover:text-blue-600 mr-4 md:mr-0 md:ml-2">Boletas de Pago</Link>
        </div>
        <button
          className="md:hidden text-2xl p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-10 transition-opacity ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed left-0 top-0 h-full bg-white z-20 p-6 transform transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-2xl mb-4 focus:outline-none"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col space-y-4">
          <Link href="/empresas/list" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Empresas</Link>
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Empleados</Link>
          <Link href="/boletas_de_pago/list" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Boletas de Pago</Link>
        </nav>
      </div>
    </section>
  );
}

export default NavigationBar;

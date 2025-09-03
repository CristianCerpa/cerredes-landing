pages/index.js
// pages/index.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png'; // reemplaza con tu logo
import { FaShoppingCart } from 'react-icons/fa'; // ícono de carrito

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header / Menú fijo */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg' : 'bg-black/60'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="CERREDES" width={50} height={50} />
            <span className="text-xl font-bold">CERREDES</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#inicio" className="hover:text-orange-500 transition">Inicio</a>
            <a href="#servicios" className="hover:text-orange-500 transition">Servicios</a>
            <a href="#productos" className="hover:text-orange-500 transition">Productos</a>
            <a href="#contacto" className="hover:text-orange-500 transition">Contacto</a>
            {/* Carrito de compras */}
            <FaShoppingCart className="ml-4 text-orange-500 text-2xl cursor-pointer hover:text-orange-600 transition" />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="text-center py-32 px-6 pt-40">
        <h1 className="text-5xl font-bold mb-4">Conectividad y redes confiables para tu empresa</h1>
        <p className="text-xl mb-6">Consultoría, instalación y venta de equipos de redes</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">
          Ver productos
        </button>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-2xl font-semibold mb-2">Conectividad</h3>
            <p>Soluciones de fibra óptica, enlaces corporativos y SD-WAN.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-2xl font-semibold mb-2">Redes</h3>
            <p>Diseño, instalación y soporte de redes LAN y WiFi.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-2xl font-semibold mb-2">Consultoría</h3>
            <p>Asesoría personalizada para optimizar tu infraestructura IT.</p>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-2xl font-semibold mb-2">Firewall XYZ</h3>
            <p className="mb-4">Protege tu red con alta seguridad.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
              Comprar
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-2xl font-semibold mb-2">Switch ABC</h3>
            <p className="mb-4">Conectividad rápida y confiable para tu oficina.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
              Comprar
            </button>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-2xl font-semibold mb-2">Access Point 123</h3>
            <p className="mb-4">WiFi de alta cobertura para todo tu espacio.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
              Comprar
            </button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="mb-6">Escríbenos y nos pondremos en contacto contigo</p>
        <form className="flex flex-col max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="p-3 rounded bg-gray-900 text-white border border-gray-700" />
          <input type="email" placeholder="Correo" className="p-3 rounded bg-gray-900 text-white border border-gray-700" />
          <textarea placeholder="Mensaje" className="p-3 rounded bg-gray-900 text-white border border-gray-700"></textarea>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-700">
        <p>CERREDES © 2025 | contacto@cerredes.cl | +56 9 1234 5678</p>
      </footer>
    </div>
  );
}

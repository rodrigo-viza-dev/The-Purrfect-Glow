'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Heart, ShieldCheck, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-cream-dark/80 backdrop-blur-md border-t border-brand-brown/10 text-brand-brown mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand & Logo Column */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative w-12 h-12">
                <Image
                  src="/PurrfectGlowGatoLogo.png"
                  alt="The Purrfect Glow"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-baloo font-bold text-xl tracking-tight text-brand-brown-dark">
                The Purrfect Glow
              </span>
            </Link>
            <p className="text-sm text-brand-brown-dark/80 leading-relaxed font-medium">
              Tu portal favorito de K-Beauty y cuidado de la piel coreano. Productos 100% auténticos para hacer brillar tu piel.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/80 hover:bg-white rounded-full border border-brand-brown/10 hover:border-brand-brown/35 text-brand-brown transition-all shadow-soft"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:soporte@the-purrfect-glow.com"
                className="p-2 bg-white/80 hover:bg-white rounded-full border border-brand-brown/10 hover:border-brand-brown/35 text-brand-brown transition-all shadow-soft"
                aria-label="Correo"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="font-baloo font-bold text-lg text-brand-brown-dark">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link href="/" className="hover:text-brand-brown-dark transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-brand-brown-dark transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/favoritos" className="hover:text-brand-brown-dark transition-colors">
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages Column */}
          <div className="space-y-4">
            <h3 className="font-baloo font-bold text-lg text-brand-brown-dark">
              Legal y Seguridad
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <Link 
                  href="/politica-de-privacidad" 
                  className="hover:text-brand-brown-dark transition-colors flex items-center gap-2 group text-brand-brown font-bold"
                >
                  <ShieldCheck className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                  <span>Política de Privacidad</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/terminos-de-servicio" 
                  className="hover:text-brand-brown-dark transition-colors flex items-center gap-2 group text-brand-brown font-bold"
                >
                  <BookOpen className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                  <span>Términos de Servicio</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Help Column */}
          <div className="space-y-4">
            <h3 className="font-baloo font-bold text-lg text-brand-brown-dark">
              Soporte
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-brand-brown/75 shrink-0" />
                <span className="break-all">soporte@the-purrfect-glow.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-brand-brown/75 shrink-0" />
                <span>+51 999 888 777</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-brand-brown/75 shrink-0" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-brand-brown/10 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-brand-brown-dark/70">
          <p>
            © {new Date().getFullYear()} The Purrfect Glow. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" /> para amantes del K-Beauty
          </p>
        </div>
      </div>
    </footer>
  );
}

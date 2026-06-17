import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, BookOpen, Scale, FileText, ArrowLeft, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos de Servicio | The Purrfect Glow',
  description: 'Términos de Servicio y condiciones de uso de la tienda online The Purrfect Glow.',
};

export default function TerminosServicioPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-brand-cream/40">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-brown-dark transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="bg-white/80 backdrop-blur-md border border-brand-brown/10 rounded-3xl p-8 sm:p-12 shadow-soft-lg mb-8 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/30 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="p-4 bg-brand-yellow/20 rounded-2xl mb-4 text-brand-brown-dark">
              <Scale className="w-10 h-10" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-baloo font-bold text-brand-brown mb-4">
              Términos de Servicio
            </h1>
            <p className="text-brand-brown-dark/80 max-w-2xl text-lg font-medium leading-relaxed">
              Condiciones de uso y regulaciones para los usuarios de nuestra tienda online The Purrfect Glow.
            </p>
            <div className="mt-4 text-xs font-semibold text-brand-brown/60 bg-brand-cream-dark px-3 py-1 rounded-full border border-brand-brown/5">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/60 backdrop-blur-sm border border-brand-brown/5 rounded-2xl p-6 flex items-start gap-4">
            <div className="p-2 bg-pastel-blue/30 text-brand-brown-dark rounded-xl shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-baloo font-bold text-brand-brown mb-1 text-base">Uso Aceptable</h3>
              <p className="text-sm text-brand-brown-dark/70">
                Al usar nuestro sitio, aceptas cumplir con todas las leyes aplicables en Perú y nuestras pautas.
              </p>
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm border border-brand-brown/5 rounded-2xl p-6 flex items-start gap-4">
            <div className="p-2 bg-pastel-pink/30 text-brand-brown-dark rounded-xl shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-baloo font-bold text-brand-brown mb-1 text-base">Cuentas</h3>
              <p className="text-sm text-brand-brown-dark/70">
                Eres responsable de mantener la seguridad y confidencialidad de tu cuenta de usuario.
              </p>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-brand-brown/5 rounded-2xl p-6 flex items-start gap-4">
            <div className="p-2 bg-pastel-green/30 text-brand-brown-dark rounded-xl shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-baloo font-bold text-brand-brown mb-1 text-base">Compras</h3>
              <p className="text-sm text-brand-brown-dark/70">
                Al realizar un pedido, garantizas que los datos de pago y de envío ingresados son válidos.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Content Card */}
        <div className="bg-white/90 backdrop-blur-md border border-brand-brown/10 rounded-4xl p-8 sm:p-12 shadow-soft space-y-8 text-brand-brown-dark/95">
          
          <section className="border-b border-brand-brown/10 pb-6">
            <h2 className="text-xl sm:text-2xl font-baloo font-bold text-brand-brown mb-3">
              1. Aceptación de los Términos
            </h2>
            <p className="leading-relaxed text-sm">
              Al acceder y utilizar el sitio web de The Purrfect Glow (https://the-purrfect-glow.vercel.app/), aceptas estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.
            </p>
          </section>

          <section className="border-b border-brand-brown/10 pb-6">
            <h2 className="text-xl sm:text-2xl font-baloo font-bold text-brand-brown mb-3">
              2. Registro de Cuentas y Seguridad
            </h2>
            <p className="leading-relaxed text-sm">
              Para realizar ciertas compras o acceder a secciones exclusivas (como tus productos favoritos), es posible que necesites crear una cuenta a través de nuestro inicio de sesión con Google OAuth. Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de todas las actividades que ocurran bajo tu cuenta.
            </p>
          </section>

          <section className="border-b border-brand-brown/10 pb-6">
            <h2 className="text-xl sm:text-2xl font-baloo font-bold text-brand-brown mb-3">
              3. Productos, Precios y Pagos
            </h2>
            <p className="leading-relaxed text-sm">
              Todos los productos mostrados en la tienda están sujetos a disponibilidad de stock. Nos reservamos el derecho de modificar los precios o descontinuar productos en cualquier momento sin previo aviso. Los pagos son procesados de forma segura mediante nuestra pasarela de pagos integrada.
            </p>
          </section>

          <section className="border-b border-brand-brown/10 pb-6">
            <h2 className="text-xl sm:text-2xl font-baloo font-bold text-brand-brown mb-3">
              4. Envíos y Entregas
            </h2>
            <p className="leading-relaxed text-sm">
              Realizamos envíos en Lima y otras regiones de Perú según lo especificado en la sección de compra. Las fechas de entrega estimadas son referenciales y pueden variar debido a factores externos del transportista o cobertura del servicio.
            </p>
          </section>

          <section className="border-b border-brand-brown/10 pb-6">
            <h2 className="text-xl sm:text-2xl font-baloo font-bold text-brand-brown mb-3">
              5. Limitación de Responsabilidad
            </h2>
            <p className="leading-relaxed text-sm">
              En ningún caso The Purrfect Glow o sus proveedores serán responsables de ningún daño directo, indirecto, incidental o consecuente que surja del uso o de la imposibilidad de usar los materiales o servicios del sitio, incluso si hemos sido notificados verbalmente o por escrito de la posibilidad de tales daños.
            </p>
          </section>

          <section className="border-b border-brand-brown/10 pb-6">
            <h2 className="text-xl sm:text-2xl font-baloo font-bold text-brand-brown mb-3">
              6. Ley Aplicable
            </h2>
            <p className="leading-relaxed text-sm">
              Cualquier reclamo relacionado con el sitio web de The Purrfect Glow se regirá e interpretará de conformidad con las leyes vigentes de Perú, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Aceptas someterte a la jurisdicción exclusiva de los tribunales correspondientes.
            </p>
          </section>

          <section className="pb-2">
            <h2 className="text-xl sm:text-2xl font-baloo font-bold text-brand-brown mb-3">
              7. Soporte y Contacto
            </h2>
            <p className="leading-relaxed text-sm">
              Si tienes preguntas sobre nuestros Términos de Servicio, puedes contactarnos:
            </p>
            <div className="mt-4 p-4 bg-brand-cream/60 rounded-2xl border border-brand-brown/10 inline-block font-semibold">
              <p>Teléfono de soporte: <span className="text-brand-orange">959619405</span></p>
              <p>Email: <span className="text-brand-orange">soporte@the-purrfect-glow.com</span></p>
              <p>Sitio Web: <Link href="/" className="underline text-brand-brown hover:text-brand-brown-dark">https://the-purrfect-glow.vercel.app</Link></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

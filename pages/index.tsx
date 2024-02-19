import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Home() {

  return (
    <>
      <Head>
        <title>Café Delicia</title>
        <meta name="description" content="Café Delicia - El secreto de un café rico es tomárselo entre amigos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logos/logo-white.png" />
      </Head>
      <Navbar />

        {/* Sección 1: Hero */}
          <div className="relative h-screen">
            <img
              src="/backgrounds/hero-background.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center', filter: 'brightness(45%)' }} // Ajusta el valor según sea necesario
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white invisible md:visible lg:visible" style={{ width: '50vw' }}>
                <h1 className="text-3xl md:text-3xl lg:text-4xl mb-4">Disfrutá del sabor auténtico en</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-customOrange"><span className='font-bold'>Café </span><span className='special-word'>Delicia</span></h2>
                <p className="text-base md:text-lg lg:text-xl mt-4">Café Delicia es una experiencia única con café de alta calidad y un ambiente acogedor para todos. ¡Vení y disfrutá de un momento de delicia con nosotros!</p>
              </div>
            </div>
          </div>

        {/* Sección 2: Café Delicia */}
          <div className="bg-customBeige text-white pt-52 pb-24">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full md:w-1/2 px-20 flex justify-center">
                <div className="flex flex-col justify-center items-center -space-y-96 ml-20"> {/* Reducimos el espacio vertical entre las imágenes */}
                  <img
                    src="/backgrounds/locally-sourced.jpg"
                    alt="Taza de café"
                    className="w-80 rounded-xl h-auto object-cover mr-60 transform -rotate-12"
                  />
                  <img
                    src="/backgrounds/product-3.jpg"
                    alt="Burrito"
                    className="w-80 rounded-xl h-auto object-cover ml-60 transform rotate-12"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 px-6 mr-32">
                <h2 className="text-3xl font-bold text-black mb-8">SOMOS CAFE DELICIA</h2>
                <p className="text-lg text-black leading-relaxed">
                  Una marca caleña y comprometida con ofrecerte una experiencia auténtica y
                  acogedora. Calidosos, auténticos y amables en todo lo que hacemos.
                  Buscamos crear momentos de verdadera delicia para todos con nuestra selección de cafés locales de primera y platos para calmar el hambre. Nuestro enfoque cálido y amistoso refleja nuestro compromiso con tu satisfacción y el bienestar de los caleños.
                </p>
              </div>
            </div>
          </div>

        {/* Sección 3: Origen Local y Enfoque Histórico */}
          <div className="bg-customBeige text-white py-32">
            <div className="flex flex-wrap items-start justify-center gap-28">
              {/* Sección de Origen Local */}
              <div className="px-4 md:px-0 flex items-start" style={{ width: '33vw' }}>
                <div className="p-6 rounded-xl flex items-center space-x-6">
                  <img
                    src="/icons/locally-sourced.png"
                    alt="Icono de mapa"
                    className="w-24 h-auto"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl text-customOrange font-bold mb-2">Origen Local</h3>
                    <p className="text-sm md:text-sm text-black leading-relaxed">
                      Priorizamos los productos locales,
                      colaborando estrechamente con agricultores
                      del país para garantizar la frescura y calidad
                      en cada taza.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección de Enfoque Histórico */}
              <div className="px-4 md:px-0 flex items-start" style={{ width: '33vw' }}>
                <div className="p-6 rounded-xl flex items-center space-x-6">
                  <img
                    src="/icons/hollistic.png"
                    alt="Icono de mano"
                    className="w-24 h-auto"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl text-customOrange font-bold mb-2">Enfoque Histórico</h3>
                    <p className="text-sm md:text-sm text-black leading-relaxed">
                      Consideramos cada aspecto del proceso de
                      producción con cuidado y respeto hacia la
                      naturaleza, promoviendo prácticas
                      sostenibles en cada etapa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Sección 4: Nuestros Servicios */}
          <h2 className="text-center text-3xl font-bold pb-8 bg-customBeige">Nuestros servicios</h2>
          <div className="flex justify-center items-center mx-auto bg-customBeige pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="rounded-xl p-6 flex flex-col items-center" style={{ width: '25vw' }}>
                <img src="/backgrounds/product-1.jpg" alt="Cafetería especializada" className="w-60 h-60 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Cafetería especializada</h3>
                <p className="text-sm text-gray-600 text-center">Probá nuestra panadería fresca y emparejala con una bebidita caliente</p>
              </div>
              {/* Card 2 */}
              <div className="rounded-xl p-6 flex flex-col items-center" style={{ width: '25vw' }}>
                <img src="/backgrounds/product-2.jpg" alt="Refrescos" className="w-60 h-60 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2">¿Tenés calor?</h3>
                <p className="text-sm text-gray-600 text-center">Refrescate con nuestra línea de productos heladitos</p>
              </div>
              {/* Card 3 */}
              <div className="rounded-xl p-6 flex flex-col items-center" style={{ width: '25vw' }}>
                <img src="/backgrounds/product-3.jpg" alt="Bistro pa’ esa hambre" className="w-60 h-60 object-cover rounded-xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Bistro pa’ esa hambre</h3>
                <p className="text-sm text-gray-600 text-center">A cualquier hora del día, tenemos antojitos que te dan energía para seguir el día</p>
              </div>
            </div>
          </div>

        {/* Sección 5: Testimonial */}
          <div className="relative h-screen">
            <img
              src="/backgrounds/testimonial.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center', filter: 'brightness(45%)' }} // Ajusta el valor según sea necesario
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center text-white invisible md:visible lg:visible" style={{ width: '50vw' }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-customBeige">En Café Delicia, tomamos la vida con calma. Servimos con cuidado, sabores únicos y todo lo necesario para tu taza de cada día.</h2>
              </div>
            </div>
          </div>

        {/* Sección 6: Contacto */}
          <div className="bg-customBeige text-black py-32">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-1/2 px-6 md:px-0 flex justify-center mb-8 md:mb-0">
                <img
                  src="/backgrounds/contact-1.jpg"
                  alt="Ubicación"
                  className="w-80 h-auto object-cover transform -rotate-6 rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2 px-6 md:px-0">
                <h2 className="text-5xl font-bold mb-4 text-center md:text-left">¡Caénos!</h2>
                <p className="text-base text-black leading-relaxed text-center md:text-left mb-8">
                  Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="w-52 bg-customBeige text-customBrown font-bold py-2 px-4 rounded-full border border-customBrown hover:bg-customBrown hover:text-customBeige hover:bg-opacity-75 transition duration-300">
                    <a href="/contact">¡Contactanos!</a>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-6 md:px-0 flex justify-center mt-8 md:mt-0">
                <img
                  src="/backgrounds/contact-2.jpg"
                  alt="Ubicación"
                  className="w-80 h-auto object-cover transform rotate-6 rounded-xl"
                />
              </div>
            </div>
          </div>

        <Footer />
    </>
  );
}

export default Home;

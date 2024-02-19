import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faComment } from '@fortawesome/free-solid-svg-icons';
import PageTransition from '@/components/PageTransition';

function Contact() {
    return (
        <>
            <Head>
                <title>Café Delicia</title>
                <meta name="description" content="Café Delicia - El secreto de un café rico es tomárselo entre amigos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logos/logo-white.png" />
            </Head>
            <Navbar />

            <PageTransition>
                <div className="flex justify-center items-center bg-customBeige py-32">
                    {/* Formulario */}
                    <div className="flex w-9/12">

                        <div className='mr-32 w-5/12'>
                            <h2 className="text-5xl font-bold text-start mb-8">¿Querés <br /> hablar?</h2>
                            <form action="/api/send-email" method="post" className="max-w-md mx-auto">
                                <div className="mb-4 relative">
                                    <FontAwesomeIcon icon={faUser} className="absolute text-customBrown left-3 top-1/2 transform -translate-y-1/2 w-4" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full pl-10 px-3 py-2 bg-customBeige border border-customBrown rounded-md focus:outline-none focus:border-customOrange"
                                        placeholder="Nombre"
                                        required
                                    />
                                </div>

                                <div className="mb-4 relative">
                                    <FontAwesomeIcon icon={faEnvelope} className="absolute text-customBrown left-3 top-1/2 transform -translate-y-1/2 w-4" />
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-full pl-10 px-3 py-2 text-black bg-customBeige border border-customBrown rounded-md focus:outline-none focus:border-customOrange"
                                        placeholder="Correo electrónico"
                                        required
                                    />
                                </div>

                                <div className="mb-4 relative">
                                    <FontAwesomeIcon icon={faPhone} className="absolute text-customBrown left-3 top-1/2 transform -translate-y-1/2 w-4" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full pl-10 px-3 py-2 bg-customBeige border border-customBrown rounded-md focus:outline-none focus:border-customOrange"
                                        placeholder="Teléfono"
                                        required
                                    />
                                </div>

                                <div className="mb-4 relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full pl-10 px-3 py-2 bg-customBeige border border-customBrown rounded-md focus:outline-none focus:border-customOrange"
                                        placeholder="Mensaje"
                                        required
                                    ></textarea>
                                    <FontAwesomeIcon icon={faComment} className="absolute text-customBrown left-3 top-3 w-4" />
                                </div>


                                <div className='flex justify-center'>
                                    <button className="w-40 bg-customBeige text-customBrown font-bold py-2 px-4 rounded-full border border-customBrown hover:bg-customDarkestBrown hover:text-customBeige hover:bg-opacity-75 transition duration-300">
                                        ¡Hablanos!
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Mapa de Google */}
                        <div className="w-3/6">
                            <iframe
                                className="w-full h-full border border-customBrown rounded-2xl shadow-xl"
                                title="Ubicación de Café Delicia"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.864365660227!2d-76.5365904!3d3.4595595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a66e6c417a7b%3A0xfe334df4e30fde48!2sAv.%209%20Nte.%20%2312%20Norte-2%20a%2012%20Norte-98!5e0!3m2!1ses!2sco!4v1645826701734!5m2!1ses!2sco"
                                loading="lazy"
                            ></iframe>
                        </div>

                    </div>
                </div>



                <Footer />
            </PageTransition>
        </>
    )
}

export default Contact;

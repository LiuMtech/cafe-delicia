import React from 'react'

function Footer() {
    return (
        <footer className="bg-customDarkestBrown py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Primera columna */}
                <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 ml-36 space-y-3">
                    <span className="flex items-center">
                        <img src="/logos/logo-white.png" alt="Cafe Delicia" style={{ width: '105px', height: '105px' }} className="mr-2" />
                        <span className="pl-2 text-4xl font-bold text-white"><span className='font-bold'>Café </span><span className='italic'>Delicia</span></span>
                    </span>
                    <div className="text-container" style={{width: '400px'}}>
                        <p className="text-white text-3xl">
                            El secreto de un café <br/>
                            rico es tomárselo entre <br/>
                            <span className="special-word">amigos</span>.
                        </p>
                    </div>

                </div>
                {/* Segunda columna */}
                <div className="flex flex-col md:flex-row mr-36">
                    <ul className="mr-8 text-white space-y-2 ">
                        <li className=' hover:text-customOrange transition duration-200'>Nosotros</li>
                        <li className=' hover:text-customOrange transition duration-200'>Café</li>
                        <li className=' hover:text-customOrange transition duration-200'>Panadería</li>
                        <li className=' hover:text-customOrange transition duration-200'>Bistro</li>
                        <li className=' hover:text-customOrange transition duration-200'>Testimonios</li>
                        <li className=' hover:text-customOrange transition duration-200'>Historia</li>
                        <li className=' hover:text-customOrange transition duration-200'>Contacto</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
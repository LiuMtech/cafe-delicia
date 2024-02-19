module.exports = {
  mode: 'jit', // Utilizar el modo JIT para una compilación más rápida y eficiente
  purge: {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  }, // Configurar PurgeCSS para eliminar estilos no utilizados en producción
  theme: {
    extend: {
      colors: {
        customBeige: '#FFF4E5',
        customOrange: '#EE8E11',
        customBrown: '#5F3907',
        customDarkestBrown: '#301C03',
        // Puedes agregar más colores personalizados según tus necesidades
      },      
    }, // Extender el tema predeterminado de Tailwind CSS si es necesario
  },
  plugins: [], // No hay plugins adicionales por ahora, pero puedes agregarlos si lo necesitas
};

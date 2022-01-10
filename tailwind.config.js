tailwind.config = {
  theme: {
    extend: {
      colors: {
        green: '#04C35C',
        purplelight: '#2B6CB0',
        white: '#ffffff',
        'white-200': '#F7FAFC',
        gray: '#1A202C',
        border: '#e8e8e8'
      }
    },
    fontFamily: {
      title: ['Merriweather', 'sans-serif'],
      body: ['Lato', 'sans-serif']
    },
    screens: {
      mm: '0',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  }
}

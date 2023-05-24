/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'default-black' : '#121229',
        'intro-home-btn' : '#7371ff',
        'intro-home-btn-hovered' : '#8b89f097',
        'home-page' : '#f7f7fc',
        'filter-border-color' : '#dcddeb', 
        'purple' : '#4a3aff',
        'signed-in-black' : '#211f54',
        'dropdown-toggle' : '#615e83',
        'placeholder-black' : '#333',
        'btn-bg-grey' : '#f2f1ff',
        'posts-description' : '#6e7191',
        'border' : '#e5e5ef'
      },
      keyframes : {
        'yInfinite' : {
          '0%, 100%' : {transform : 'translateY(8px)'},
          '50%' : {transform : 'translateY(0)'}
        },
        'yInfinite-1' : {
          '0%, 100%' : {transform : 'translateY(-8px)'},
          '50%' : {transform : 'translateY(0)'}
        }
      },
      animation : {
        'yInfinite' : 'yInfinite 1.5s ease infinite ',
        'yInfinite-1' : 'yInfinite-1 1.5s ease infinite'
      }
    },
  },
  plugins: [],
}
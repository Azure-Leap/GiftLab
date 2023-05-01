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
    borderRadius : {
      '20px' : '1.25rem'
    },
    extend: {
    
      colors : {
        'home-page' : '#f7f7fc',
        'filter-border-color' : '#dcddeb', 
        'purple' : '#4a3aff',
        'signed-in-black' : '#211f54',
        'dropdown-toggle' : '#615e83',
        'placeholder-black' : '#333',
        'btn-bg-grey' : '#f2f1ff',
        'posts-description' : '#6e7191',
        'border' : '#e5e5ef'
      }
    },
  },
  plugins: [],
}
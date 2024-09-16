import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        bona_nova: ['Bona Nova', 'serif'],
        nanum_gothic: ['Nanum Gothic Coding', 'monospace'],
        junge_regular: ['Junge Regular', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        pastel: {
          primary: '#8caaee',
          secondary: '#FFC49B',
          accent: '#D1495B',
          neutral: '#232634',
          'base-100': '#303446',
          info: '#85c1dc',
          success: '#a6d189',
          warning: '#e5c890',
          error: '#e78284',
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;

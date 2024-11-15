import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/e-plantShopping/', // Ensure this matches your GitHub repository name
  plugins: [react()],
  server: {
    hot: true, // Ensure hot module replacement is enabled
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // main: './react/src/main.jsx'
        main: resolve(__dirname, 'index.html'),
        deals: resolve(__dirname, 'deals.html'),
        login: resolve(__dirname, 'login.html'),
        orders: resolve(__dirname, 'orders.html'),
        shopping_cart: resolve(__dirname, 'shopping_cart.html'),
      }
    },
  }
})

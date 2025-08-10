import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CSB_HOST = 'localhost'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [CSB_HOST, '.csb.app', 'localhost']
  }
})

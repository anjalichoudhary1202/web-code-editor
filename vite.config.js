import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration to resolve Codemirror files
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'codemirror',
      'codemirror/lib/codemirror.css',
      'codemirror/theme/material.css',
      'codemirror/mode/xml/xml',
      'codemirror/mode/javascript/javascript',
      'codemirror/mode/css/css',
      'codemirror/addon/edit/closebrackets',
      'codemirror/addon/edit/closetag',
      'codemirror/addon/comment/comment',
    ],
  },
})

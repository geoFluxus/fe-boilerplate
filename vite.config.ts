import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import browserslistToEsbuild from 'browserslist-to-esbuild'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: browserslistToEsbuild(['>0.2%', 'not dead', 'not op_mini all']),
  },
  //@ts-expect-errorts
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts'
  }
})

import { defineApplicationConfig } from '@vben/vite-config';

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/renderers',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
    },
    server: {
      proxy: {
        '/sys-api': {
          target: 'http://localhost:9100',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/sys-api`), ''),
          // only https
          // secure: false
        },
        '/fms-api': {
          target: 'http://localhost:9102',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/fms-api`), ''),
        },
        '/mms-api': {
          target: 'http://localhost:9104',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/mms-api`), ''),
        },
        '/tkLive-api': {
          target: 'http://localhost:9220',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/tkLive-api`), ''),
        },

      },
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
    },
  },
});

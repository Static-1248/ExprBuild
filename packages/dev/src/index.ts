import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import type { Expression } from '@exprbuild/core'

interface DesmosPreviewOptions {
  /** 是否启用实时重载 */
  liveReload?: boolean
  /** 自定义Desmos计算器容器ID */
  containerId?: string
}

export default function desmosPreview(options: DesmosPreviewOptions = {}): Plugin {
  return {
    name: 'vite-plugin-desmos-preview',
    enforce: 'post',
    
    config(config) {
      // 确保基础HTML结构存在
      if (!config.build?.rollupOptions?.input) {
        config.build = config.build || {}
        config.build.rollupOptions = {
          input: 'index.html'
        }
      }
      return config
    },

    transformIndexHtml(html): string {
      // 注入Desmos API脚本和初始化代码
      return html.replace(
        '</head>',
        `\n<script src="https://www.desmos.com/api/v1.8.0/calculator.js"></script>
        <script>
          document.addEventListener('DOMContentLoaded', () => {
            const calculator = Desmos.Calculator(document.getElementById('${options.containerId || 'calculator'}'));
            window.__DESMOS_CALCULATOR__ = calculator;
          });
        </script>
        </head>`
      )
    }
  }
}
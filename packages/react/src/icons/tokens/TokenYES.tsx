import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenYES = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-.377 0A6.909 6.909 0 1 0 5.09 12a6.909 6.909 0 0 0 13.818 0"
          />
          <path
            fill="currentColor"
            d="M15.12 7.281c.578.322.883.729.908 1.23a1.4 1.4 0 0 0-1.08.399q-.297.285-1.457 1.457a1 1 0 0 0-.236-.231L11.992 8.88l1.024-1.007c.271-.255.601-.438.96-.532.37-.119.765-.14 1.145-.06m-6.798 2.25A1.4 1.4 0 0 1 7.95 8.5q-.776.064-1.213.912c-.095.542-.008 1.1.249 1.586q.2.386.63.81c.437.429.754.874 1.213 1.329a1.96 1.96 0 0 1 .6 1.564c-.013.686.025 1.114.055 1.294a2.74 2.74 0 0 0 1.115 1.654l.338.086c.142.039.253.056.339.06q.473.001.857-.3.038-.03.017-.043c-.3-.321-.578-.685-.578-1.093v-3.5c0-.292.227-.614.437-.96l-1.509-1.53c-.257.312-.544.42-.874.32-.15-.042-.317-.158-.514-.35l-.789-.802z"
          />
          <path
            fill="currentColor"
            d="M13.256 10.136 11.992 8.88l-.258-.266c-.385-.407-.814-.848-1.234-1.08a2.572 2.572 0 0 0-3.763 1.877q.437-.848 1.213-.912c.437-.005.802.128 1.093.41q.295.284 1.341 1.338l.116.116 1.509 1.53q.371.308.531.745c.154.48.146 1.025.133 1.543v.429c0 .926-.004 1.513-.013 1.77a1.55 1.55 0 0 1-.441 1.054.12.12 0 0 1-.069.017c.013.009.009.022-.021.043a1.33 1.33 0 0 1-.857.3 1.4 1.4 0 0 1-.335-.06l-.338-.086a2.58 2.58 0 0 0 4.041-1.268c.15-.463.137-.99.129-1.487l-.009-.279q-.007-.525.017-.686.08-.525.429-.93.18-.21.386-.415l.257-.253c.403-.382.835-.793 1.084-1.196a2.55 2.55 0 0 0-1.809-3.857q.863.489.909 1.234.002.61-.394 1.046a15 15 0 0 1-.789.801c-.24.236-.386.378-.75.348a.8.8 0 0 1-.608-.343 1 1 0 0 0-.236-.227"
          />
        </>
      ) : (
        <>
          <path
            fill="#4AE5CF"
            d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-.377 0a6.909 6.909 0 1 0-13.817 0 6.909 6.909 0 0 0 13.817 0"
          />
          <path
            fill="#0765C7"
            d="M15.12 7.281c.578.322.883.729.908 1.23a1.4 1.4 0 0 0-1.08.399q-.297.285-1.457 1.457a1 1 0 0 0-.236-.231L11.992 8.88l1.024-1.007c.271-.255.601-.438.96-.532.37-.119.765-.14 1.145-.06"
          />
          <path
            fill="url(#YES__a)"
            d="M8.323 9.531A1.4 1.4 0 0 1 7.95 8.5q-.777.064-1.213.912c-.096.542-.008 1.1.248 1.586q.2.386.63.81c.438.429.755.874 1.213 1.329a1.96 1.96 0 0 1 .6 1.564c-.013.686.026 1.114.056 1.294.15.672.548 1.262 1.114 1.654l.339.086c.141.039.253.056.338.06.317 0 .6-.098.857-.3q.037-.03.018-.043c-.3-.321-.579-.685-.579-1.093v-3.5c0-.292.227-.614.437-.96l-1.508-1.53c-.258.312-.545.42-.875.32-.15-.042-.317-.158-.514-.35l-.788-.802z"
          />
          <path
            fill="url(#YES__b)"
            d="M13.256 10.136 11.992 8.88l-.258-.266c-.385-.407-.814-.848-1.234-1.08a2.572 2.572 0 0 0-3.763 1.877q.437-.848 1.213-.912c.437-.005.802.128 1.093.41q.295.284 1.341 1.338l.116.116 1.509 1.53q.371.308.531.745c.154.48.146 1.025.133 1.543v.429c0 .926-.004 1.513-.013 1.77a1.55 1.55 0 0 1-.441 1.054.12.12 0 0 1-.069.017c.013.009.009.022-.021.043a1.33 1.33 0 0 1-.857.3 1.4 1.4 0 0 1-.335-.06l-.338-.086a2.58 2.58 0 0 0 4.041-1.268c.15-.463.137-.99.129-1.487l-.009-.279q-.007-.525.017-.686.08-.525.429-.93.18-.21.386-.415l.257-.253c.403-.382.835-.793 1.084-1.196a2.55 2.55 0 0 0-1.809-3.857q.863.489.909 1.234.002.61-.394 1.046a15 15 0 0 1-.789.801c-.24.236-.386.378-.75.348a.8.8 0 0 1-.608-.343 1 1 0 0 0-.236-.227"
          />
          <defs>
            <linearGradient
              id="YES__a"
              x1="9.428"
              x2="9.428"
              y1="8.499"
              y2="17.794"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#086BC8" />
              <stop offset="1" stopColor="#44FFE0" />
            </linearGradient>
            <linearGradient
              id="YES__b"
              x1="12.017"
              x2="12.017"
              y1="7.226"
              y2="18.189"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#45FFE1" />
              <stop offset="1" stopColor="#0159C4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenYES.displayName = 'YES'

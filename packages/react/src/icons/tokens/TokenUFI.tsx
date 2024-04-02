import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenUFI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.664 5.55 6.79 7.414L8.37 6.172l-.33.223 8.169 6.857L6.952 7.35c-.09.094-.172.189-.258.292l9.31 5.931L5.893 8.86c-.06.111-.112.223-.168.343l10.114 4.714-10.564-3.33-.069.377L15.73 14.28 5.143 12.42l.034.39 10.483 1.852-10.166-.446c.043.129.095.261.146.386l10.003.441-9.33.814.257.36 9.107-.797-8.143 1.809c.13.103.258.206.386.3l7.843-1.736-6.686 2.434c.172.078.343.15.523.215l6.292-2.289-5.045 2.627q.334.051.673.077l4.543-2.365-3.343 2.344c.3-.03.592-.086.879-.15l2.687-1.886-1.714 1.573c.51-.206.985-.471 1.423-.784l.548-.506-.193.232a6.85 6.85 0 0 0 2.229-7.243l-.086 1.993-.253-2.906a6 6 0 0 0-.454-.836l.33 3.771L17.07 7.39a8 8 0 0 0-.497-.497l1.17 5.288L15.54 6.13a6 6 0 0 0-.505-.279l2.348 6.459-3.604-6.935a10 10 0 0 0-.489-.11l3.755 7.22-5.14-7.34q-.225.001-.45.02l5.28 7.543-6.676-7.285a6 6 0 0 0-.395.128"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#UFI__a)"
            d="m9.664 5.55 6.789 7.414L8.37 6.172l-.33.223 8.168 6.857L6.951 7.35c-.09.094-.171.189-.257.292l9.309 5.931L5.893 8.86c-.06.111-.112.223-.168.343l10.115 4.714-10.565-3.33-.068.377 10.521 3.317-10.585-1.86.034.39 10.483 1.852-10.166-.446c.043.129.094.261.146.386l10.003.441-9.33.814.257.36 9.107-.797-8.143 1.809c.129.103.257.206.386.3l7.843-1.736-6.686 2.434q.255.117.523.215l6.291-2.289-5.044 2.627q.333.051.673.077l4.543-2.365-3.343 2.344c.3-.03.591-.086.878-.15l2.687-1.886-1.714 1.573c.51-.206.986-.471 1.423-.784l.549-.506-.193.232a6.85 6.85 0 0 0 2.228-7.243l-.085 1.993-.253-2.906a6 6 0 0 0-.455-.836l.33 3.771L17.07 7.39a8 8 0 0 0-.497-.497l1.17 5.288L15.54 6.13a6 6 0 0 0-.506-.279l2.349 6.459-3.605-6.935a10 10 0 0 0-.488-.11l3.754 7.22-5.139-7.34q-.225.001-.45.02l5.28 7.543-6.677-7.285a6 6 0 0 0-.394.128"
          />
          <defs>
            <linearGradient
              id="UFI__a"
              x1="17.841"
              x2="6.304"
              y1="15.952"
              y2="7.903"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7000FF" />
              <stop offset=".49" stopColor="#00FFD1" />
              <stop offset="1" stopColor="#FFBF1C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenUFI.displayName = 'UFI'

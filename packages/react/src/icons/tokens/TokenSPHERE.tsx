import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSPHERE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286c-4.054 0-7.286-3-7.286-6.857 0-4.055 3-7.715 7.286-7.715 4.033 0 7.427 3.532 7.282 7.556.115 3.836-3.613 7.016-7.282 7.016m-2.143-2.143c-.745-.004-2.16-.364-2.16-.364a6.356 6.356 0 0 0 7.697.66 1.19 1.19 0 0 0 .6-1.136c-.072-.6-.6-1.303-1.208-1.303-.519 0-.986.364-1.384.673-.095.073-.185.146-.275.206-1.02.728-1.997 1.272-3.27 1.264m7.02-.986c.815-.943 1.552-2.014 1.552-3.3 0-.9-.013-1.86-.279-2.73-.15.802-1.007 1.444-1.864 1.444-1.072 0-1.83-.6-2.272-1.35-.887-1.508-2.155-2.52-3.942-2.507-2.636.022-4.5 2.143-4.5 4.715 0 2.284 2.108 3.891 4.285 3.857 1.286-.022 2.276-.729 3.283-1.462.459-.338 1.059-.681 1.646-.681.977 0 1.928 1.114 2.091 2.014M14.713 9.73c.279.484.716.985 1.573.985 1.714 0 .857-2.815-.227-3.698A6.73 6.73 0 0 0 12 5.559c-1.534-.018-3.274.78-4.281 1.645q-.116.1.025.043a6 6 0 0 1 2.328-.39c2.074.047 3.6 1.097 4.64 2.876zm-6.141 1.843a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.713m0 .857a1.714 1.714 0 0 0 1.714-1.715 1.714 1.714 0 1 1-1.714 1.715m0-3.429a1.71 1.71 0 0 1 1.49.866l.224-.009a2.572 2.572 0 1 1-2.563 2.349A1.714 1.714 0 0 1 8.572 9"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SPHERE__a)"
            d="M12 19.286c-4.055 0-7.286-3-7.286-6.857 0-4.055 3-7.715 7.286-7.715 4.032 0 7.427 3.532 7.281 7.556.116 3.836-3.613 7.016-7.281 7.016m-2.143-2.143c-.746-.004-2.16-.364-2.16-.364a6.356 6.356 0 0 0 7.697.66 1.19 1.19 0 0 0 .6-1.136c-.073-.6-.6-1.303-1.209-1.303-.518 0-.985.364-1.384.673-.094.073-.184.146-.274.206-1.02.728-1.997 1.272-3.27 1.264m7.02-.986c.814-.943 1.551-2.014 1.551-3.3 0-.9-.013-1.86-.278-2.73-.15.802-1.008 1.444-1.865 1.444-1.071 0-1.83-.6-2.271-1.35-.887-1.508-2.156-2.52-3.943-2.507-2.636.022-4.5 2.143-4.5 4.715 0 2.284 2.109 3.891 4.286 3.857 1.285-.022 2.275-.729 3.283-1.462.458-.338 1.058-.681 1.645-.681.977 0 1.929 1.114 2.092 2.014M14.712 9.73c.279.484.716.985 1.573.985 1.715 0 .857-2.815-.227-3.698A6.73 6.73 0 0 0 12 5.559c-1.535-.018-3.275.78-4.282 1.645q-.115.1.026.043a6 6 0 0 1 2.327-.39c2.074.047 3.6 1.097 4.641 2.876zm-6.141 1.843a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.713m0 .857a1.714 1.714 0 0 0 1.714-1.715 1.714 1.714 0 1 1-1.714 1.715m0-3.429a1.71 1.71 0 0 1 1.491.866l.223-.009a2.572 2.572 0 1 1-2.563 2.349A1.714 1.714 0 0 1 8.571 9"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="SPHERE__a"
              x1="9.428"
              x2="16.071"
              y1="5.786"
              y2="17.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F9CB32" />
              <stop offset=".29" stopColor="#EA1881" />
              <stop offset=".74" stopColor="#CD26B5" />
              <stop offset="1" stopColor="#13B3EB" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenSPHERE.displayName = 'SPHERE'

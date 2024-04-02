import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenAERO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 5.357a6.643 6.643 0 1 1 0 13.286 6.643 6.643 0 0 1 0-13.286M19.072 12a7.072 7.072 0 1 0-14.144 0 7.072 7.072 0 0 0 14.144 0"
          />
          <path
            fill="currentColor"
            d="M7.894 13.449c.883-1.852 1.775-3.708 2.658-5.568l.102-.013c.476.866.96 1.719 1.453 2.615a19.6 19.6 0 0 0-4.213 2.965m4.26 1.225c-.047.035-.09.086-.145.103-1.042.429-2.087.827-3.202.986-.3.043-.617.034-.913-.022-.505-.098-.694-.48-.48-.951a3.7 3.7 0 0 1 .549-.827c.823-.922 1.826-1.607 2.867-2.254a31.5 31.5 0 0 1 4.689-2.345c.111-.043.214-.098.343-.154l-.189-.343h1.209l.021.043-.759.334a26.2 26.2 0 0 0-6.265 3.737c-.322.266-.596.588-.875.892a1.4 1.4 0 0 0-.24.373c-.214.445-.034.805.455.848.428.035.865.026 1.285-.043.558-.085 1.102-.244 1.65-.377"
          />
          <path
            fill="currentColor"
            d="m11.152 12.441 1.521-.913 1.903 3.63-.06.056z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AERO__a)"
            d="M12 18.857a6.857 6.857 0 1 1 0-13.714 6.857 6.857 0 0 1 0 13.714"
          />
          <path
            fill="#fff"
            d="M12 5.357a6.643 6.643 0 1 1 0 13.286 6.643 6.643 0 0 1 0-13.286M19.072 12a7.072 7.072 0 1 0-14.144 0 7.072 7.072 0 0 0 14.144 0"
          />
          <path
            fill="#fff"
            d="M7.894 13.449c.883-1.852 1.775-3.708 2.658-5.568l.102-.013c.476.866.96 1.719 1.453 2.615a19.6 19.6 0 0 0-4.213 2.965m4.26 1.225c-.047.035-.09.086-.145.103-1.042.429-2.087.827-3.202.986-.3.043-.617.034-.913-.022-.505-.098-.694-.48-.48-.951a3.7 3.7 0 0 1 .549-.827c.823-.922 1.826-1.607 2.867-2.254a31.5 31.5 0 0 1 4.689-2.345c.111-.043.214-.098.343-.154l-.189-.343h1.209l.021.043-.759.334a26.2 26.2 0 0 0-6.265 3.737c-.322.266-.596.588-.875.892a1.4 1.4 0 0 0-.24.373c-.214.445-.034.805.455.848.428.035.865.026 1.285-.043.558-.085 1.102-.244 1.65-.377"
          />
          <path fill="#fff" d="m11.152 12.441 1.521-.913 1.903 3.63-.06.056z" />
          <defs>
            <linearGradient
              id="AERO__a"
              x1="16.442"
              x2="1.861"
              y1="7.381"
              y2="24.127"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenAERO.displayName = 'AERO'

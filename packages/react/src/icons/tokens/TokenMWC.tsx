import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMWC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.886 7.886a470 470 0 0 1 3.424 3.429.93.93 0 0 1 .257.625c.022.317-.09.6-.33.84a432 432 0 0 0-3.103 3.116c-.411.416-.891.518-1.414.214a4 4 0 0 1-.223-.197l-2.73-2.743q-.635-.64-1.341-.163c-.189.129-.377.352-.557.523q-1.185 1.18-2.358 2.375-.306.315-.62.36c-.592.085-.845-.185-1.23-.575-.96-.981-1.93-1.95-2.898-2.914a1.04 1.04 0 0 1-.334-.656c-.043-.441.137-.698.445-1.007l3.12-3.124c.06-.06.142-.103.215-.154.57-.27.972-.06 1.392.364q1.338 1.361 2.692 2.704a1.03 1.03 0 0 0 1.449-.039l2.79-2.807c.39-.385.84-.445 1.35-.171z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MWC__a)"
            d="M16.885 7.886a468 468 0 0 1 3.425 3.429.93.93 0 0 1 .257.625c.021.317-.09.6-.33.84a430 430 0 0 0-3.103 3.116c-.412.416-.892.518-1.414.214a4 4 0 0 1-.223-.197l-2.73-2.743q-.636-.64-1.342-.163c-.188.129-.377.352-.557.523q-1.185 1.18-2.357 2.375-.308.315-.621.36c-.592.085-.845-.185-1.23-.575-.96-.981-1.929-1.95-2.898-2.914a1.04 1.04 0 0 1-.334-.656c-.043-.441.137-.698.446-1.007l3.12-3.124c.06-.06.141-.103.214-.154.57-.27.973-.06 1.393.364q1.336 1.361 2.691 2.704a1.03 1.03 0 0 0 1.449-.039l2.79-2.807c.39-.385.84-.445 1.35-.171z"
          />
          <defs>
            <linearGradient
              id="MWC__a"
              x1="3.422"
              x2="20.569"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B00CA" />
              <stop offset="1" stopColor="#9A00E6" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenMWC.displayName = 'MWC'

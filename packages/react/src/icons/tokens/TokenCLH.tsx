import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenCLH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.306 18.844a6.8 6.8 0 0 1-4.423-2.091 6.3 6.3 0 0 1-1.74-4.431 6.3 6.3 0 0 1 1.89-4.372C8.22 6.776 10.046 6.077 11.747 6a.24.24 0 0 1 .253.24v2.1a.23.23 0 0 1-.069.159.26.26 0 0 1-.167.072c-.784.043-1.757.258-2.391.703a3.87 3.87 0 0 0-1.659 3.155c0 2.168 1.929 3.874 4.072 3.857 2.048-.017 3.942-1.56 4.071-3.63 0-.06.03-.116.073-.159a.25.25 0 0 1 .171-.068h2.075a.26.26 0 0 1 .233.15.2.2 0 0 1 .02.094 6.3 6.3 0 0 1-.622 2.486 6.4 6.4 0 0 1-1.577 2.048 6.7 6.7 0 0 1-2.289 1.299 7 7 0 0 1-2.635.338"
          />
          <path
            fill="currentColor"
            d="M13.088 6a.23.23 0 0 0-.231.231V8.34a.23.23 0 0 0 .231.231h2.769v2.77a.23.23 0 0 0 .231.23h2.109a.236.236 0 0 0 .231-.23V6z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0E1D51"
            d="M11.306 18.844a6.8 6.8 0 0 1-4.423-2.091 6.3 6.3 0 0 1-1.74-4.431 6.3 6.3 0 0 1 1.89-4.372C8.22 6.776 10.046 6.077 11.748 6a.24.24 0 0 1 .253.24v2.1a.23.23 0 0 1-.07.159.26.26 0 0 1-.166.072c-.785.043-1.758.258-2.392.703a3.87 3.87 0 0 0-1.658 3.155c0 2.168 1.928 3.874 4.071 3.857 2.049-.017 3.943-1.56 4.072-3.63 0-.06.03-.116.072-.159a.25.25 0 0 1 .172-.068h2.074a.26.26 0 0 1 .234.15.2.2 0 0 1 .019.094 6.3 6.3 0 0 1-.621 2.486 6.4 6.4 0 0 1-1.578 2.048 6.7 6.7 0 0 1-2.288 1.299 7 7 0 0 1-2.636.338"
          />
          <path
            fill="url(#CLH__a)"
            d="M13.089 6a.23.23 0 0 0-.232.231V8.34a.23.23 0 0 0 .232.231h2.768v2.769a.23.23 0 0 0 .146.214.2.2 0 0 0 .086.017h2.108a.235.235 0 0 0 .232-.231V6z"
          />
          <defs>
            <linearGradient
              id="CLH__a"
              x1="12.857"
              x2="18.429"
              y1="8.786"
              y2="8.786"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B7CF2" />
              <stop offset="1" stopColor="#2DCAED" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenCLH.displayName = 'CLH'

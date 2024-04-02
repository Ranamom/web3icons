import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSOURCE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.901 11.649c-.617-.544-1.851-1.813-1.851-2.52 0-.883.925-1.414 2.378-1.414.54 0 .943.432 1.492 1.02l.377.394c.754.775.973.878 1.581.878.609 0 1.265-.227 1.265-1.735 0-1.518-2.353-3.129-5.242-3.129-2.884 0-5.044 2.314-5.044 3.857 0 1.552 2.143 3.077 5.044 2.649m.197.703c.617.544 1.852 1.813 1.852 2.52 0 .883-1.62 1.285-2.272 1.285s-1.221-.514-1.975-1.285c-.755-.776-.973-.879-1.582-.879-.608 0-1.264.227-1.264 1.736 0 1.517 2.353 3.128 5.241 3.128 2.885 0 5.045-2.314 5.045-3.857 0-1.551-2.143-3.077-5.045-2.648"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SOURCE__a)"
            d="M11.902 11.649c-.617-.544-1.852-1.813-1.852-2.52 0-.883.926-1.414 2.379-1.414.54 0 .943.432 1.491 1.02l.377.394c.755.775.973.878 1.582.878.608 0 1.264-.227 1.264-1.735 0-1.518-2.353-3.129-5.241-3.129-2.885 0-5.045 2.314-5.045 3.857 0 1.552 2.143 3.077 5.045 2.649m.197.703c.617.544 1.851 1.813 1.851 2.52 0 .883-1.62 1.285-2.271 1.285-.652 0-1.222-.514-1.976-1.285-.754-.776-.973-.879-1.581-.879-.609 0-1.265.227-1.265 1.736 0 1.517 2.353 3.128 5.242 3.128 2.884 0 5.044-2.314 5.044-3.857 0-1.551-2.143-3.077-5.044-2.648"
          />
          <defs>
            <linearGradient
              id="SOURCE__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ED69FF" />
              <stop offset="1" stopColor="#7B61F4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenSOURCE.displayName = 'SOURCE'

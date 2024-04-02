import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenDCR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.175 13.245h3.392c1.213-.008 2.284-.986 2.28-2.223.004-1.237-1.066-2.443-2.28-2.45h-1.082l-2.31-1.715h3.392c.996.004 1.96.34 2.728.954a4.13 4.13 0 0 1 1.478 2.41c.194.95.041 1.937-.431 2.784a4.27 4.27 0 0 1-2.163 1.885l2.678 2.253h-3.07z"
          />
          <path
            fill="currentColor"
            d="M9.44 10.714h3.378L8.213 6.857h-3.07L7.822 9.11a4.27 4.27 0 0 0-2.16 1.883c-.968 1.738-.502 3.958 1.044 5.195a4.4 4.4 0 0 0 2.735.955h3.384l-2.31-1.714H9.441c-1.542-.005-2.744-1.82-2.116-3.3.342-.803 1.233-1.412 2.116-1.415"
          />
        </>
      ) : (
        <>
          <path
            fill="#2970FF"
            d="M11.175 13.245h3.392c1.213-.008 2.283-.986 2.279-2.223.004-1.237-1.066-2.443-2.28-2.45h-1.081l-2.31-1.715h3.392c.996.004 1.96.34 2.727.954a4.12 4.12 0 0 1 1.478 2.41c.195.95.042 1.937-.43 2.784a4.27 4.27 0 0 1-2.164 1.885l2.679 2.253h-3.07z"
          />
          <path
            fill="#2970FF"
            d="M9.44 10.714h3.377L8.212 6.857h-3.07l2.68 2.253a4.27 4.27 0 0 0-2.16 1.883c-.969 1.738-.502 3.958 1.044 5.195a4.4 4.4 0 0 0 2.734.955h3.385l-2.31-1.714H9.44c-1.541-.005-2.743-1.82-2.115-3.3.341-.803 1.233-1.412 2.115-1.415"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenDCR.displayName = 'DCR'

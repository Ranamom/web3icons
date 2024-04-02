import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenREP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.805 14.963-1.452-2.442a.19.19 0 0 0-.192-.089.2.2 0 0 0-.07.026l-.943.61a.19.19 0 0 0-.06.255l.83 1.394c.024.043.012.1-.03.128l-4.836 3.121a.09.09 0 0 1-.1 0l-4.839-3.12a.096.096 0 0 1-.03-.129l.83-1.394a.19.19 0 0 0-.06-.255l-.944-.61a.186.186 0 0 0-.261.063l-1.452 2.442a.376.376 0 0 0 .12.51l6.482 4.181a.37.37 0 0 0 .403 0l6.482-4.182a.377.377 0 0 0 .122-.509M7.798 10.925l.915.616a.176.176 0 0 0 .253-.064l2.955-5.185A.09.09 0 0 1 12 6.246a.09.09 0 0 1 .077.046l2.957 5.185a.18.18 0 0 0 .254.064l.915-.616a.196.196 0 0 0 .058-.258L12.727 4.47a.36.36 0 0 0-.31-.185h-.834a.36.36 0 0 0-.31.185L7.74 10.667a.196.196 0 0 0 .058.258"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="m18.805 14.963-1.452-2.442a.19.19 0 0 0-.192-.089.2.2 0 0 0-.07.026l-.943.61a.19.19 0 0 0-.06.255l.83 1.394c.024.043.012.1-.03.128l-4.836 3.121a.09.09 0 0 1-.1 0l-4.839-3.12a.096.096 0 0 1-.03-.129l.83-1.394a.19.19 0 0 0-.06-.255l-.944-.61a.186.186 0 0 0-.261.063l-1.452 2.442a.376.376 0 0 0 .12.51l6.482 4.181a.37.37 0 0 0 .403 0l6.482-4.182a.377.377 0 0 0 .122-.509"
          />
          <path
            fill="#2AE7A8"
            d="m7.798 10.925.915.616a.176.176 0 0 0 .253-.064l2.955-5.185A.09.09 0 0 1 12 6.246a.09.09 0 0 1 .077.046l2.957 5.185a.18.18 0 0 0 .254.064l.915-.616a.196.196 0 0 0 .058-.258L12.727 4.47a.36.36 0 0 0-.31-.185h-.834a.36.36 0 0 0-.31.185L7.74 10.667a.196.196 0 0 0 .058.258"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenREP.displayName = 'REP'

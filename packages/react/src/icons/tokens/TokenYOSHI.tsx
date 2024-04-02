import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenYOSHI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.544 6.939a31.4 31.4 0 0 1-3.6 5.271c-1.234-1.2-2.554-2.884-3.998-5.104 1.028-1.41 2.357-2.34 3.745-2.392 1.209-.042 2.657.836 3.853 2.225m-4.474 7.05.193 5.297c-3.48-.309-5.743-3.065-5.177-7.41a10.8 10.8 0 0 1 .81-2.914s2.065 3.18 4.174 5.027m1.907-.086.189 5.314c3.45-.557 5.507-3.463 4.632-7.757a9.9 9.9 0 0 0-1.05-2.798 31 31 0 0 1-3.771 5.241"
          />
        </>
      ) : (
        <>
          <path
            fill="#47DBA7"
            d="M15.544 6.939a31.4 31.4 0 0 1-3.6 5.271c-1.234-1.2-2.554-2.884-3.998-5.104 1.028-1.41 2.357-2.34 3.745-2.392 1.209-.042 2.657.836 3.853 2.225m-4.474 7.05.193 5.297c-3.48-.309-5.743-3.065-5.177-7.41a10.8 10.8 0 0 1 .81-2.914s2.065 3.18 4.174 5.027m1.907-.086.189 5.314c3.45-.557 5.507-3.463 4.632-7.757a9.9 9.9 0 0 0-1.05-2.798 31 31 0 0 1-3.771 5.241"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenYOSHI.displayName = 'YOSHI'

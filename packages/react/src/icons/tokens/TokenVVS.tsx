import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVVS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.715 9.429h-3.43L8.144 12 12 15.43 15.857 12z"
          />
          <path
            fill="currentColor"
            d="M16.328 10.834a1.257 1.257 0 0 1 0 1.796l-3.351 3.3a1.307 1.307 0 0 1-1.809.017l-3.48-3.291a1.255 1.255 0 0 1 .009-1.843l2.079-1.916c.24-.219.557-.343.882-.343h2.829c.339 0 .669.137.909.373l1.937 1.907zm-5.665-3.548h2.828c.682 0 1.337.265 1.822.745l1.937 1.903a2.51 2.51 0 0 1 0 3.592l-3.356 3.3a2.614 2.614 0 0 1-3.613.038l-3.484-3.291a2.51 2.51 0 0 1 .021-3.686l2.079-1.916a2.6 2.6 0 0 1 1.766-.685"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M10.35 5.571h3.399c1.204 0 2.357.506 3.167 1.389l1.675 1.826a4.243 4.243 0 0 1-.132 5.888l-3.386 3.364a4.31 4.31 0 0 1-6.026.043l-3.463-3.347a4.244 4.244 0 0 1-.107-6.004l1.77-1.843a4.3 4.3 0 0 1 3.103-1.316m0 1.277h3.399c.844 0 1.645.356 2.215.973l1.676 1.826a2.97 2.97 0 0 1-.094 4.123l-3.386 3.364a3.017 3.017 0 0 1-4.213.03l-3.463-3.347a2.97 2.97 0 0 1-.077-4.2l1.77-1.843a3 3 0 0 1 2.173-.926"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2C3852"
            d="M13.714 9.429h-3.429L8.143 12 12 15.43 15.857 12z"
          />
          <path
            fill="#2C3852"
            d="M16.329 10.834a1.257 1.257 0 0 1 0 1.796l-3.352 3.3a1.307 1.307 0 0 1-1.808.017l-3.48-3.291a1.255 1.255 0 0 1 .008-1.843l2.08-1.916c.24-.219.556-.343.882-.343h2.829c.338 0 .668.137.908.373l1.937 1.907zm-5.666-3.548h2.829c.681 0 1.337.265 1.821.745l1.937 1.903a2.51 2.51 0 0 1 0 3.592l-3.355 3.3a2.614 2.614 0 0 1-3.613.038l-3.484-3.291a2.51 2.51 0 0 1 .02-3.686l2.08-1.916a2.6 2.6 0 0 1 1.765-.685"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#2C3852"
            d="M10.35 5.571h3.399c1.204 0 2.357.506 3.167 1.389l1.675 1.826a4.243 4.243 0 0 1-.132 5.888l-3.386 3.364a4.31 4.31 0 0 1-6.026.043l-3.463-3.347a4.244 4.244 0 0 1-.107-6.004l1.77-1.843a4.3 4.3 0 0 1 3.103-1.316m0 1.277h3.399c.844 0 1.645.356 2.215.973l1.676 1.826a2.97 2.97 0 0 1-.094 4.123l-3.386 3.364a3.017 3.017 0 0 1-4.213.03l-3.463-3.347a2.97 2.97 0 0 1-.077-4.2l1.77-1.843a3 3 0 0 1 2.173-.926"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenVVS.displayName = 'VVS'

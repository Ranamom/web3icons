import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenBTCST = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M7.603 7.007a2.64 2.64 0 0 1 2.469-1.436h4.984c.531 0 .947.18 1.234.463.283.287.424.665.424 1.037a1.46 1.46 0 0 1-.424 1.038 1.7 1.7 0 0 1-1.234.462H9.643c-.669 0-1.213.455-1.624 1.008a2.22 2.22 0 0 0 2.053 1.135h4.02a2.57 2.57 0 0 1 1.962.806c.431.487.667 1.116.66 1.766 0 .634-.214 1.277-.66 1.766a2.57 2.57 0 0 1-1.967.805H8.786a1.03 1.03 0 0 0-.806.33c-.176.207-.27.47-.266.742 0 .274.095.544.266.741.171.193.437.33.806.33h5.306c.467 0 1.007-.24 1.43-.639a2.1 2.1 0 0 0 .712-1.504h.429c0 .716-.36 1.359-.844 1.817a2.63 2.63 0 0 1-1.728.755H8.787a1.46 1.46 0 0 1-1.123-.472 1.54 1.54 0 0 1-.377-1.028c0-.369.124-.742.377-1.029a1.46 1.46 0 0 1 1.123-.471h5.306a2.14 2.14 0 0 0 1.838-.913c-.077-.086-.18-.202-.317-.317a2.02 2.02 0 0 0-1.307-.485h-4.234a2.55 2.55 0 0 1-2.186-1.165 3.5 3.5 0 0 1-.6-1.835h.428c0 .386.15 1.042.527 1.595a2.13 2.13 0 0 0 1.83.977h4.235a2.44 2.44 0 0 1 1.83.823 2.32 2.32 0 0 0-.399-2.297 2.15 2.15 0 0 0-1.646-.67h-4.02a2.64 2.64 0 0 1-2.494-1.486 3.04 3.04 0 0 1 .026-2.649M7.83 9.13c.429-.519 1.037-.986 1.813-.986h5.413c.428 0 .733-.142.93-.343a1 1 0 0 0 .3-.729 1.03 1.03 0 0 0-.3-.728 1.27 1.27 0 0 0-.93-.343h-4.984a2.21 2.21 0 0 0-2.088 1.2c-.295.6-.35 1.29-.154 1.929"
      />
    </BaseIcon>
  ),
)

TokenBTCST.displayName = 'BTCST'

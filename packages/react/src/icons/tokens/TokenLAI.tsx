import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M16.11 18.857c-.595 0-1.264-.128-1.993-.377A11 11 0 0 1 12 17.477c-.711.429-1.427.772-2.121 1.008-.729.248-1.397.372-1.989.372-.84 0-1.53-.248-2.014-.732-.831-.832-.96-2.255-.36-4.008A11 11 0 0 1 6.523 12a11 11 0 0 1-1.007-2.117c-.6-1.757-.471-3.176.36-4.007s2.254-.96 4.007-.36A11 11 0 0 1 12 6.523a11 11 0 0 1 2.117-1.007c1.753-.6 3.176-.471 4.008.36s.96 2.254.36 4.007c-.26.74-.598 1.449-1.008 2.117.429.712.772 1.423 1.008 2.117.6 1.757.471 3.176-.36 4.008-.485.484-1.175.728-2.015.728zm-1.277-4.028c-.9.9-1.864 1.671-2.833 2.276a16 16 0 0 1-2.833-2.272c-.9-.9-1.671-1.864-2.271-2.833.6-.973 1.371-1.937 2.271-2.837s1.86-1.671 2.829-2.271c.973.6 1.937 1.371 2.837 2.271s1.672 1.864 2.272 2.837a16 16 0 0 1-2.272 2.829m.223.227a16.5 16.5 0 0 1-2.751 2.233c.642.377 1.285.681 1.915.895 1.629.558 2.94.46 3.682-.282.741-.742.84-2.049.282-3.686a10.5 10.5 0 0 0-.895-1.916c-.6.943-1.359 1.886-2.233 2.756m-6.111 0A16.5 16.5 0 0 1 6.712 12.3a10.7 10.7 0 0 0-.896 1.92c-.557 1.629-.459 2.94.283 3.682.741.741 2.048.84 3.681.282a10.4 10.4 0 0 0 1.916-.895 16.4 16.4 0 0 1-2.751-2.233m0-6.111a16.5 16.5 0 0 0-2.233 2.751 10.7 10.7 0 0 1-.896-1.916c-.557-1.633-.459-2.94.283-3.685.428-.42 1.037-.639 1.791-.639.557 0 1.196.12 1.89.36a10.6 10.6 0 0 1 1.916.891 16.4 16.4 0 0 0-2.751 2.238m6.111 0A16.5 16.5 0 0 0 12.3 6.707a11 11 0 0 1 1.92-.895 5.9 5.9 0 0 1 1.89-.356c.755 0 1.367.214 1.792.643.741.741.84 2.048.282 3.681a10.4 10.4 0 0 1-.895 1.916 16.5 16.5 0 0 0-2.229-2.751zM8.572 12c3.368-.484 3.394-3.428 3.394-3.428v.034a3.65 3.65 0 0 0 3.463 3.36V12c-3.369.485-3.395 3.429-3.395 3.429v-.034c-.488-3.335-3.462-3.36-3.462-3.36z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

TokenLAI.displayName = 'LAI'

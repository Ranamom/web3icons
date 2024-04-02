import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLOOM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.705 6.892 13.622 8.35l-.796-.607 2.843-2.12 2.569 1.743a2.38 2.38 0 0 1 .085 3.893l-.996.741.85.601a2.473 2.473 0 0 1 0 4.033l-2.453 1.743-8.164-5.74-1.19.875a1.276 1.276 0 0 0-.073 2.047l2.065 1.677 2.07-1.482.766.583-2.854 2.04-2.843-2.15a2.07 2.07 0 0 1 .055-3.291l1.184-.881-.886-.62a2.41 2.41 0 0 1-.037-3.91l2.497-1.83 8.139 5.698 1.111-.79a1.56 1.56 0 0 0-.073-2.587l-1.785-1.118zm-.018 5.041L8.235 6.76l-2.12 1.76a1.202 1.202 0 0 0 .073 1.92l1.409.983 2.854-2.113.808.6L8.43 12l7.397 5.15 1.853-1.335a1.532 1.532 0 0 0-.012-2.49l-1.093-.76-2.976 2.223-.869-.753 2.952-2.09z"
          />
        </>
      ) : (
        <>
          <path
            fill="#49BEC0"
            d="M15.705 6.892 13.622 8.35l-.796-.607 2.842-2.12 2.57 1.743a2.38 2.38 0 0 1 .084 3.893l-.996.741.85.601a2.472 2.472 0 0 1 0 4.033l-2.453 1.743-8.163-5.74-1.19.875a1.276 1.276 0 0 0-.073 2.047l2.064 1.677 2.071-1.482.766.583-2.855 2.04-2.842-2.15a2.07 2.07 0 0 1 .055-3.291l1.184-.881-.887-.62a2.41 2.41 0 0 1-.036-3.91l2.497-1.83 8.139 5.698 1.11-.79a1.56 1.56 0 0 0-.072-2.587l-1.786-1.118zm-.018 5.041L8.234 6.76l-2.12 1.76a1.202 1.202 0 0 0 .074 1.92l1.408.983 2.855-2.113.808.6L8.429 12l7.397 5.15 1.853-1.335a1.532 1.532 0 0 0-.013-2.49l-1.093-.76-2.976 2.223-.868-.753 2.952-2.09z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenLOOM.displayName = 'LOOM'

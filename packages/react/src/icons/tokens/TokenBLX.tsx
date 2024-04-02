import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenBLX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.714 4.547 12 3.428l-1.714 1.119v2.074l1.286.909v.857l-3 1.586v3.643l-.455.338-.458-3.266-.455 3.592.51.471v1.093l-1.071.656-1.071-.656v-1.041l.737-.343.227 1.088.321-1.427v-5.22l2.876-1.684-.476-.771L6 8.39v5.169l-1.286.681v2.13l1.929 1.2 1.929-1.2v-1.624l.728-.364 2.7 1.573 2.73-1.586.566.339-1.474 1.962 2.035-1.242v-.386l1.586-.9.986.621v1.102l-.81.582-.699-.445.201-.956-.77.502-4.124 2.644-2.477-1.556-.506.759 2.983 1.89L16.3 16.67l1.273.9 1.714-1.221v-2.07l-1.8-1.2-1.612.917-.445-.416V9.973l-3-1.586v-.673l3.437 1.187-3.184-2.07-.228.215-1.311-.913V5.027L12 4.543l.857.484V6h-.403l.403.428 4.286 2.473v3.806L18 12.48V8.39l-4.286-2.494V4.543zM9.43 10.689 12 9.17l2.572 1.329v2.893L12 14.9l-2.57-1.507zm1.285.41L12 10.432l1.286.669-1.286.673zm0 1.647v-1.183l1.072.707v1.183zm2.572-1.183v1.183l-1.072.707V12.27z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0094D9"
            d="M13.714 4.547 12 3.428l-1.715 1.119v2.074l1.286.909v.857l-3 1.586v3.643l-.454.338-.459-3.266-.454 3.592.51.471v1.093l-1.072.656-1.071-.656v-1.041l.737-.343.227 1.088.322-1.427v-5.22l2.875-1.684-.475-.771L6 8.39v5.169l-1.286.681v2.13l1.928 1.2 1.929-1.2v-1.624l.729-.364 2.7 1.573 2.73-1.586.565.339-1.474 1.962 2.036-1.242v-.386l1.585-.9.986.621v1.102l-.81.582-.698-.445.201-.956-.771.502-4.123 2.644-2.477-1.556-.506.759 2.983 1.89 4.071-2.615 1.273.9 1.714-1.221v-2.07l-1.8-1.2-1.611.917-.446-.416V9.973l-3-1.586v-.673l3.437 1.187-3.184-2.07-.227.215-1.312-.913V5.027L12 4.543l.857.484V6h-.403l.403.428 4.285 2.473v3.806L18 12.48V8.39l-4.286-2.494V4.543zm-4.286 6.142L12 9.17l2.57 1.33v2.893L12 14.9l-2.572-1.508zm1.286.41L12 10.432l1.285.669-1.285.673zm0 1.647v-1.183l1.071.707v1.183zm2.571-1.183v1.183l-1.071.707V12.27z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenBLX.displayName = 'BLX'

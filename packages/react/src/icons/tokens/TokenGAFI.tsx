import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGAFI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 8.571a1.286 1.286 0 0 0-1.286 1.286v4.286a1.286 1.286 0 0 0 1.286 1.285h5.571A1.286 1.286 0 0 0 12 14.143v-1.715a1.286 1.286 0 0 0-1.286-1.285H6.857v1.714h3v.429H6v-2.572h6V8.571zm9.428 1.715h5.143V9h-5.571a.857.857 0 0 0-.857.857V15h1.285v-2.143h5.143v-1.286h-5.143zM15 15.257a.17.17 0 0 1-.172.171h-1.8a.17.17 0 0 1-.171-.171v-5.4a1.286 1.286 0 0 1 1.286-1.286h5.828c.095 0 .172.077.172.172v1.8a.17.17 0 0 1-.172.171H15v.429h4.971c.095 0 .172.077.172.171v1.8a.17.17 0 0 1-.172.172H15z"
          />
        </>
      ) : (
        <>
          <path
            fill="#72F34B"
            d="M5.143 8.571a1.286 1.286 0 0 0-1.286 1.286v4.286a1.286 1.286 0 0 0 1.286 1.285h5.572A1.286 1.286 0 0 0 12 14.143v-1.715a1.286 1.286 0 0 0-1.285-1.285H6.857v1.714h3v.429H6v-2.572h6V8.571zm9.429 1.715h5.143V9h-5.572a.857.857 0 0 0-.857.857V15h1.286v-2.143h5.143v-1.286h-5.143zM15 15.257a.17.17 0 0 1-.171.171h-1.8a.17.17 0 0 1-.172-.171v-5.4a1.286 1.286 0 0 1 1.286-1.286h5.829c.094 0 .171.077.171.172v1.8a.17.17 0 0 1-.171.171H15v.429h4.972c.094 0 .171.077.171.171v1.8a.17.17 0 0 1-.171.172H15z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenGAFI.displayName = 'GAFI'

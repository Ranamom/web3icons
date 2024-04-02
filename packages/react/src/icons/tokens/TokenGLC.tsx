import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGLC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.128 15.227a6.86 6.86 0 0 0 12.726-1.65l.003-1.58a.433.433 0 0 0-.424-.424h-4.722a.433.433 0 0 0-.424.424v1.3c0 .228.189.414.416.417h2.627c-.336.829-.921 1.734-1.675 2.215a4.3 4.3 0 0 1-2.327.677v.006a4.67 4.67 0 0 1-3.866-2.04h.752a.643.643 0 1 0 0-1.286H7.851a4.6 4.6 0 0 1-.115-2.143h1.478a.643.643 0 0 0 0-1.286h-1.04l.001-.004h-.007a4.65 4.65 0 0 1 6.165-2.061 4.6 4.6 0 0 1 1.62 1.305.385.385 0 0 0 .596.03l.955-1.017a.41.41 0 0 0 .023-.542c-1.264-1.514-3.22-2.425-5.347-2.425a6.86 6.86 0 0 0-6.516 4.714H4.5a.643.643 0 0 0 0 1.286h.88q-.033.33-.042.662-.02.7.099 1.392h-.01l.016.089H4.5a.643.643 0 0 0 0 1.286h1.324q.135.337.304.655"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFCA3B"
            d="M6.129 15.227a6.86 6.86 0 0 0 12.726-1.65l.002-1.58a.433.433 0 0 0-.423-.424H13.71a.433.433 0 0 0-.423.424v1.3a.42.42 0 0 0 .415.417h2.628c-.336.829-.922 1.734-1.675 2.215a4.3 4.3 0 0 1-2.327.677v.006a4.67 4.67 0 0 1-3.866-2.04h.752a.643.643 0 1 0 0-1.286H7.85a4.6 4.6 0 0 1-.115-2.143h1.479a.643.643 0 0 0 0-1.286h-1.04l.002-.004h-.008a4.65 4.65 0 0 1 6.165-2.061 4.6 4.6 0 0 1 1.62 1.305.385.385 0 0 0 .597.03l.954-1.017a.41.41 0 0 0 .024-.542c-1.264-1.514-3.22-2.425-5.348-2.425a6.86 6.86 0 0 0-6.515 4.714H4.5a.643.643 0 0 0 0 1.286h.881q-.034.33-.042.662-.02.7.098 1.392h-.01l.017.089H4.5a.643.643 0 0 0 0 1.286h1.324q.136.337.304.655"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenGLC.displayName = 'GLC'

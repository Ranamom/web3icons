import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLEOX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M6 15.857A.429.429 0 1 0 6 15a.429.429 0 0 0 0 .857m1.586-1.285h.038a.3.3 0 0 0 .227-.099l4.483-4.487a.33.33 0 0 0 .094-.24.32.32 0 0 0-.321-.317.33.33 0 0 0-.236.094L7.68 13.715a4.86 4.86 0 0 1-.6-2.345c0-2.683 2.186-4.727 4.86-4.727.964 0 1.89.27 2.691.801a.326.326 0 0 0 .416-.038L16.62 5.7a.326.326 0 0 0-.219-.557.36.36 0 0 0-.244.094l-1.453 1.496A5.2 5.2 0 0 0 11.944 6c-3.043 0-5.516 2.327-5.516 5.37 0 1.093.318 2.147.922 3.056a.34.34 0 0 0 .24.146zm8.871-6.3a.334.334 0 0 0-.595.153.32.32 0 0 0 .064.24 4.8 4.8 0 0 1 1.002 2.91A4.97 4.97 0 0 1 12 16.523c-.849 0-1.702-.3-2.434-.699L13.62 11.7a.32.32 0 0 0 .094-.218.36.36 0 0 0-.094-.245.33.33 0 0 0-.257-.094.34.34 0 0 0-.215.094l-7.482 7.487a.33.33 0 0 0 .467.463L9.077 16.3c.87.535 1.867.827 2.889.844 3.085 0 5.605-2.529 5.605-5.571 0-1.2-.385-2.345-1.114-3.3"
      />
    </BaseIcon>
  ),
)

TokenLEOX.displayName = 'LEOX'

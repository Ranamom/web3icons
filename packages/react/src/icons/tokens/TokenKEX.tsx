import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenKEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.171 9.771c-.265.146-.6.12-.6-.188V8.31l4.817-2.739v1.273c0 .309-.214.686-.497.832l-3.72 2.1zm6.943 8.88c.266-.15.266-.411 0-.557l-3.836-2.186a1.14 1.14 0 0 0-.977 0l-1.11.639 4.817 2.739 1.11-.635zm4.114-10.98c-.274-.141-.514-.03-.514.283v4.372c0 .308.223.685.514.827l1.158.638V8.31l-1.158-.634z"
          />
          <path
            fill="currentColor"
            d="m5.571 8.314 4.817-2.743 4.333 2.465c.266.145.266.407 0 .552l-3.84 2.186c-.261.146-.711.146-.973 0L5.571 8.31zm1.286 3.172c0-.313.227-.429.527-.279l4.089 2.224a1.08 1.08 0 0 1 .527.84v5.015L6.857 16.5zm7.341 4.765c-.257.15-.484.035-.484-.274v-4.371c0-.309.21-.686.484-.832l4.23-2.464v5.481z"
          />
        </>
      ) : (
        <>
          <path
            fill="#298DFF"
            d="M6.171 9.771c-.265.146-.6.12-.6-.188V8.31l4.817-2.739v1.273c0 .309-.214.686-.497.832l-3.72 2.1z"
          />
          <path
            fill="#344AE6"
            d="M13.114 18.651c.266-.15.266-.411 0-.557l-3.836-2.186a1.14 1.14 0 0 0-.977 0l-1.11.639 4.817 2.739 1.11-.635z"
          />
          <path
            fill="#4264F2"
            d="M17.228 7.671c-.274-.141-.514-.03-.514.283v4.372c0 .308.223.685.514.827l1.158.638V8.31l-1.158-.634z"
          />
          <path
            fill="#298DFF"
            d="m5.571 8.314 4.817-2.743 4.333 2.465c.266.145.266.407 0 .552l-3.84 2.186c-.261.146-.711.146-.973 0L5.571 8.31z"
          />
          <path
            fill="#344AE6"
            d="M6.857 11.486c0-.313.227-.429.527-.279l4.089 2.224a1.08 1.08 0 0 1 .527.84v5.015L6.857 16.5z"
          />
          <path
            fill="#4264F2"
            d="M14.198 16.251c-.257.15-.484.035-.484-.274v-4.371c0-.309.21-.686.484-.832l4.23-2.464v5.481z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenKEX.displayName = 'KEX'

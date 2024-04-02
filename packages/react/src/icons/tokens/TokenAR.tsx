import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenAR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.963 5.853a6.11 6.11 0 1 0 0 12.22 6.11 6.11 0 0 0 0-12.22m-7.249 6.11a7.249 7.249 0 1 1 14.498 0 7.249 7.249 0 0 1-14.498 0"
          />
          <path
            fill="currentColor"
            d="M12.985 14.145a1.2 1.2 0 0 1-.083-.224 3 3 0 0 1-.058-.268 1.77 1.77 0 0 1-.973.54q-.229.05-.463.05a2.3 2.3 0 0 1-.744-.118 1.8 1.8 0 0 1-.579-.325 1.5 1.5 0 0 1-.38-.497 1.5 1.5 0 0 1-.136-.632q0-.832.618-1.285c.415-.305 1.033-.475 1.854-.475h.593v-.293a.803.803 0 0 0-.802-.823.86.86 0 0 0-.604.216.61.61 0 0 0-.19.472H9.686q0-.336.146-.638c.1-.201.245-.413.433-.566q.287-.228.696-.36.413-.136.944-.136.476 0 .885.117.413.117.716.346.3.228.471.578.17.345.17.803v2.258q0 .424.054.7.054.277.156.477v.083zm-.757-1.124c.19-.105.327-.245.404-.38v-.873h-.528c-.403 0-.93.043-1.114.465-.117.258-.09.583.122.783.316.293.782.19 1.116.005"
          />
        </>
      ) : (
        <>
          <path
            fill="#222326"
            d="M11.963 5.853a6.11 6.11 0 1 0 0 12.22 6.11 6.11 0 0 0 0-12.22m-7.25 6.11a7.249 7.249 0 1 1 14.499 0 7.249 7.249 0 0 1-14.498 0"
          />
          <path
            fill="#222326"
            d="M12.984 14.145a1.2 1.2 0 0 1-.082-.224 3 3 0 0 1-.059-.268 1.77 1.77 0 0 1-.973.54q-.229.05-.462.05a2.3 2.3 0 0 1-.745-.118 1.8 1.8 0 0 1-.578-.325 1.5 1.5 0 0 1-.38-.497 1.5 1.5 0 0 1-.136-.632q0-.832.618-1.285c.415-.305 1.033-.475 1.853-.475h.594v-.293a.803.803 0 0 0-.803-.823c-.275 0-.477.096-.603.216a.61.61 0 0 0-.19.472H9.686q0-.336.145-.638c.101-.201.246-.413.433-.566q.288-.228.696-.36.413-.136.944-.136.477 0 .885.117.414.117.716.346.3.228.472.578.17.345.17.803v2.258q0 .424.054.7.053.277.155.477v.083zm-.756-1.124c.19-.105.327-.245.404-.38v-.873h-.528c-.403 0-.93.043-1.115.465-.116.258-.09.583.122.783.316.293.783.19 1.117.005"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenAR.displayName = 'AR'

import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenDMT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.408 5.337q.303-.194.606-.194h6.74c.404 0 .808.194 1.01.582l3.37 5.693q.303.582 0 1.164l-3.37 5.693c-.202.388-.606.582-1.01.582h-6.74q-.303 0-.606-.194c-.135-.13-.337-.259-.405-.388l-1.28-2.135c-.202-.323-.202-.712 0-.97l1.483-2.588c.134-.194.134-.388.134-.582q0-.291-.202-.582L5.723 8.83c-.202-.323-.202-.711 0-.97l1.28-2.135c.068-.13.202-.323.405-.388m2.089 10.027s.362.064.564.064H12.8c.404 0 .809-.129 1.011-.517l1.415-2.329a1.19 1.19 0 0 0 0-1.164L13.81 9.024c-.202-.388-.61-.453-1.015-.453H9.497l1.684 2.847a1.19 1.19 0 0 1 0 1.164z"
          />
          <path
            fill="currentColor"
            d="M8.134 5.143h.139c-.551 0-.456.377-.414.453L9.648 8.57l1.72 2.847a1.17 1.17 0 0 1 0 1.164l-1.72 2.846s-1.445 2.394-1.789 2.911c0 0-.275.518.413.518h6.605-6.742c-.07 0-.428.03-.703-.164a2 2 0 0 1-.42-.397L5.726 16.14c-.206-.323-.206-.712 0-.97l1.49-2.6c.084-.137.126-.377.126-.57 0-.112-.075-.334-.2-.576l-1.41-2.586c-.207-.324-.207-.711 0-.97l1.303-2.2a1 1 0 0 1 .43-.4c.215-.12.462-.125.67-.125"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DMT__a)"
            d="M7.408 5.337q.303-.194.606-.194h6.74c.404 0 .808.194 1.01.582l3.37 5.693q.303.582 0 1.164l-3.37 5.693c-.202.388-.606.582-1.01.582h-6.74q-.303 0-.606-.194c-.135-.13-.337-.259-.405-.388l-1.28-2.135c-.202-.323-.202-.712 0-.97l1.483-2.588c.134-.194.134-.388.134-.582q0-.291-.202-.582L5.723 8.83c-.202-.323-.202-.711 0-.97l1.28-2.135c.068-.13.202-.323.405-.388m2.089 10.027s.362.064.564.064H12.8c.404 0 .809-.129 1.011-.517l1.415-2.329a1.19 1.19 0 0 0 0-1.164L13.81 9.024c-.202-.388-.61-.453-1.015-.453H9.497l1.684 2.847a1.19 1.19 0 0 1 0 1.164z"
          />
          <path
            fill="url(#DMT__b)"
            d="M8.134 5.143h.139c-.551 0-.456.377-.414.453L9.648 8.57l1.72 2.847a1.17 1.17 0 0 1 0 1.164l-1.72 2.846s-1.445 2.394-1.789 2.911c0 0-.275.518.413.518h6.605-6.742c-.07 0-.428.03-.703-.164a2 2 0 0 1-.42-.397L5.726 16.14c-.206-.323-.206-.712 0-.97l1.49-2.6c.084-.137.126-.377.126-.57 0-.112-.075-.334-.2-.576l-1.41-2.586c-.207-.324-.207-.711 0-.97l1.303-2.2a1 1 0 0 1 .43-.4c.215-.12.462-.125.67-.125"
          />
          <defs>
            <linearGradient
              id="DMT__a"
              x1="19.286"
              x2="8.295"
              y1="12.001"
              y2="12.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01FBDF" />
              <stop offset="1" stopColor="#009299" />
            </linearGradient>
            <linearGradient
              id="DMT__b"
              x1="5.571"
              x2="11.581"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00BD97" />
              <stop offset="1" stopColor="#02F8AF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenDMT.displayName = 'DMT'

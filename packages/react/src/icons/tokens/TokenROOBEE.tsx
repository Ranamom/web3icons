import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenROOBEE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M3.428 11.829v-.686h-.857v3h.857v-1.397l1.402-.918-.386-.685zm3.215 1.457A.634.634 0 0 1 6 12.643c0-.365.274-.643.643-.643.368 0 .643.257.643.643a.62.62 0 0 1-.643.643m0-2.143c-.879 0-1.5.685-1.5 1.5 0 .814.6 1.5 1.5 1.5s1.5-.686 1.5-1.5c0-.862-.622-1.5-1.5-1.5m3.428 2.143c-.385 0-.655-.27-.643-.643.013-.369.253-.639.643-.643s.643.27.643.643-.257.643-.643.643m0-2.143a1.457 1.457 0 0 0-1.5 1.5c0 .814.622 1.5 1.5 1.5.879 0 1.5-.686 1.5-1.5 0-.857-.66-1.5-1.5-1.5m3.429 2.143c-.36 0-.66-.258-.643-.643.017-.386.27-.643.643-.643s.643.257.643.643a.62.62 0 0 1-.643.643m0-2.143a2.1 2.1 0 0 0-.827.21v-1.067H12v2.357c0 .814.6 1.5 1.5 1.5s1.5-.686 1.5-1.5c0-.815-.686-1.5-1.5-1.5m2.786 1.285c0-.377.24-.6.642-.6.403 0 .643.223.643.6zm.642-1.285c-.741 0-1.508.493-1.5 1.5a1.45 1.45 0 0 0 1.5 1.5c.429 0 .926-.159 1.166-.399l.047-.043-.48-.433c-.145.142-.488.232-.685.232-.442 0-.69-.313-.69-.643h2.142V12.6c0-.866-.685-1.457-1.5-1.457m2.786 1.285c0-.334.214-.6.643-.6s.643.27.643.6zm.643-1.285c-.707 0-1.504.445-1.5 1.5s.87 1.487 1.607 1.487c.429 0 .814-.146 1.059-.386l.043-.043-.476-.433a.9.9 0 0 1-.579.232c-.433 0-.797-.283-.797-.643h2.143V12.6c0-.866-.686-1.457-1.5-1.457"
      />
    </BaseIcon>
  ),
)

TokenROOBEE.displayName = 'ROOBEE'

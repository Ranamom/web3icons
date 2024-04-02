import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenFOREX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.006 8.113a1 1 0 0 1-.246.214l-1.472-.7a2.8 2.8 0 0 1 .685-.097c.287-.02.576.019.849.112.205.085.338.265.184.471m-3.774-1.132 1.291.612a3.5 3.5 0 0 1-.821.156c-.232 0-.605-.069-.72-.3-.089-.183.08-.35.25-.468"
          />
          <path
            fill="currentColor"
            d="m10.436 5.486-3.677 1.68a.553.553 0 0 0-.013 1.003l3.617 1.74a3.85 3.85 0 0 0 3.343-.009l3.553-1.735a.55.55 0 0 0-.013-.999l-3.609-1.671a3.85 3.85 0 0 0-3.201-.01m3.81 3.398-.415-.196c-.545.239-1.245.304-1.702.312l-.172-.287.11-.003c.456-.014.955-.029 1.375-.207l-1.559-.739c-.45.15-.91.273-1.387.246-.33-.026-.806-.146-.986-.458-.107-.193-.017-.373.129-.523q.12-.12.254-.209l-.464-.22.343-.171.453.216c.468-.192 1.009-.216 1.505-.216l.03.227h-.046c-.274 0-.8-.002-1.162.144l1.377.656a5 5 0 0 1 .963-.179c.45-.034.908 0 1.255.155.292.128.536.42.343.741a1.2 1.2 0 0 1-.339.34l.42.2zm-9.103 5.83V9.67c0-.613.643-1.02 1.209-.763l3.724 1.706a2.55 2.55 0 0 1 1.496 2.318v5.075a.85.85 0 0 1-1.213.762l-3.729-1.74a2.56 2.56 0 0 1-1.487-2.314M9.61 16.57c-.172.107-.343.145-.592.145-.741 0-1.534-.668-1.92-1.602a3.9 3.9 0 0 1-.265-1.179l-.403-.171.205-.408.18.078a8 8 0 0 1 .043-.622l-.428-.184.205-.403.296.129.009-.06c.141-.712.45-1.149 1.114-1.149.527 0 1.097.386 1.539.969-.043.15-.112.355-.236.557-.266-.557-.669-.943-1.132-.943-.497 0-.741.304-.861.81l1.77.758-.206.408-1.645-.708a5 5 0 0 0-.043.622l1.521.656-.206.402-1.281-.552c.034.257.094.514.193.745.3.742.9 1.282 1.487 1.282a.8.8 0 0 0 .416-.095c.064.108.15.283.24.515m8.039-7.651a.85.85 0 0 1 1.208.767v5.044a2.55 2.55 0 0 1-1.487 2.314l-3.728 1.736a.85.85 0 0 1-1.213-.763v-5.074a2.55 2.55 0 0 1 1.495-2.314zm-1.175 2.245.489-.167-1.106 3.077v.27l.857-.428v.428l-.857.429v.544l.857-.424v.429l-.857.428v.733l-.428.231v-.754l-.857.429v-.429l.857-.428v-.549l-.857.429v-.429l.857-.424v-.215l-1.247-2.061.471-.274.951 1.628z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2A313E"
            d="m10.435 5.486-3.677 1.68a.553.553 0 0 0-.013 1.003l3.618 1.74a3.85 3.85 0 0 0 3.342-.009l3.553-1.735a.55.55 0 0 0-.013-.999l-3.608-1.671a3.85 3.85 0 0 0-3.202-.01m-5.292 9.232V9.67c0-.613.642-1.02 1.208-.763l3.724 1.706a2.55 2.55 0 0 1 1.496 2.318v5.075a.85.85 0 0 1-1.213.762l-3.728-1.74a2.56 2.56 0 0 1-1.487-2.314zm13.714-5.031a.85.85 0 0 0-1.209-.767l-3.724 1.71a2.55 2.55 0 0 0-1.496 2.314v5.074a.85.85 0 0 0 1.213.763l3.729-1.736a2.55 2.55 0 0 0 1.487-2.314z"
          />
          <path
            fill="#A9E3B0"
            d="M14.246 8.884 9.429 6.6l.343-.171 4.8 2.284zM12.129 9l-.172-.287c.536-.017 1.149-.017 1.629-.279.21-.12.343-.222.42-.321.154-.206.021-.386-.184-.471a2.2 2.2 0 0 0-.849-.112 2.7 2.7 0 0 0-.72.107c-.57.197-1.149.407-1.757.373-.33-.026-.806-.146-.986-.458-.107-.193-.017-.373.129-.523.548-.549 1.367-.6 2.091-.6l.03.227c-.283 0-.943-.013-1.32.197-.171.099-.587.33-.458.596.115.231.488.3.72.3a3.5 3.5 0 0 0 1.058-.24 5 5 0 0 1 1.132-.232c.45-.034.908 0 1.255.155.292.128.536.42.343.741-.428.673-1.671.814-2.361.827m-2.52 7.569c-.172.107-.343.145-.592.145-.741 0-1.534-.668-1.92-1.602a3.9 3.9 0 0 1-.265-1.179l-.403-.171.205-.408.18.078a8 8 0 0 1 .043-.622l-.428-.184.205-.403.296.129.009-.06c.141-.712.45-1.149 1.114-1.149.527 0 1.097.386 1.539.969-.043.15-.112.355-.236.557-.266-.557-.669-.943-1.132-.943-.497 0-.741.304-.861.81l1.77.758-.206.408-1.645-.708a5 5 0 0 0-.043.622l1.521.656-.206.402-1.281-.552c.034.257.094.514.193.745.3.742.9 1.282 1.487 1.282a.8.8 0 0 0 .416-.095c.064.108.15.283.24.515m6.248-2.495 1.106-3.077-.489.167-.87 2.473-.951-1.628-.471.274 1.247 2.061v.215l-.857.424v.429l.857-.429v.549l-.857.428v.429l.857-.429v.754l.428-.231v-.733l.857-.428v-.429l-.857.424v-.544l.857-.429v-.428l-.857.428z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenFOREX.displayName = 'FOREX'

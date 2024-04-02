import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenAGLA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.039 13.714c-1.067.155-2.272 1.222-2.825 1.907a6.853 6.853 0 0 0 11.383.395l.013-.159c-.857-1.371-2.07-2.001-2.571-2.143.715-1.855 1.675-6-.253-6-1.929 0-2.46 2.859-2.533 4.5h-.429c-.072-1.641-.681-4.5-2.571-4.5-1.967 0-.93 4.145-.214 6m3.175 3.215a.214.214 0 0 0-.428 0 .8.8 0 0 1-.129.471.34.34 0 0 1-.3.172c-.373 0-.428-.172-.428-.215a.214.214 0 1 0-.429 0c0 .386.373.643.857.643.3 0 .519-.154.66-.364.129.188.335.364.626.364.484 0 .857-.257.857-.643a.214.214 0 0 0-.428 0c0 .043-.056.215-.43.215-.106 0-.21-.07-.3-.215a1 1 0 0 1-.128-.428"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#ABABAB"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
          />
          <path
            fill="#fff"
            d="M9.038 13.714c-1.067.155-2.271 1.222-2.824 1.907a6.853 6.853 0 0 0 11.383.395l.013-.159c-.858-1.371-2.07-2.001-2.572-2.143.716-1.855 1.676-6-.253-6s-2.46 2.859-2.533 4.5h-.428c-.073-1.641-.682-4.5-2.572-4.5-1.967 0-.93 4.145-.214 6m3.176 3.215a.214.214 0 0 0-.429 0 .8.8 0 0 1-.128.471.34.34 0 0 1-.3.172c-.373 0-.429-.172-.429-.215a.214.214 0 0 0-.428 0c0 .386.372.643.857.643.3 0 .518-.154.66-.364.128.188.334.364.625.364.485 0 .858-.257.858-.643a.214.214 0 0 0-.429 0c0 .043-.056.215-.429.215-.107 0-.21-.07-.3-.215a1 1 0 0 1-.128-.428"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenAGLA.displayName = 'AGLA'

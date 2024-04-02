import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTROY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.571 10.491v1.329c.017.219.167.608.66.608H19.5V14.4c0 .09.068.171.214.171.163 0 .214-.102.214-.171v-1.972h1.299a.66.66 0 0 0 .63-.66v-1.277a.206.206 0 0 0-.21-.205c-.142 0-.219.103-.219.205v1.218c0 .09-.111.274-.325.29-.146.01-.985.006-1.769.004l-1-.003c-.09-.017-.326-.094-.334-.291a38 38 0 0 1 0-1.218c0-.068-.022-.205-.215-.205-.192 0-.214.137-.214.205"
          />
          <path
            fill="currentColor"
            d="M13.148 10.286h2.82c.317 0 .746.201.746.737v2.764c0 .283-.189.784-.746.784h-2.82c-.244 0-.711-.321-.715-.784-.006-.32-.004-1.172-.002-1.907l.002-.857c.004-.245.158-.737.715-.737m.215.428h2.468c.249 0 .455.107.455.536v2.422c0 .227-.043.47-.489.47h-2.473c-.197 0-.463-.072-.463-.44-.006-.261-.003-1.142-.001-1.842l.001-.721c.005-.197.052-.425.502-.425"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M7.286 10.856v3.475c0 .138.051.24.214.24.184 0 .214-.141.214-.24v-3.325c0-.202.137-.296.193-.292h2.88c.249 0 .356.21.356.262 0 .257.008.553 0 .758a.274.274 0 0 1-.27.266H9.592c-.065 0-.22.009-.292.124-.073.116-.009.253.034.305l1.809 2.014c.086.086.287.188.386.043.103-.142-.03-.27-.112-.36l-1.474-1.697h1.029a.635.635 0 0 0 .6-.553v-.943c-.013-.506-.442-.643-.648-.647H7.907c-.458 0-.643.368-.617.57zm-1.127-.57H1.933c-.064 0-.219.043-.219.218 0 .137.146.193.219.21h1.924v3.665c0 .085.082.192.215.192.137 0 .214-.09.214-.192v-3.665h1.873c.09.005.27-.008.27-.201 0-.189-.18-.223-.27-.227"
          />
        </>
      ) : (
        <>
          <path
            fill="#82DEFF"
            d="M17.57 10.491v1.329c.018.219.168.608.66.608h1.27V14.4c0 .09.068.171.213.171.163 0 .215-.102.215-.171v-1.972h1.298a.66.66 0 0 0 .63-.66v-1.277a.206.206 0 0 0-.21-.205c-.141 0-.218.103-.218.205v1.218c0 .09-.112.274-.326.29-.145.01-.984.006-1.768.004l-1-.003c-.09-.017-.326-.094-.335-.291a39 39 0 0 1 0-1.218c0-.068-.021-.205-.214-.205s-.214.137-.214.205"
          />
          <path
            fill="#82DEFF"
            d="M13.148 10.286h2.82c.317 0 .745.201.745.737v2.764c0 .283-.188.784-.745.784h-2.82c-.245 0-.712-.321-.716-.784-.006-.32-.004-1.172-.002-1.907l.002-.857c.004-.245.159-.737.716-.737m.214.428h2.469c.248 0 .454.107.454.536v2.422c0 .227-.043.47-.489.47h-2.472c-.197 0-.463-.072-.463-.44-.006-.261-.004-1.142-.002-1.842l.002-.721c.004-.197.051-.425.501-.425"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#82DEFF"
            d="M7.285 10.856v3.475c0 .138.052.24.215.24.184 0 .214-.141.214-.24v-3.325c0-.202.137-.296.193-.292h2.88c.248 0 .355.21.355.262 0 .257.009.553 0 .758a.274.274 0 0 1-.27.266H9.591c-.064 0-.219.009-.291.124-.073.116-.009.253.034.305l1.808 2.014c.086.086.288.188.386.043.103-.142-.03-.27-.111-.36l-1.475-1.697h1.029a.635.635 0 0 0 .6-.553v-.943c-.013-.506-.441-.643-.647-.647H7.907c-.459 0-.643.368-.617.57zm-1.127-.57H1.932c-.064 0-.218.043-.218.218 0 .137.146.193.218.21h1.925v3.665c0 .085.081.192.214.192.137 0 .214-.09.214-.192v-3.665h1.873c.09.005.27-.008.27-.201 0-.189-.18-.223-.27-.227"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenTROY.displayName = 'TROY'

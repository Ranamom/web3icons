import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGLMR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.143 9.986a4.886 4.886 0 0 1 4.929-4.843A4.885 4.885 0 0 1 18 9.986a.3.3 0 0 1-.3.3H8.443a.3.3 0 0 1-.3-.3m-1.286 1.585c0-.235.159-.428.356-.428h11.289c.197 0 .355.193.355.428 0 .236-.158.429-.355.429H7.213c-.197 0-.356-.193-.356-.429m-2.143 1.286c0-.236.163-.428.36-.428h8.28c.198 0 .36.192.36.428s-.162.429-.36.429h-8.28c-.197 0-.36-.193-.36-.429m2.503.857c-.197 0-.36.193-.36.429s.163.428.36.428h9.995c.197 0 .36-.192.36-.428s-.163-.429-.36-.429zm-2.074 1.714c0-.235.167-.428.369-.428h3.977c.201 0 .368.193.368.428 0 .236-.167.43-.368.43H5.512c-.202 0-.369-.194-.369-.43m7.204.858c-.193 0-.347.192-.347.428s.154.429.347.429h4.882c.193 0 .347-.193.347-.429 0-.235-.154-.428-.347-.428h-4.886zM9 18c0-.236.154-.429.347-.429h4.882c.193 0 .347.193.347.429s-.154.428-.347.428H9.343c-.193 0-.347-.192-.347-.428zm1.65-3c-.201 0-.364.193-.364.428 0 .236.163.43.364.43h8.272c.201 0 .364-.194.364-.43 0-.235-.163-.428-.364-.428zm-5.078-3.43a.429.429 0 1 1 .857 0 .429.429 0 0 1-.857 0m-1.715.857a.428.428 0 1 0 0 .857.428.428 0 0 0 0-.857m1.715 1.715a.429.429 0 1 1 .857 0 .429.429 0 0 1-.857 0M4.286 15a.429.429 0 1 0 0 .858.429.429 0 0 0 0-.858m6.428 1.714a.428.428 0 1 1 .857 0 .428.428 0 0 1-.857 0m-2.571.857a.429.429 0 1 0 0 .857.429.429 0 0 0 0-.857"
          />
        </>
      ) : (
        <>
          <path
            fill="#53CBC9"
            d="M8.143 9.986a4.886 4.886 0 0 1 4.929-4.843A4.885 4.885 0 0 1 18 9.986a.3.3 0 0 1-.3.3H8.443a.3.3 0 0 1-.3-.3"
          />
          <path
            fill="#CB1F7A"
            d="M6.857 11.571c0-.235.159-.428.356-.428h11.289c.197 0 .355.193.355.428 0 .236-.158.429-.355.429H7.213c-.197 0-.356-.193-.356-.429m-2.143 1.286c0-.236.163-.428.36-.428h8.28c.198 0 .36.192.36.428s-.162.429-.36.429h-8.28c-.197 0-.36-.193-.36-.429m2.503.857c-.197 0-.36.193-.36.429s.163.428.36.428h9.995c.197 0 .36-.192.36-.428s-.163-.429-.36-.429zm-2.074 1.714c0-.235.167-.428.369-.428h3.977c.201 0 .368.193.368.428 0 .236-.167.43-.368.43H5.512c-.202 0-.369-.194-.369-.43m7.204.858c-.193 0-.347.192-.347.428s.154.429.347.429h4.882c.193 0 .347-.193.347-.429 0-.235-.154-.428-.347-.428h-4.886zM9 18c0-.236.154-.429.347-.429h4.882c.193 0 .347.193.347.429s-.154.428-.347.428H9.343c-.193 0-.347-.192-.347-.428zm1.65-3c-.201 0-.364.193-.364.428 0 .236.163.43.364.43h8.272c.201 0 .364-.194.364-.43 0-.235-.163-.428-.364-.428zm-5.078-3.43a.429.429 0 1 1 .857 0 .429.429 0 0 1-.857 0m-1.715.857a.428.428 0 1 0 0 .857.428.428 0 0 0 0-.857m1.715 1.715a.429.429 0 1 1 .857 0 .429.429 0 0 1-.857 0M4.286 15a.429.429 0 1 0 0 .858.429.429 0 0 0 0-.858m6.428 1.714a.428.428 0 1 1 .857 0 .428.428 0 0 1-.857 0m-2.571.857a.429.429 0 1 0 0 .857.429.429 0 0 0 0-.857"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenGLMR.displayName = 'GLMR'

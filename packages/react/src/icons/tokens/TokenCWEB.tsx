import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenCWEB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 6.428a.428.428 0 1 0 0-.856.428.428 0 0 0 0 .856M13.286 6c0 .073-.005.15-.018.218l3.343 1.925A1.286 1.286 0 1 1 18 10.213v2.216h-.857v-2.216a1.285 1.285 0 0 1-.858-1.273l-3.437-1.972q-.186.162-.42.245v2.215h-.857V7.213A1.286 1.286 0 1 1 13.286 6M12 18.429a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m0 .857a1.284 1.284 0 0 0 1.286-1.342l3.437-1.975a1.286 1.286 0 1 0-.035-1.903L14.7 12.913l-.429.745 2.027 1.166a1.3 1.3 0 0 0 .005.395l-3.343 1.924a1.286 1.286 0 0 0-1.685-.206l-2.142-1.239-.429.746 2.061 1.192A1.286 1.286 0 0 0 12 19.286M6.857 9A.429.429 0 1 1 6 9a.429.429 0 0 1 .857 0m.857 0a1.29 1.29 0 0 1-.857 1.213v3.574c.167.06.32.153.45.274L9.3 12.913l.428.745-2.027 1.166A1.286 1.286 0 1 1 6 13.787v-3.574a1.285 1.285 0 1 1 1.264-2.186l-.021-.043L9.47 6.698l.429.746-2.216 1.277c.021.086.03.185.03.279m-1.286 6.429a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .857M18 8.999a.429.429 0 1 1-.858 0A.429.429 0 0 1 18 9m-6 3.43a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m.428.784a1.286 1.286 0 0 0 .845-1.389L15.3 10.66l-.429-.746-1.993 1.148a1.28 1.28 0 0 0-1.727-.03L9.214 9.917l-.428.742 1.945 1.122a1.294 1.294 0 0 0 .84 1.432v2.216h.857zM18 15a.429.429 0 1 1-.858 0A.429.429 0 0 1 18 15"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#4F4F6F"
            d="M12 6.428a.428.428 0 1 0 0-.856.428.428 0 0 0 0 .856M13.286 6c0 .073-.005.15-.018.218l3.343 1.925A1.286 1.286 0 1 1 18 10.213v2.216h-.857v-2.216a1.285 1.285 0 0 1-.858-1.273l-3.437-1.972q-.186.162-.42.245v2.215h-.857V7.213A1.286 1.286 0 1 1 13.286 6M12 18.429a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m0 .857a1.284 1.284 0 0 0 1.286-1.342l3.437-1.975a1.286 1.286 0 1 0-.035-1.903L14.7 12.913l-.429.745 2.027 1.166a1.3 1.3 0 0 0 .005.395l-3.343 1.924a1.286 1.286 0 0 0-1.685-.206l-2.142-1.239-.429.746 2.061 1.192A1.286 1.286 0 0 0 12 19.286M6.857 9A.429.429 0 1 1 6 9a.429.429 0 0 1 .857 0m.857 0a1.29 1.29 0 0 1-.857 1.213v3.574c.167.06.32.153.45.274L9.3 12.913l.428.745-2.027 1.166A1.286 1.286 0 1 1 6 13.787v-3.574a1.285 1.285 0 1 1 1.264-2.186l-.021-.043L9.47 6.698l.429.746-2.216 1.277c.021.086.03.185.03.279m-1.286 6.429a.429.429 0 1 0 0-.858.429.429 0 0 0 0 .857M18 8.999a.429.429 0 1 1-.858 0A.429.429 0 0 1 18 9m-6 3.43a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857m.428.784a1.286 1.286 0 0 0 .845-1.389L15.3 10.66l-.429-.746-1.993 1.148a1.28 1.28 0 0 0-1.727-.03L9.214 9.917l-.428.742 1.945 1.122a1.294 1.294 0 0 0 .84 1.432v2.216h.857zM18 15a.429.429 0 1 1-.858 0A.429.429 0 0 1 18 15"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenCWEB.displayName = 'CWEB'

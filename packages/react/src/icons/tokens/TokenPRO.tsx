import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPRO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.714 15.824c0 .249-.239.461-.489.461H9.23a.487.487 0 0 1-.477-.484v-.159c0-.022.022-.34.227-.725.34-.635.977-1.089 1.885-1.406 1.305-.434 2.907-.7 3.975-1.632.773-.658.995-1.686 1.018-2.683.394.283.857.569.857 1.118zm-2.57-6.628c0 .499-.009 1.028-.372 1.368-.864.796-2.358.98-3.43 1.337-1.659.544-2.477 1.497-2.863 2.2a3 3 0 0 0-.181.408c0 .022-.012.022-.012.045v-4.217c0-.499.375-.793.443-.839l3.817-2.494c.431-.294.885 0 .885 0l1.713 1.126zm4.284 6.537v-5.396c0-.25-.068-1.496-1.226-2.267l-.916-.643V5.554c0-.272-.265-.41-.515-.41h-.694c-.273 0-.506.138-.506.41v.74l-1.163-.74c-.704-.453-1.817-.635-2.794 0L6.798 8.048c-.227.136-1.227.884-1.227 2.267v5.396c0 .52.114.952.364 1.314.181.295.454.522.772.68A3.1 3.1 0 0 0 7.843 18h8.337c.022 0 .568 0 1.135-.295.341-.158.591-.385.795-.68.205-.34.318-.77.318-1.292"
          />
        </>
      ) : (
        <>
          <path
            fill="#38A6FA"
            d="M16.714 15.824c0 .249-.239.461-.489.461H9.23a.487.487 0 0 1-.477-.484v-.159c0-.022.022-.34.227-.725.34-.635.977-1.089 1.885-1.406 1.305-.434 2.907-.7 3.975-1.632.773-.658.995-1.686 1.018-2.683.394.283.857.569.857 1.118zm-2.57-6.628c0 .499-.009 1.028-.372 1.368-.864.796-2.358.98-3.43 1.337-1.659.544-2.477 1.497-2.863 2.2a3 3 0 0 0-.181.408c0 .022-.012.022-.012.045v-4.217c0-.499.375-.793.443-.839l3.817-2.494c.431-.294.885 0 .885 0l1.713 1.126zm4.284 6.537v-5.396c0-.25-.068-1.496-1.226-2.267l-.916-.643V5.554c0-.272-.265-.41-.515-.41h-.694c-.273 0-.506.138-.506.41v.74l-1.163-.74c-.704-.453-1.817-.635-2.794 0L6.798 8.048c-.227.136-1.227.884-1.227 2.267v5.396c0 .52.114.952.364 1.314.181.295.454.522.772.68A3.1 3.1 0 0 0 7.843 18h8.337c.022 0 .568 0 1.135-.295.341-.158.591-.385.795-.68.205-.34.318-.77.318-1.292"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenPRO.displayName = 'PRO'

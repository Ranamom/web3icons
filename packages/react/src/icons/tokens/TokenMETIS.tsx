import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMETIS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.85 12.66c.15-.274.407-.57.639-.866.625.009 1.05.035 1.654-.287.214-.111.27-.103.334-.351-.745 0-.908.086-1.517.231.399-.574 1.946-.943 2.04-1.671-.536.12-.728.21-1.097.488l-.879.712c.039-.24.206-.497.3-.712.138-.321.099-.441.189-.775-.261.025-.394.313-.557.544-.716 1.071-.446 1.941-1.239 2.409.052-.532.262-1.132.103-1.728-.45-.042-.501.973-.501 1.552 0 1.333.021.686-.437 1.637-.035-.369-.005-1.221-.108-1.479-.124-.321-.03-.21-.291-.214-.189.352-.064 1.333.017 1.727.064.335.15.463.064.742-.038.12-.205.553-.27.681-.115-.536-.411-1.487-.848-1.431-.124.514.458 1.44.754 1.671-.008.472-.137.609-.15 1.174.077-.137.099-.21.137-.36.035-.145.065-.321.077-.471.57-.017 1.672-.137 1.775-.9-.472-.154-1.265.386-1.629.587.052-.287.283-.9.437-1.088.442.111 1.599.034 1.749-.592l-1.676.322.566-1.042c.617 0 1.886-.188 2.031-.784-.724-.086-1.093.163-1.671.274z"
          />
          <path
            fill="currentColor"
            d="M12.017 4.714c4.012 0 7.269 3.317 7.269 7.406 0 4.123-3.189 6.257-5.422 7.166h-.013c-.54-.686-.342-.557.223-1.942.412-1.007.343-1.148.498-1.603.06-.17.175-.3.244-.428 1.958-.026 2.113-.047 2.1-.857 0-.553-.035-.356.197-.707-.163-.258-.12-.356-.064-.54.098-.322-.013-.283-.086-.562.24-.214.463-.223.608-.548-.162-.266-.407-.39-.65-.588-.43-.35-.627-.625-.635-.848-.013-.3.261-.51.265-.686.01-.201-.252-.514-.377-.741l-.385-.857c-.42-1.037-.995-1.14-2.199-1.277-.977-.116-1.577-.25-2.087-.245-.643.005-1.149.364-2.1 1.114a6.6 6.6 0 0 1-1.363.815c-.66.505-1.586 1.286-1.594 2.13-.013.364-.009.724-.017 1.084-.022.977.703 1.153.814 1.397.086.18.034.369.15.626.176.386.154.163.407.369.223.17.322.728.476.998.308.54 1.53.823 1.765 1.011-.038.665-.72 1.822-1.2 2.392a7.43 7.43 0 0 1-4.127-6.681c.03-4.08 3.288-7.398 7.303-7.398"
          />
        </>
      ) : (
        <>
          <path
            fill="#00D8C1"
            d="M11.85 12.66c.15-.274.407-.57.639-.866.625.009 1.05.035 1.654-.287.214-.111.27-.103.334-.351-.745 0-.908.086-1.517.231.399-.574 1.946-.943 2.04-1.671-.536.12-.728.21-1.097.488l-.879.712c.039-.24.206-.497.3-.712.138-.321.099-.441.189-.775-.261.025-.394.313-.557.544-.716 1.071-.446 1.941-1.239 2.409.052-.532.262-1.132.103-1.728-.45-.042-.501.973-.501 1.552 0 1.333.021.686-.437 1.637-.035-.369-.005-1.221-.108-1.479-.124-.321-.03-.21-.291-.214-.189.352-.064 1.333.017 1.727.064.335.15.463.064.742-.038.12-.205.553-.27.681-.115-.536-.411-1.487-.848-1.431-.124.514.458 1.44.754 1.671-.008.472-.137.609-.15 1.174.077-.137.099-.21.137-.36.035-.145.065-.321.077-.471.57-.017 1.672-.137 1.775-.9-.472-.154-1.265.386-1.629.587.052-.287.283-.9.437-1.088.442.111 1.599.034 1.749-.592l-1.676.322.566-1.042c.617 0 1.886-.188 2.031-.784-.724-.086-1.093.163-1.671.274z"
          />
          <path
            fill="#00D8C1"
            d="M12.017 4.714c4.011 0 7.268 3.317 7.268 7.406 0 4.123-3.188 6.257-5.421 7.166h-.013c-.54-.686-.343-.557.223-1.942.411-1.007.343-1.148.497-1.603.06-.17.176-.3.244-.428 1.959-.026 2.113-.047 2.1-.857 0-.553-.034-.356.198-.707-.163-.258-.12-.356-.065-.54.099-.322-.013-.283-.085-.562.24-.214.462-.223.608-.548-.163-.266-.407-.39-.651-.588-.429-.35-.626-.625-.635-.848-.012-.3.262-.51.266-.686.009-.201-.253-.514-.377-.741l-.386-.857c-.42-1.037-.994-1.14-2.198-1.277-.977-.116-1.578-.25-2.088-.245-.642.005-1.148.364-2.1 1.114a6.6 6.6 0 0 1-1.362.815c-.66.505-1.586 1.286-1.595 2.13-.013.364-.008.724-.017 1.084-.021.977.703 1.153.814 1.397.086.18.035.369.15.626.176.386.155.163.408.369.222.17.321.728.475.998.309.54 1.53.823 1.766 1.011-.039.665-.72 1.822-1.2 2.392a7.43 7.43 0 0 1-4.127-6.681c.03-4.08 3.287-7.398 7.303-7.398"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMETIS.displayName = 'METIS'

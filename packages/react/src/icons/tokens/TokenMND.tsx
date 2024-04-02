import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.696 5.404a.345.345 0 1 0 0-.69.345.345 0 0 0 0 .69M9.973 7.607a2.28 2.28 0 0 0-2.867-.197q-.17.121-.287.313-.008.012-.022 0c-.008 0-.013-.013-.004-.021.129-.21.279-.39.463-.55a5.55 5.55 0 0 1 3.364-1.405c.06 0 .095.022.095.082.017 1.054 0 2.057 0 3.008 0 .099.012.202-.005.317-.021.12-.034.116-.043 0a2.22 2.22 0 0 0-.694-1.542zm7.5 3.502c.099-.21.172-.373.412-.472.17-.073.38.09.47.223.164.227.035.557-.213.656-.172.064-.343.025-.502-.107a.13.13 0 0 0-.124-.022 75 75 0 0 0-1.663.536 1.6 1.6 0 0 0-.313.15.12.12 0 0 0-.051.06c-.095.24-.215.429-.51.386-.446-.078-.412-.545-.232-.857a.12.12 0 0 0 .013-.095l-.493-1.706a.15.15 0 0 0-.102-.107c-.378-.102-.63-.454-.305-.797.107-.12.09-.283.065-.428l-.283-1.672a.36.36 0 0 0-.24-.296.14.14 0 0 1-.065-.05c-.364-.537.313-1.08.746-.498.021.026.043.043.073.043.24.06 1.05.244 1.247.026.416-.45 1.071.15.656.6-.283.3-.6.12-.78-.185a.13.13 0 0 0-.099-.06c-.321-.03-.75-.163-1.037-.051-.223.085-.3.291-.244.617q.135.772.244 1.504c.043.287.163.3.343.472.351.308-.086.523.008.853l.446 1.572q.044.15.172.215c.197.094.321.201.548.128q.844-.271 1.744-.574a.11.11 0 0 0 .07-.064m-.094-3.737a.368.368 0 1 0 .112-.728.368.368 0 0 0-.112.728"
          />
          <path
            fill="currentColor"
            d="m15.373 8.173.052.137q.39.771.762 1.479c.15.283.429.068.6.411a.37.37 0 0 1 0 .343c-.128.27-.454.377-.703.197-.23-.171-.132-.476-.077-.716A.16.16 0 0 0 16 9.926a26 26 0 0 0-.9-1.706.1.1 0 0 0-.086-.047c-.51-.009-.66-.681-.129-.866.322-.111.605.172.558.48a.086.086 0 0 0 .043.099l.784.48q.045.025.09.013.088-.015.171-.043c.24-.095.48.004.566.24.214.617-.789.93-.857.111a.1.1 0 0 0-.035-.068 4 4 0 0 0-.788-.48c-.043-.022-.052-.009-.043.034m2.619 1.491a.261.261 0 1 0 0-.522.261.261 0 0 0 0 .522m-8.07 8.002.064-.03a6.3 6.3 0 0 0 1.453-1.067l.514-.506q.063-.064.086.026c.085.467.197.943.171 1.414a4.55 4.55 0 0 1-.514 1.946 1.3 1.3 0 0 1-.129.205q-.108.134-.077-.034a3.74 3.74 0 0 0-.171-2.057q-.063-.15-.197-.06a9.7 9.7 0 0 1-2.045 1.106c-.441.158-1.011.197-1.213-.339a1.7 1.7 0 0 1-.11-.591.31.31 0 0 0-.125-.249l-.279-.206a.237.237 0 0 1-.043-.334l.082-.099q.038-.05-.026-.042a.74.74 0 0 1-.476-.112.1.1 0 0 1-.043-.051.48.48 0 0 1 .06-.39c.04-.065.03-.137-.02-.215a.16.16 0 0 0-.13-.068c-.407-.009-.784.064-.977-.39-.043-.094-.111-.171-.06-.283l.485-1.007c.085-.18.171-.39.06-.574a4.9 4.9 0 0 1-.639-1.818 8.5 8.5 0 0 1 0-1.85h.021l.01.016c.05.536.093 1.102.325 1.56a.05.05 0 0 0 .03.026.05.05 0 0 0 .043-.009 2.5 2.5 0 0 1 .985-.364c.373-.056 1.222-.013 1.385.403a.064.064 0 0 1-.065.086c-.643-.06-1.783.081-2.07.763q-.075.174.095.085a2.16 2.16 0 0 1 2.07-.116c.03.018.034.035.012.065a2.67 2.67 0 0 0-.304 2.97q.212.41.579.595c.03.013.06.018.09 0a.9.9 0 0 0 .347-.214c.555-.53.918-1.23 1.028-1.988a.04.04 0 0 1 .03-.02.04.04 0 0 1 .035.011q.437.334.9.502.04.018.047.055c.021.112 0 .206.047.317a.73.73 0 0 0 .317.335.103.103 0 0 1 .047.132 6.8 6.8 0 0 1-1.731 2.405c-.06.051-.047.073.026.06M6.784 15.35a.1.1 0 0 1-.02-.055l-.022-1.286q.001-.122-.043-.013a4.5 4.5 0 0 0-.197.6c-.06.236-.065.485-.142.716a.065.065 0 0 0 .043.086l.369.077a.04.04 0 0 0 .038-.009.04.04 0 0 0 .013-.043.2.2 0 0 0-.043-.068zm5.238-.466c.454.095.75-.094.745-.565q-.001-.052.043-.078a.7.7 0 0 1 .18-.068c.047-.013.095-.021.142-.043a2.26 2.26 0 0 0 1.435-1.971c.026-.343-.055-.72-.248-1.14-.086-.202-.249-.386-.403-.57-.086-.099-.176-.202-.253-.305a1.9 1.9 0 0 1-.386-1.11c.009-1.135.009-3.651.009-3.651 0-.21-.386-.257-.557-.266-.416-.026-1.072-.06-1.479.095a.15.15 0 0 0-.068.05l-.005.014c-.017.021-.034.043-.034.068v3.33c0 .416-.017.823-.214 1.222-.09.193-.236.351-.373.514-.111.12-.214.24-.3.377a2.17 2.17 0 0 0 .116 2.657c.315.384.742.66 1.221.789.034.008.056.034.064.069a.4.4 0 0 1 .018.128c0 .219.102.403.342.454zm.887-6.103q.039.001.073.026.083.082-.013.159a.1.1 0 0 1-.052.017h-1.174a.07.07 0 0 0-.064.034 1 1 0 0 0-.099.257c-.05.231-.16.445-.317.622-.051.06-.069.055-.043-.022.12-.317.184-.655.202-1.024 0-.021.012-.038.025-.051a.08.08 0 0 1 .056-.022h1.41zm.437 2.122a1.52 1.52 0 0 1 0 2.186 1.627 1.627 0 0 1-2.614-.498 1.5 1.5 0 0 1 .351-1.688c.304-.293.71-.454 1.131-.45.43 0 .832.163 1.132.45m-1.226 3.686q-.02.065-.06.072c-.013.005-.03 0-.043-.004a.14.14 0 0 1-.042-.038.3.3 0 0 1-.043-.06.4.4 0 0 1-.022-.073.3.3 0 0 1-.004-.15c.008-.043.034-.069.06-.073l.043.004q.024.013.043.039c.017.017.03.034.043.06l.02.073a.3.3 0 0 1 0 .15zM13.565 12c0 .716-.605 1.299-1.35 1.299A1.324 1.324 0 0 1 10.869 12c0-.72.6-1.303 1.345-1.303A1.324 1.324 0 0 1 13.564 12"
          />
          <path
            fill="currentColor"
            d="M16.539 13.384q-.142.366-.257.827c-.035.13.043.223.102.33.086.142.065.335-.017.48-.115.206-.428.198-.608.1-.107-.057-.223-.035-.326.016l-1.851.96c-.099.052-.112.197-.12.3-.026.236-.343.399-.562.317-.334-.128-.467-.54-.184-.792.171-.15.446-.108.634-.04a.23.23 0 0 0 .189-.012l1.83-.96c.137-.073.197-.253.248-.394a.2.2 0 0 1 .052-.082c.141-.132.313-.064.398-.3.103-.3.18-.578.219-.827a.14.14 0 0 0-.049-.128.14.14 0 0 0-.135-.022q-.561.22-1.14.472c-.12.055-.24.115-.305.244-.184.356-.488.364-.681.009a.17.17 0 0 1 0-.146.47.47 0 0 1 .291-.27.1.1 0 0 1 .078 0 .57.57 0 0 0 .428 0c.343-.137.707-.296 1.106-.472.137-.06.176-.214.214-.342a.406.406 0 0 1 .412-.3c.265.008.437.14.51.407.068.257-.193.458-.403.548a.13.13 0 0 0-.073.077m.831.652a.227.227 0 1 0 0-.454.227.227 0 0 0 0 .454m-2.404 2.914a.407.407 0 1 0 0-.814.407.407 0 0 0 0 .814"
          />
        </>
      ) : (
        <>
          <path
            fill="#039607"
            d="M14.695 5.404a.345.345 0 1 0 0-.69.345.345 0 0 0 0 .69M9.973 7.607a2.28 2.28 0 0 0-2.868-.197c-.111.082-.21.184-.287.313q-.007.012-.021 0c-.009 0-.013-.013-.004-.021.128-.21.278-.39.462-.55a5.55 5.55 0 0 1 3.365-1.405c.06 0 .094.022.094.082.017 1.054 0 2.057 0 3.008 0 .099.013.202-.004.317-.022.12-.035.116-.043 0a2.22 2.22 0 0 0-.694-1.542zm7.5 3.502c.098-.21.171-.373.411-.472.171-.073.381.09.471.223.163.227.035.557-.214.656-.171.064-.343.025-.501-.107a.13.13 0 0 0-.125-.022 75 75 0 0 0-1.662.536 1.6 1.6 0 0 0-.313.15.13.13 0 0 0-.052.06c-.094.24-.214.429-.51.386-.445-.078-.411-.545-.231-.857a.12.12 0 0 0 .013-.095l-.493-1.706a.15.15 0 0 0-.103-.107c-.377-.102-.63-.454-.304-.797.107-.12.09-.283.064-.428l-.283-1.672a.36.36 0 0 0-.24-.296.14.14 0 0 1-.064-.05c-.364-.537.313-1.08.746-.498.021.026.042.043.072.043.24.06 1.05.244 1.248.026.415-.45 1.071.15.655.6-.283.3-.6.12-.78-.185a.12.12 0 0 0-.098-.06c-.322-.03-.75-.163-1.037-.051-.223.085-.3.291-.245.617q.135.772.245 1.504c.042.287.162.3.342.472.352.308-.085.523.009.853l.446 1.572q.043.15.171.215c.197.094.322.201.549.128q.843-.271 1.744-.574a.11.11 0 0 0 .069-.064m-.095-3.737a.369.369 0 1 0 .112-.73.369.369 0 0 0-.112.73"
          />
          <path
            fill="#039607"
            d="m15.373 8.173.051.137q.39.771.763 1.479c.15.283.428.068.6.411a.37.37 0 0 1 0 .343c-.129.27-.454.377-.703.197-.231-.171-.133-.476-.077-.716a.16.16 0 0 0-.009-.098 26 26 0 0 0-.9-1.706.1.1 0 0 0-.085-.047c-.51-.009-.66-.681-.129-.866.321-.111.604.172.557.48a.086.086 0 0 0 .043.099l.784.48q.045.025.09.013.089-.015.172-.043c.24-.095.48.004.565.24.215.617-.788.93-.857.111a.1.1 0 0 0-.034-.068 4 4 0 0 0-.789-.48c-.042-.022-.051-.009-.042.034m2.618 1.491a.261.261 0 1 0 0-.522.261.261 0 0 0 0 .522m-8.07 8.002.064-.03a6.3 6.3 0 0 0 1.453-1.067l.515-.506q.061-.064.085.026c.086.467.197.943.172 1.414a4.55 4.55 0 0 1-.515 1.946 1.3 1.3 0 0 1-.128.205q-.11.134-.077-.034a3.74 3.74 0 0 0-.172-2.057q-.063-.15-.197-.06a9.7 9.7 0 0 1-2.044 1.106c-.442.158-1.012.197-1.213-.339a1.7 1.7 0 0 1-.111-.591.31.31 0 0 0-.125-.249l-.278-.206a.237.237 0 0 1-.043-.334l.081-.099q.038-.05-.025-.042a.74.74 0 0 1-.476-.112.1.1 0 0 1-.043-.051.48.48 0 0 1 .06-.39q.057-.098-.021-.215a.16.16 0 0 0-.129-.068c-.407-.009-.784.064-.977-.39-.043-.094-.112-.171-.06-.283l.484-1.007c.086-.18.172-.39.06-.574a4.9 4.9 0 0 1-.638-1.818 8.5 8.5 0 0 1 0-1.85h.021l.009.016c.051.536.094 1.102.325 1.56a.05.05 0 0 0 .03.026.05.05 0 0 0 .043-.009c.299-.19.635-.314.986-.364.373-.056 1.221-.013 1.384.403a.064.064 0 0 1-.064.086c-.643-.06-1.783.081-2.07.763-.052.115-.017.145.094.085a2.16 2.16 0 0 1 2.07-.116c.03.018.034.035.013.065a2.67 2.67 0 0 0-.304 2.97q.212.41.578.595c.03.013.06.018.09 0a.9.9 0 0 0 .347-.214c.556-.53.918-1.23 1.029-1.988a.04.04 0 0 1 .03-.02.04.04 0 0 1 .034.011q.438.334.9.502.04.018.047.055c.022.112 0 .206.048.317.06.137.171.253.317.335a.103.103 0 0 1 .047.132 6.8 6.8 0 0 1-1.732 2.405c-.06.051-.047.073.026.06M6.784 15.35a.1.1 0 0 1-.021-.055L6.74 14.01q.001-.122-.043-.013a4.5 4.5 0 0 0-.197.6c-.06.236-.064.485-.141.716a.065.065 0 0 0 .043.086l.368.077a.04.04 0 0 0 .039-.009.04.04 0 0 0 .013-.043.2.2 0 0 0-.043-.068z"
          />
          <path
            fill="#F6003E"
            d="M12.021 14.884c.454.095.75-.094.746-.565q-.001-.052.043-.078a.7.7 0 0 1 .18-.068c.047-.013.094-.021.141-.043a2.26 2.26 0 0 0 1.436-1.971c.026-.343-.056-.72-.249-1.14-.085-.202-.248-.386-.403-.57-.085-.099-.175-.202-.252-.305a1.9 1.9 0 0 1-.386-1.11c.008-1.135.008-3.651.008-3.651 0-.21-.385-.257-.557-.266-.415-.026-1.071-.06-1.478.095a.15.15 0 0 0-.069.05l-.004.014c-.017.021-.034.043-.034.068v3.33c0 .416-.018.823-.215 1.222-.09.193-.235.351-.373.514-.111.12-.214.24-.3.377a2.17 2.17 0 0 0 .116 2.657c.315.384.742.66 1.222.789.034.008.055.034.064.069a.4.4 0 0 1 .017.128c0 .219.103.403.343.454zm.887-6.103q.04.001.073.026.084.082-.013.159a.1.1 0 0 1-.051.017h-1.174a.07.07 0 0 0-.065.034 1 1 0 0 0-.098.257c-.051.231-.16.445-.317.622-.052.06-.069.055-.043-.022.12-.317.184-.655.201-1.024 0-.021.013-.038.026-.051a.08.08 0 0 1 .056-.022h1.41zm.437 2.122a1.52 1.52 0 0 1 0 2.186 1.627 1.627 0 0 1-2.614-.498 1.5 1.5 0 0 1 .352-1.688c.303-.293.71-.454 1.131-.45.429 0 .831.163 1.131.45m-1.225 3.686q-.021.065-.06.072c-.013.005-.03 0-.043-.004a.14.14 0 0 1-.043-.038.3.3 0 0 1-.043-.06.4.4 0 0 1-.021-.073.3.3 0 0 1-.005-.15c.009-.043.035-.069.06-.073l.043.004q.024.013.043.039c.017.017.03.034.043.06l.021.073a.3.3 0 0 1 0 .15zM13.564 12c0 .716-.604 1.299-1.35 1.299A1.324 1.324 0 0 1 10.868 12c0-.72.6-1.303 1.346-1.303A1.324 1.324 0 0 1 13.564 12"
          />
          <path
            fill="#039607"
            d="M16.538 13.384q-.141.366-.257.827c-.034.13.043.223.103.33.086.142.064.335-.017.48-.116.206-.429.198-.609.1-.107-.057-.223-.035-.325.016l-1.852.96c-.098.052-.111.197-.12.3-.026.236-.343.399-.561.317-.335-.128-.467-.54-.185-.792.172-.15.446-.108.635-.04a.23.23 0 0 0 .188-.012l1.83-.96c.137-.073.197-.253.249-.394a.2.2 0 0 1 .051-.082c.142-.132.313-.064.399-.3.103-.3.18-.578.218-.827a.14.14 0 0 0-.048-.128.14.14 0 0 0-.136-.022q-.56.22-1.14.472c-.12.055-.24.115-.304.244-.184.356-.489.364-.682.009a.17.17 0 0 1 0-.146.47.47 0 0 1 .292-.27.1.1 0 0 1 .077 0 .57.57 0 0 0 .429 0c.342-.137.707-.296 1.105-.472.137-.06.176-.214.215-.342a.406.406 0 0 1 .411-.3c.266.008.437.14.51.407.069.257-.193.458-.403.548a.13.13 0 0 0-.073.077m.832.652a.227.227 0 1 0 0-.454.227.227 0 0 0 0 .454m-2.405 2.914a.407.407 0 1 0 0-.814.407.407 0 0 0 0 .814"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMND.displayName = 'MND'

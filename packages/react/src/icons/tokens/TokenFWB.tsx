import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenFWB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.464 6.094q-.225.674-.398 1.342c-.013.038-.035.06-.077.068l-.065.013q-.063.011-.043-.043l.016-.053c.083-.273.267-.884-.213-.804-.578.095-.557 1.217-.501 1.629a1 1 0 0 1-.009.313.06.06 0 0 1-.025.038.06.06 0 0 1-.052 0c-.088-.042-.139-.122-.192-.205-.038-.058-.076-.118-.13-.168a.06.06 0 0 0-.046-.017c-.365.039-.219.943-.163 1.2l.017.054c.023.067.05.148.047.225 0 .021-.009.025-.03.025-.566-.094-1.689-.094-2.109.386-.141.159-.27.39-.167.579.153.284.4.489.643.69l.03.026q.128.102.3.18a.08.08 0 0 1 .043.085 3.9 3.9 0 0 0-.866 1.659 1 1 0 0 1-.028.139.7.7 0 0 0-.027.255v.197a.1.1 0 0 0 .008.047.09.09 0 0 0 .095.042.1.1 0 0 0 .034-.016c.094-.077.171-.159.24-.248q.016-.02.038-.04c.03-.028.06-.057.069-.098a.1.1 0 0 1 .034-.055l.034-.022q.04-.031.035.022-.039.3 0 .6a.6.6 0 0 1-.016.212l-.006.028a.04.04 0 0 0 .009.03.04.04 0 0 0 .026.017.29.29 0 0 0 .287-.107.05.05 0 0 1 .047-.013.05.05 0 0 1 .034.034c.051.199.147.383.279.54a.1.1 0 0 1 .021.043A1.706 1.706 0 0 0 7.03 16.53c.088.025.1.088.112.154q.005.035.016.069.173.476.377.926c.013.025.005.043-.025.043l-.038.003c-.588.054-1.175.109-1.75.352l-.004.013.004.017q.005.009.013.013.506-.13 1.016-.236c.039-.012.099-.012.18-.012h.007q.003 0 .006.004v.025a.034.034 0 0 1-.03.03.6.6 0 0 0-.204.071q-.048.024-.092.04-.417.141-.566.25l-.05.031q-.062.043-.095.054c-.013.005-.022.013-.013.03l.004.013c0 .009.009.009.013.009q.656-.297 1.337-.523c.212-.067.412-.071.61-.076q.123-.002.247-.01c.155-.013.159-.034.005-.077a1.1 1.1 0 0 0-.348-.009c-.105.01-.117-.04-.13-.098q-.005-.026-.015-.052a6 6 0 0 1-.339-.942c-.008-.022 0-.026.022-.026a6.6 6.6 0 0 0 2.275-.013c.018.322-.036.644-.158.943a.03.03 0 0 1-.017.008l-.493.078a.1.1 0 0 0-.06.038l-.043.069-.005.009a.02.02 0 0 0 .003.017l.002.002.008.006c.18-.057.37-.075.558-.052a25 25 0 0 1 1.62.33q.129.038.021-.042c-.3-.206-.754-.292-1.127-.335l-.004-.008v-.017q-.001-.02.017-.022c.412-.017.737.037 1.068.093l.217.036q.226.04.022-.069c-.382-.17-.8-.243-1.217-.214q-.074.004-.158.016-.093.013-.19.018H9.63a.025.025 0 0 1-.017-.026l.009-.039c.062-.271.127-.557.102-.83a.03.03 0 0 1 .022-.03c.527-.163 1.114-.408 1.448-.88.283-.402.347-.89.215-1.362a4.1 4.1 0 0 0-.78-1.483q-.09-.11-.069-.18t.086-.068c.475-.018.938.007 1.399.031.333.018.665.035 1 .037l.01.005.004.003.002.003.002.01a4.6 4.6 0 0 0-.926 1.706c-.034.135-.038.275-.043.417l-.004.115c-.017.377.236.75.493 1.007.352.299.769.513 1.217.626a.064.064 0 0 1 .043.064q.004.43.111.848v.013l-.006.011-.01.007a2.77 2.77 0 0 0-1.672.222q-.02.01 0 .017.076.029.12.018a4.7 4.7 0 0 1 1.148-.137h.095c.115.034.115.05-.005.06-.37.023-.732.126-1.058.304q-.041.02-.043.038a.02.02 0 0 0 0 .022q.006.01.013.008.608-.142 1.221-.265l.08-.017c.336-.07.585-.121.863-.018q.09.032.039-.047c-.059-.098-.196-.11-.329-.121-.14-.012-.275-.024-.306-.136a3.8 3.8 0 0 1-.115-.827.04.04 0 0 1 .03-.026 6.5 6.5 0 0 0 2.28 0h.004a8 8 0 0 1-.36 1.016c-.009.017-.009.034-.009.051q.006.052-.047.052a9 9 0 0 0-.471.013.056.056 0 0 0-.052.055v.013a.026.026 0 0 0 .026.026q.121.004.243.004c.218.001.432.002.636.064.316.101.629.225.935.347q.187.076.372.146.18.065.021-.042a3 3 0 0 0-.968-.438c-.009-.004-.013-.008-.009-.021v-.013q.539.079 1.067.206.304.076.022-.06c-.463-.223-1.136-.287-1.642-.309-.017 0-.026-.013-.017-.03l.429-1.093a.12.12 0 0 1 .094-.077 1.58 1.58 0 0 0 .896-.548l.011-.015.035-.044a1.4 1.4 0 0 0 .202-.306q.134-.315.197-.655a.6.6 0 0 1 .116-.223.9.9 0 0 0 .141-.377.055.055 0 0 1 .086-.039l.197.129a.07.07 0 0 0 .043.012.1.1 0 0 0 .043-.017.1.1 0 0 0 .03-.042c.009-.013.009-.035.009-.052a.1.1 0 0 0-.018-.047c-.008-.013-.008-.026-.008-.043a1.3 1.3 0 0 0-.045-.318 2 2 0 0 1-.04-.21 1 1 0 0 0-.028-.097.4.4 0 0 1-.029-.185.04.04 0 0 1 .009-.017.03.03 0 0 1 .034-.009q.082.093.167.18.03.03.062.072c.084.102.188.229.324.198a.05.05 0 0 0 .034-.034c.086-.253-.042-.639-.128-.879a3.8 3.8 0 0 0-.677-1.272c-.026-.039-.026-.065.017-.086.381-.201.71-.49.956-.844.235-.335-.108-.729-.408-.857l-.088-.04c-.046-.02-.091-.042-.139-.055-.643-.193-1.345-.171-1.993 0a.06.06 0 0 1-.042-.008.5.5 0 0 1-.134-.14c-.051-.069-.1-.136-.196-.16a.13.13 0 0 1-.069-.047.14.14 0 0 1-.021-.082 1.05 1.05 0 0 1 .162-.493.03.03 0 0 1 .026-.013.03.03 0 0 1 .03.009l.086.111a.06.06 0 0 0 .064.018.06.06 0 0 0 .039-.052.25.25 0 0 0-.099-.21l-.013-.013a.04.04 0 0 1 0-.038q.21-.16.416-.326c.201-.159.411-.467.129-.66-.176-.12-.395-.017-.575.073a.03.03 0 0 1-.03 0 .03.03 0 0 1-.013-.03c.039-.274.506-.66.72-.827.15-.12.21-.3.086-.472-.214-.296-.626-.141-.784.112q-.077.114-.094-.022a.5.5 0 0 1 .008-.12c.069-.45.043-.891-.073-1.333a1.1 1.1 0 0 0-.24-.445.8.8 0 0 0-.351-.24c-.544-.202-1.303-.168-1.299.621.005.484.63.292.879.184a.06.06 0 0 1 .047 0 .06.06 0 0 1 .034.035q.206.47.206.985a10.4 10.4 0 0 1-.131 1.717 1.1 1.1 0 0 0-.023.345c.004.021-.005.034-.03.021l-.112-.043a.2.2 0 0 0-.043-.017c-.038 0-.068-.017-.098-.043a.04.04 0 0 0-.034-.017h-.275a.1.1 0 0 0-.043.009l-.171.098-.013.009-.013-.009h-.017c-.454.3-.604.832-.591 1.316.004.056-.026.077-.082.056-.325-.107-.647-.184-.977-.172-.343.005-1.02.018-.986.557v.215c-.021.377.275.728.532.986q.057.056-.026.055l-1.037-.026q-.155-.005-.039-.107.198-.174.352-.471c.146-.27.223-.733 0-.982-.369-.402-1.384-.218-1.847-.047-.056.022-.086 0-.086-.055-.017-.527-.103-.9-.489-1.269a.06.06 0 0 1-.012-.069 2.5 2.5 0 0 0 .257-.3.314.314 0 0 0-.086-.432c-.19-.117-.348.046-.495.197-.117.12-.227.235-.34.193a.04.04 0 0 1-.03-.026.04.04 0 0 1 0-.034c.17-.402.483-.667.802-.936q.11-.092.217-.187c.206-.185.485-.587.373-.887-.128-.33-.673-.553-.968-.36a1.12 1.12 0 0 0-.455.595m7.573 1.097c.021-.004.043-.025.069-.055q.066-.087.135-.188c.143-.208.3-.437.525-.498.287-.086.372.197.184.377l-.112.105c-.325.302-.7.651-.672 1.03a.06.06 0 0 0 .034.052.06.06 0 0 0 .064-.008c.129-.103.54-.382.647-.12.039.094-.03.222-.103.27-.216.139-.41.312-.57.514h-.017q-.162-.066-.265.043-.08.084.034.085l.137.005c.021 0 .026.013.017.03a2 2 0 0 0-.184.523q-.007.025-.034.025l-.18.013c-.013 0-.022-.004-.022-.021 0-.292-.077-.562-.223-.815a.27.27 0 0 1-.025-.158q.14-.873.154-1.702c.013-.6 0-1.054-.176-1.568q-.01-.027.017-.034c.09-.035.142-.06.159-.086q.04-.066-.034-.056-.285.045-.553.146c-.09.034-.369.073-.472-.004-.175-.146-.004-.455.133-.558.454-.33 1.05 0 1.269.438.283.574.175 1.577.034 2.185 0 .026.004.035.03.03m-7.911.917c.072 0 .12 0 .145-.008q.064-.02.103.103a.06.06 0 0 1-.021.064c-.343.223-.497.716-.506 1.106q0 .025-.026.025a.73.73 0 0 0-.758.365.04.04 0 0 1-.043.021l-.154-.026a.04.04 0 0 1-.03-.021c-.108-.253-.339-1.076-.155-1.303a.056.056 0 0 1 .09 0l.033.051c.068.11.172.278.267.296.257.052.27-.407.266-.561-.009-.283 0-.562.013-.84.013-.24.098-.493.321-.609a.1.1 0 0 1 .077 0 .1.1 0 0 1 .056.052c.048.133.004.329-.031.485l-.016.072c-.034.128.004.3.154.33.213.042.295-.275.334-.426V7.28c.108-.407.215-.771.335-1.093.107-.3.343-.664.724-.574.296.073.429.249.36.557a.7.7 0 0 1-.253.437l-.1.08c-.412.324-.937.737-.988 1.27a.03.03 0 0 1-.03.03l-.189.026a.026.026 0 0 0-.026.022v.03c.009.025.022.042.043.042zm9.985 5.979-.044.122c-.05.145-.11.319-.196.414q-.025.025-.025-.009a5 5 0 0 0-.3-1.264l.008-.043.129-.257a.03.03 0 0 1 .026-.017l.012.004.009.013.021.063c.128.373.244.712.545 1a.06.06 0 0 0 .06.008l.055-.021c.022-.013.039-.004.043.017q.034.08.026.167a.03.03 0 0 1-.012.02l-.01.005-.005.001h-.007l-.018-.004-.3-.228h-.008l-.007.006zM5.43 14.078a.9.9 0 0 1-.326.228H5.1l-.009-.009v-.004l-.004-.017v-.026l.017-.017a.3.3 0 0 0 .086-.06c.295-.296.408-.649.53-1.032l.006-.018.004-.005h.008l.228.412v.013q-.18.52-.232 1.071-.001.053-.034.009c-.087-.111-.146-.284-.197-.435q-.017-.053-.035-.101l-.004-.008-.008-.005a.02.02 0 0 0-.018 0zm3.536-5.995c.004.021-.009.03-.03.021l-.146-.051a.05.05 0 0 0-.052.004.44.44 0 0 1-.24.086q-.013.002-.008.017l.013.026.008.004a.7.7 0 0 1 .459.03q.026.01.038-.004c.146-.142.356-.352.258-.498a.1.1 0 0 0-.056-.034.1.1 0 0 0-.064.022l-.296.257q-.031.027.008.034l.086.03a.03.03 0 0 1 .017.013l.005.021zM7.98 9.42c.034-.497.416-1.552 1.101-.977a1.46 1.46 0 0 1 .497 1.14c-.03.454-.278 1.063-.835 1.015a.55.55 0 0 1-.356-.158.04.04 0 0 1-.009-.047.66.66 0 0 0 .018-.515.02.02 0 0 1 .017-.012c.643.154.574-.866.008-.695q-.257.078-.257.36 0 .014-.013.009l-.158-.094a.03.03 0 0 1-.013-.026m7.114-.257c-.531-.06-.553.814.073.703.017-.005.026 0 .017.021-.06.163-.06.33.009.493a.064.064 0 0 1-.017.077c-.33.266-.755.163-.969-.189a1.38 1.38 0 0 1-.129-1.225c.112-.279.408-.716.733-.755.523-.06.763.738.78 1.132 0 .013-.004.017-.013.021l-.154.095h-.008q-.039-.342-.322-.373m-6.548.27a.11.11 0 0 1-.108.111.111.111 0 1 1 0-.223.11.11 0 0 1 .108.112m6.702 0a.11.11 0 0 1-.107.111.111.111 0 1 1 0-.223.11.11 0 0 1 .107.112m-6.985.793c.115-.759-.905-1.046-1.136-.3V9.92c-.171.557.437.93.909.729.055-.022.051-.047-.009-.064-.287-.09-.073-.558.214-.348.009.009.022.005.022-.012m7.063.021c.287-.21.531.21.188.36h-.004c-.013.009-.013.013-.004.021q.213.127.471.073c.261-.055.561-.368.501-.685-.15-.819-1.277-.622-1.174.222l.006.008h.002v.001a.01.01 0 0 0 .014 0m-6.33.707-.026-.008a1.2 1.2 0 0 1-.549-.292q-.03-.032.009-.013.676.277 1.063-.283c.08-.112.123-.258.163-.395l.008-.029a.1.1 0 0 1 .03-.043c.343-.27.986-.274 1.44-.231.6.056.497.583.3.977-.36.72-1.243 1.269-2.04 1.401-.03.005-.034 0-.017-.025l.257-.317c.06-.07.127-.1.196-.131.05-.023.1-.046.147-.084.4-.3.715-.701.913-1.161q.006-.027.038-.022l.073.009a.02.02 0 0 0 .026-.009v-.025q-.33-.41-.827-.352a.5.5 0 0 0-.24.073q-.153.13.034.077a1 1 0 0 1 .296-.03q.026 0 .026.03c0 .215-.138.472-.253.669a11 11 0 0 1-1.595 2.006l-.021-.005c-.999-.574-1.967-1.367-2.546-2.387a.025.025 0 0 1 .004-.038l.013-.005.219-.038q.148-.026 0-.052c-.351-.064-.973.12-1.157.51q-.04.09.043.039.091-.056.171-.129a.04.04 0 0 1 .047.013c.369.429.87.844 1.415 1.02q.114.035.197.107.224.192.454.365.051.032-.013.025a4.67 4.67 0 0 1-2.777-1.474c-.257-.3.18-.583.411-.677a3.44 3.44 0 0 1 2.023-.124q.054.011.043.068c-.064.394.159.789.566.857.074.014.158.009.24.004l.068-.004q.054.001.005.022c-.197.103-.519.073-.699.051q-.012 0-.013.013l.005.034q.002.012.017.017c.355.086.805.086 1.071-.248q.013-.013.026 0a.93.93 0 0 0 .698.274.026.026 0 0 0 .017-.03m7.388-.051h-.018c-.203.014-.534.035-.663-.065q-.024-.017.008-.017.046.001.088.007l.075.006c.514-.017.754-.398.707-.891 0-.017.005-.03.026-.035.699-.171 1.543-.167 2.19.189.193.107.471.351.27.591a4.56 4.56 0 0 1-2.76 1.47q-.077.014-.013-.03.212-.154.416-.334a.6.6 0 0 1 .197-.116 3.34 3.34 0 0 0 1.423-1.02.05.05 0 0 1 .03-.017c.013 0 .026 0 .034.009l.167.128c.043.039.06.026.043-.03a.4.4 0 0 0-.098-.15c-.279-.282-.729-.475-1.128-.372a.02.02 0 0 0-.021.021.02.02 0 0 0 .021.021l.249.039a.05.05 0 0 1 .034.026.05.05 0 0 1 0 .043c-.583 1.015-1.543 1.795-2.533 2.37a.03.03 0 0 1-.038-.005 12 12 0 0 1-1.492-1.864 1.9 1.9 0 0 1-.342-.823l.004-.013a.03.03 0 0 1 .026-.008l.364.043c.013 0 .021 0 .021-.018v-.03a.02.02 0 0 0-.013-.008q-.63-.276-1.08.218-.102.11.039.065l.026-.009q.026-.01.038.017c.206.472.656 1.127 1.166 1.29.021.009.034.017.043.035l.304.368c.039.043.026.06-.03.047a3.15 3.15 0 0 1-1.778-1.063c-.215-.257-.412-.591-.386-.942q.02-.308.321-.365c.455-.085 1.183-.077 1.569.219a.1.1 0 0 1 .026.043c.128.493.394.814.934.784a.56.56 0 0 0 .3-.107h.004l.013.013v.008a1.1 1.1 0 0 1-.591.3q-.014.006-.009.017l.004.013.009.009c.248.034.531-.099.711-.262.009-.012.022-.012.03 0 .249.3.686.335 1.046.24q.027-.006.034-.025c.013-.022.005-.035-.017-.03m-5.927-.767-.069.282a.07.07 0 0 0 .035.073l.128.086a.07.07 0 0 0 .056.013.07.07 0 0 0 .043-.043l.116-.274c.004-.013.008-.03 0-.043a.07.07 0 0 0-.03-.043l-.185-.094a.07.07 0 0 0-.08.017.1.1 0 0 0-.014.026m2.349.137.124.278a.064.064 0 0 0 .09.026l.141-.086a.07.07 0 0 0 .026-.068l-.069-.292a.07.07 0 0 0-.036-.045.06.06 0 0 0-.058.002l-.188.099a.065.065 0 0 0-.03.086m-4.693.077c-.005.034-.039.051-.073.051-.039-.004-.06-.034-.06-.068a.06.06 0 0 1 .073-.047c.038.004.06.034.06.064m7.478-.009c0 .035-.03.065-.064.065-.03 0-.06-.03-.06-.065a.06.06 0 0 1 .06-.06.06.06 0 0 1 .045.016q.01.01.014.02zm-9.758.223-.09-.171a.073.073 0 0 0-.095-.03l-.252.12a.1.1 0 0 0-.026.021.07.07 0 0 0 0 .09l.188.227a.1.1 0 0 0 .026.017.07.07 0 0 0 .086-.017l.154-.171a.07.07 0 0 0 .009-.086m12.18.253.188-.223a.07.07 0 0 0 .017-.06.07.07 0 0 0-.042-.051l-.249-.12a.073.073 0 0 0-.094.03l-.095.171a.07.07 0 0 0 .013.086l.155.171.021.017a.07.07 0 0 0 .086-.021m-7.702-.193-.154.24-.004-.004a.034.034 0 0 0 0 .043l.094.128.009.009a.03.03 0 0 0 .023.005.03.03 0 0 0 .02-.014l.222-.265a.04.04 0 0 0 .009-.026.03.03 0 0 0-.005-.015l-.012-.01-.159-.1-.011-.004h-.012a.03.03 0 0 0-.02.013m2.739.129.231.287h-.004l.01.008a.026.026 0 0 0 .033-.008l.103-.15a.03.03 0 0 0 .005-.015.03.03 0 0 0-.005-.015l-.163-.236a.03.03 0 0 0-.016-.011.03.03 0 0 0-.018.003l-.172.098a.026.026 0 0 0-.004.039m-7.08.398.116-.193a.02.02 0 0 0 0-.017l-.112-.214a.02.02 0 0 0-.013-.009h-.009l-.008.005-.197.227a.02.02 0 0 0 0 .03l.193.171a.02.02 0 0 0 .03 0m11.863-.201-.202-.227-.008-.005h-.009l-.01.006-.002.002v.001l-.108.21a.02.02 0 0 0 0 .021l.107.198.007.006.008.002q.005 0 .009-.002l.006-.006.202-.176v-.009a.02.02 0 0 0 0-.021m-8.01.45.21-.33c.013-.017.021-.017.034-.004l.073.077.004.01v.011a.03.03 0 0 1-.008.017l-.296.232a.01.01 0 0 1-.014.002l-.005-.004-.003-.007v-.008zm-3.335.086a2.4 2.4 0 0 1-.394-.27v-.022l.064-.116c.013-.03.03-.03.043-.004l.3.39c.03.039.026.043-.013.022m7.046-.425.223.335v.008l-.004.009-.009.004h-.013l-.295-.236q-.02-.02 0-.034l.077-.086a.01.01 0 0 1 .013-.004q.005 0 .008.004m3.536.442h-.013l-.002-.004-.001-.005q0-.005.003-.008l.313-.412c.017-.026.034-.021.051.004l.052.108c.017.03.013.055-.022.077zm-6.142.004-.01-.003-.007-.01a.02.02 0 0 1 .009-.021l.116-.073.008-.004 1.543.034.009.004.051.052v.008l-.006.01-.01.003zm2.58.716a2 2 0 0 0-.287.308.09.09 0 0 1-.073.035l-2.751-.086a.14.14 0 0 1-.099-.043l-.3-.313H9.98l-.013.009v.008c.472.656.965 1.346 1.226 2.096.274.78.026 1.414-.66 1.83-.977.6-2.336.6-3.42.334a2 2 0 0 1-.378-.14l-.05-.023c-.806-.36-.875-1.212-.742-1.988a8 8 0 0 1 .45-1.594q.064-.153-.038-.022a.5.5 0 0 0-.086.172c-.043.102-.056.098-.056-.005a1.7 1.7 0 0 0-.034-.385q-.005-.029.008-.043l.189-.249a.04.04 0 0 1 .043-.013q.488.156 1.058.202a.46.46 0 0 1 .245.107c.235.184.471.368.758.458a.08.08 0 0 0 .073-.017l.647-.6a.1.1 0 0 1 .047-.025 3.7 3.7 0 0 0 1.449-.588.1.1 0 0 1 .047-.017 83 83 0 0 0 2.074 0c.049 0 .107.042.15.073l.018.013a3.7 3.7 0 0 0 1.341.514q.024.004.043.022l.643.6q.02.02.047.025l.06-.004a3.1 3.1 0 0 0 .806-.501q.07-.046.154-.052c.368-.03.728-.098 1.076-.214q.025-.006.042.013l.086.116a.04.04 0 0 1 0 .051.8.8 0 0 0-.051.317l-.009.009a.02.02 0 0 1-.021-.009l-.017-.021a.01.01 0 0 0-.01-.002l-.003.002-.009.004v.009c0 .021.004.042.022.064a.1.1 0 0 1 .021.043q.017.09.025.182c.017.152.033.302.138.443a.7.7 0 0 1 .103.193c.227.815.458 2.096-.412 2.627-.647.395-1.607.45-2.335.403a3.9 3.9 0 0 1-1.372-.317c-.416-.184-.891-.548-1.028-1.003-.159-.497.051-1.067.274-1.504a9 9 0 0 1 .93-1.479c.06-.081.056-.085-.022-.025m-8.408.805c.068-.102.098-.098.098.03a2 2 0 0 1-.048.41 2 2 0 0 0-.05.46q.01.168.098.026.11-.185.202-.441.129-.354.27-.785a.04.04 0 0 1 .043-.034.05.05 0 0 1 .047.03l.231.519.006.007.008.004.01-.001.006-.006c.081-.36.051-.737-.085-1.08-.009-.017 0-.026.017-.026h.043a.04.04 0 0 1 .042.026l.048.094q.013.025.034 0l.154-.188c.009-.013.004-.017-.008-.026l-.716-.313a.06.06 0 0 0-.06.009c-.415.387-.619.89-.826 1.404l-.053.13a2 2 0 0 0-.137.531.02.02 0 0 0 .009.022.02.02 0 0 0 .021 0c.19-.125.39-.46.53-.693zm13.136-.126.008.08.112.856c.008.065-.018.086-.078.043q-.038-.02-.077-.111a14 14 0 0 1-.45-1.17.03.03 0 0 0-.025-.017.03.03 0 0 0-.026.017l-.232.514q-.026.052-.047-.004c-.111-.296-.013-.742.086-1.033.009-.026 0-.034-.026-.034a.11.11 0 0 0-.098.06.034.034 0 0 1-.043.013.06.06 0 0 1-.034-.043.035.035 0 0 1 .017-.039l.703-.296q.018-.005.038.009c.356.375.526.813.701 1.266l.083.213q.091.235.125.407.031.166-.09.051c-.163-.157-.299-.375-.427-.582a8 8 0 0 0-.139-.22c-.043-.063-.072-.06-.081.02"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.723 7.882c-.204.04-.365.071-.589.248v.004q-.024.018-.004.043l.013.017V8.2h.021c.207-.159.38-.184.59-.215l.16-.025q.053-.007.047-.065v-.017a.04.04 0 0 0-.017-.03.04.04 0 0 0-.034-.004 4 4 0 0 1-.187.04"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M8.464 6.094q-.225.674-.398 1.342c-.013.038-.035.06-.077.068l-.065.013q-.063.011-.043-.043l.016-.053c.083-.273.267-.884-.213-.804-.578.095-.557 1.217-.501 1.629a1 1 0 0 1-.009.313.06.06 0 0 1-.025.038.06.06 0 0 1-.052 0c-.088-.042-.139-.122-.192-.205-.038-.058-.076-.118-.13-.168a.06.06 0 0 0-.046-.017c-.365.039-.219.943-.163 1.2l.017.054c.023.067.05.148.047.225 0 .021-.009.025-.03.025-.566-.094-1.689-.094-2.109.386-.141.159-.27.39-.167.579.153.284.4.489.643.69l.03.026q.128.102.3.18a.08.08 0 0 1 .043.085 3.9 3.9 0 0 0-.866 1.659 1 1 0 0 1-.028.139.7.7 0 0 0-.027.255v.197a.1.1 0 0 0 .008.047.09.09 0 0 0 .095.042.1.1 0 0 0 .034-.016c.094-.077.171-.159.24-.248q.016-.02.038-.04c.03-.028.06-.057.069-.098a.1.1 0 0 1 .034-.055l.034-.022q.04-.031.035.022-.039.3 0 .6a.6.6 0 0 1-.016.212l-.006.028a.04.04 0 0 0 .009.03.04.04 0 0 0 .026.017.29.29 0 0 0 .287-.107.05.05 0 0 1 .047-.013.05.05 0 0 1 .034.034c.051.199.147.383.279.54a.1.1 0 0 1 .021.043A1.706 1.706 0 0 0 7.03 16.53c.088.025.1.088.112.154q.005.035.016.069.173.476.377.926c.013.025.005.043-.025.043l-.038.003c-.588.054-1.175.109-1.75.352l-.004.013.004.017q.005.009.013.013.506-.13 1.016-.236c.039-.012.099-.012.18-.012h.007q.003 0 .006.004v.025a.034.034 0 0 1-.03.03.6.6 0 0 0-.204.071q-.048.024-.092.04-.417.141-.566.25l-.05.031q-.062.043-.095.054c-.013.005-.022.013-.013.03l.004.013c0 .009.009.009.013.009q.656-.297 1.337-.523c.212-.067.412-.071.61-.076q.123-.002.247-.01c.155-.013.159-.034.005-.077a1.1 1.1 0 0 0-.348-.009c-.105.01-.117-.04-.13-.098q-.005-.026-.015-.052a6 6 0 0 1-.339-.942c-.008-.022 0-.026.022-.026a6.6 6.6 0 0 0 2.275-.013c.018.322-.036.644-.158.943a.03.03 0 0 1-.017.008l-.493.078a.1.1 0 0 0-.06.038l-.043.069-.005.009a.02.02 0 0 0 .003.017l.002.002.008.006c.18-.057.37-.075.558-.052a25 25 0 0 1 1.62.33q.129.038.021-.042c-.3-.206-.754-.292-1.127-.335l-.004-.008v-.017q-.001-.02.017-.022c.412-.017.737.037 1.068.093l.217.036q.226.04.022-.069c-.382-.17-.8-.243-1.217-.214q-.074.004-.158.016-.093.013-.19.018H9.63a.025.025 0 0 1-.017-.026l.009-.039c.062-.271.127-.557.102-.83a.03.03 0 0 1 .022-.03c.527-.163 1.114-.408 1.448-.88.283-.402.347-.89.215-1.362a4.1 4.1 0 0 0-.78-1.483q-.09-.11-.069-.18t.086-.068c.475-.018.938.007 1.399.031.333.018.665.035 1 .037l.01.005.004.003.002.003.002.01a4.6 4.6 0 0 0-.926 1.706c-.034.135-.038.275-.043.417l-.004.115c-.017.377.236.75.493 1.007.352.299.769.513 1.217.626a.064.064 0 0 1 .043.064q.004.43.111.848v.013l-.006.011-.01.007a2.77 2.77 0 0 0-1.672.222q-.02.01 0 .017.076.029.12.018a4.7 4.7 0 0 1 1.148-.137h.095c.115.034.115.05-.005.06-.37.023-.732.126-1.058.304q-.041.02-.043.038a.02.02 0 0 0 0 .022q.006.01.013.008.608-.142 1.221-.265l.08-.017c.336-.07.585-.121.863-.018q.09.032.039-.047c-.059-.098-.196-.11-.329-.121-.14-.012-.275-.024-.306-.136a3.8 3.8 0 0 1-.115-.827.04.04 0 0 1 .03-.026 6.5 6.5 0 0 0 2.28 0h.004a8 8 0 0 1-.36 1.016c-.009.017-.009.034-.009.051q.006.052-.047.052a9 9 0 0 0-.471.013.056.056 0 0 0-.052.055v.013a.026.026 0 0 0 .026.026q.121.004.243.004c.218.001.432.002.636.064.316.101.629.225.935.347q.187.076.372.146.18.065.021-.042a3 3 0 0 0-.968-.438c-.009-.004-.013-.008-.009-.021v-.013q.539.079 1.067.206.304.076.022-.06c-.463-.223-1.136-.287-1.642-.309-.017 0-.026-.013-.017-.03l.429-1.093a.12.12 0 0 1 .094-.077 1.58 1.58 0 0 0 .896-.548l.011-.015.035-.044a1.4 1.4 0 0 0 .202-.306q.134-.315.197-.655a.6.6 0 0 1 .116-.223.9.9 0 0 0 .141-.377.055.055 0 0 1 .086-.039l.197.129a.07.07 0 0 0 .043.012.1.1 0 0 0 .043-.017.1.1 0 0 0 .03-.042c.009-.013.009-.035.009-.052a.1.1 0 0 0-.018-.047c-.008-.013-.008-.026-.008-.043a1.3 1.3 0 0 0-.045-.318 2 2 0 0 1-.04-.21 1 1 0 0 0-.028-.097.4.4 0 0 1-.029-.185.04.04 0 0 1 .009-.017.03.03 0 0 1 .034-.009q.082.093.167.18.03.03.062.072c.084.102.188.229.324.198a.05.05 0 0 0 .034-.034c.086-.253-.042-.639-.128-.879a3.8 3.8 0 0 0-.677-1.272c-.026-.039-.026-.065.017-.086.381-.201.71-.49.956-.844.235-.335-.108-.729-.408-.857l-.088-.04c-.046-.02-.091-.042-.139-.055-.643-.193-1.345-.171-1.993 0a.06.06 0 0 1-.042-.008.5.5 0 0 1-.134-.14c-.051-.069-.1-.136-.196-.16a.13.13 0 0 1-.069-.047.14.14 0 0 1-.021-.082 1.05 1.05 0 0 1 .162-.493.03.03 0 0 1 .026-.013.03.03 0 0 1 .03.009l.086.111a.06.06 0 0 0 .064.018.06.06 0 0 0 .039-.052.25.25 0 0 0-.099-.21l-.013-.013a.04.04 0 0 1 0-.038q.21-.16.416-.326c.201-.159.411-.467.129-.66-.176-.12-.395-.017-.575.073a.03.03 0 0 1-.03 0 .03.03 0 0 1-.013-.03c.039-.274.506-.66.72-.827.15-.12.21-.3.086-.472-.214-.296-.626-.141-.784.112q-.077.114-.094-.022a.5.5 0 0 1 .008-.12c.069-.45.043-.891-.073-1.333a1.1 1.1 0 0 0-.24-.445.8.8 0 0 0-.351-.24c-.544-.202-1.303-.168-1.299.621.005.484.63.292.879.184a.06.06 0 0 1 .047 0 .06.06 0 0 1 .034.035q.206.47.206.985a10.4 10.4 0 0 1-.131 1.717 1.1 1.1 0 0 0-.023.345c.004.021-.005.034-.03.021l-.112-.043a.2.2 0 0 0-.043-.017c-.038 0-.068-.017-.098-.043a.04.04 0 0 0-.034-.017h-.275a.1.1 0 0 0-.043.009l-.171.098-.013.009-.013-.009h-.017c-.454.3-.604.832-.591 1.316.004.056-.026.077-.082.056-.325-.107-.647-.184-.977-.172-.343.005-1.02.018-.986.557v.215c-.021.377.275.728.532.986q.057.056-.026.055l-1.037-.026q-.155-.005-.039-.107.198-.174.352-.471c.146-.27.223-.733 0-.982-.369-.402-1.384-.218-1.847-.047-.056.022-.086 0-.086-.055-.017-.527-.103-.9-.489-1.269a.06.06 0 0 1-.012-.069 2.5 2.5 0 0 0 .257-.3.314.314 0 0 0-.086-.432c-.19-.117-.348.046-.495.197-.117.12-.227.235-.34.193a.04.04 0 0 1-.03-.026.04.04 0 0 1 0-.034c.17-.402.483-.667.802-.936q.11-.092.217-.187c.206-.185.485-.587.373-.887-.128-.33-.673-.553-.968-.36a1.12 1.12 0 0 0-.455.595m7.573 1.097c.021-.004.043-.025.069-.055q.066-.087.135-.188c.143-.208.3-.437.525-.498.287-.086.372.197.184.377l-.112.105c-.325.302-.7.651-.672 1.03a.06.06 0 0 0 .034.052.06.06 0 0 0 .064-.008c.129-.103.54-.382.647-.12.039.094-.03.222-.103.27-.216.139-.41.312-.57.514h-.017q-.162-.066-.265.043-.08.084.034.085l.137.005c.021 0 .026.013.017.03a2 2 0 0 0-.184.523q-.007.025-.034.025l-.18.013c-.013 0-.022-.004-.022-.021 0-.292-.077-.562-.223-.815a.27.27 0 0 1-.025-.158q.14-.873.154-1.702c.013-.6 0-1.054-.176-1.568q-.01-.027.017-.034c.09-.035.142-.06.159-.086q.04-.066-.034-.056-.285.045-.553.146c-.09.034-.369.073-.472-.004-.175-.146-.004-.455.133-.558.454-.33 1.05 0 1.269.438.283.574.175 1.577.034 2.185 0 .026.004.035.03.03m-7.911.917c.072 0 .12 0 .145-.008q.064-.02.103.103a.06.06 0 0 1-.021.064c-.343.223-.497.716-.506 1.106q0 .025-.026.025a.73.73 0 0 0-.758.365.04.04 0 0 1-.043.021l-.154-.026a.04.04 0 0 1-.03-.021c-.108-.253-.339-1.076-.155-1.303a.056.056 0 0 1 .09 0l.033.051c.068.11.172.278.267.296.257.052.27-.407.266-.561-.009-.283 0-.562.013-.84.013-.24.098-.493.321-.609a.1.1 0 0 1 .077 0 .1.1 0 0 1 .056.052c.048.133.004.329-.031.485l-.016.072c-.034.128.004.3.154.33.213.042.295-.275.334-.426V7.28c.108-.407.215-.771.335-1.093.107-.3.343-.664.724-.574.296.073.429.249.36.557a.7.7 0 0 1-.253.437l-.1.08c-.412.324-.937.737-.988 1.27a.03.03 0 0 1-.03.03l-.189.026a.026.026 0 0 0-.026.022v.03c.009.025.022.042.043.042zm9.985 5.979-.044.122c-.05.145-.11.319-.196.414q-.025.025-.025-.009a5 5 0 0 0-.3-1.264l.008-.043.129-.257a.03.03 0 0 1 .026-.017l.012.004.009.013.021.063c.128.373.244.712.545 1a.06.06 0 0 0 .06.008l.055-.021c.022-.013.039-.004.043.017q.034.08.026.167a.03.03 0 0 1-.012.02l-.01.005-.005.001h-.007l-.018-.004-.3-.228h-.008l-.007.006zM5.43 14.078a.9.9 0 0 1-.326.228H5.1l-.009-.009v-.004l-.004-.017v-.026l.017-.017a.3.3 0 0 0 .086-.06c.295-.296.408-.649.53-1.032l.006-.018.004-.005h.008l.228.412v.013q-.18.52-.232 1.071-.001.053-.034.009c-.087-.111-.146-.284-.197-.435q-.017-.053-.035-.101l-.004-.008-.008-.005a.02.02 0 0 0-.018 0zm3.536-5.995c.004.021-.009.03-.03.021l-.146-.051a.05.05 0 0 0-.052.004.44.44 0 0 1-.24.086q-.013.002-.008.017l.013.026.008.004a.7.7 0 0 1 .459.03q.026.01.038-.004c.146-.142.356-.352.258-.498a.1.1 0 0 0-.056-.034.1.1 0 0 0-.064.022l-.296.257q-.031.027.008.034l.086.03a.03.03 0 0 1 .017.013l.005.021zM7.98 9.42c.034-.497.416-1.552 1.101-.977a1.46 1.46 0 0 1 .497 1.14c-.03.454-.278 1.063-.835 1.015a.55.55 0 0 1-.356-.158.04.04 0 0 1-.009-.047.66.66 0 0 0 .018-.515.02.02 0 0 1 .017-.012c.643.154.574-.866.008-.695q-.257.078-.257.36 0 .014-.013.009l-.158-.094a.03.03 0 0 1-.013-.026m7.114-.257c-.531-.06-.553.814.073.703.017-.005.026 0 .017.021-.06.163-.06.33.009.493a.064.064 0 0 1-.017.077c-.33.266-.755.163-.969-.189a1.38 1.38 0 0 1-.129-1.225c.112-.279.408-.716.733-.755.523-.06.763.738.78 1.132 0 .013-.004.017-.013.021l-.154.095h-.008q-.039-.342-.322-.373m-6.548.27a.11.11 0 0 1-.108.111.111.111 0 1 1 0-.223.11.11 0 0 1 .108.112m6.702 0a.11.11 0 0 1-.107.111.111.111 0 1 1 0-.223.11.11 0 0 1 .107.112m-6.985.793c.115-.759-.905-1.046-1.136-.3V9.92c-.171.557.437.93.909.729.055-.022.051-.047-.009-.064-.287-.09-.073-.558.214-.348.009.009.022.005.022-.012m7.063.021c.287-.21.531.21.188.36h-.004c-.013.009-.013.013-.004.021q.213.127.471.073c.261-.055.561-.368.501-.685-.15-.819-1.277-.622-1.174.222l.006.008h.002v.001a.01.01 0 0 0 .014 0m-6.33.707-.026-.008a1.2 1.2 0 0 1-.549-.292q-.03-.032.009-.013.676.277 1.063-.283c.08-.112.123-.258.163-.395l.008-.029a.1.1 0 0 1 .03-.043c.343-.27.986-.274 1.44-.231.6.056.497.583.3.977-.36.72-1.243 1.269-2.04 1.401-.03.005-.034 0-.017-.025l.257-.317c.06-.07.127-.1.196-.131.05-.023.1-.046.147-.084.4-.3.715-.701.913-1.161q.006-.027.038-.022l.073.009a.02.02 0 0 0 .026-.009v-.025q-.33-.41-.827-.352a.5.5 0 0 0-.24.073q-.153.13.034.077a1 1 0 0 1 .296-.03q.026 0 .026.03c0 .215-.138.472-.253.669a11 11 0 0 1-1.595 2.006l-.021-.005c-.999-.574-1.967-1.367-2.546-2.387a.025.025 0 0 1 .004-.038l.013-.005.219-.038q.148-.026 0-.052c-.351-.064-.973.12-1.157.51q-.04.09.043.039.091-.056.171-.129a.04.04 0 0 1 .047.013c.369.429.87.844 1.415 1.02q.114.035.197.107.224.192.454.365.051.032-.013.025a4.67 4.67 0 0 1-2.777-1.474c-.257-.3.18-.583.411-.677a3.44 3.44 0 0 1 2.023-.124q.054.011.043.068c-.064.394.159.789.566.857.074.014.158.009.24.004l.068-.004q.054.001.005.022c-.197.103-.519.073-.699.051q-.012 0-.013.013l.005.034q.002.012.017.017c.355.086.805.086 1.071-.248q.013-.013.026 0a.93.93 0 0 0 .698.274.026.026 0 0 0 .017-.03m7.388-.051h-.018c-.203.014-.534.035-.663-.065q-.024-.017.008-.017.046.001.088.007l.075.006c.514-.017.754-.398.707-.891 0-.017.005-.03.026-.035.699-.171 1.543-.167 2.19.189.193.107.471.351.27.591a4.56 4.56 0 0 1-2.76 1.47q-.077.014-.013-.03.212-.154.416-.334a.6.6 0 0 1 .197-.116 3.34 3.34 0 0 0 1.423-1.02.05.05 0 0 1 .03-.017c.013 0 .026 0 .034.009l.167.128c.043.039.06.026.043-.03a.4.4 0 0 0-.098-.15c-.279-.282-.729-.475-1.128-.372a.02.02 0 0 0-.021.021.02.02 0 0 0 .021.021l.249.039a.05.05 0 0 1 .034.026.05.05 0 0 1 0 .043c-.583 1.015-1.543 1.795-2.533 2.37a.03.03 0 0 1-.038-.005 12 12 0 0 1-1.492-1.864 1.9 1.9 0 0 1-.342-.823l.004-.013a.03.03 0 0 1 .026-.008l.364.043c.013 0 .021 0 .021-.018v-.03a.02.02 0 0 0-.013-.008q-.63-.276-1.08.218-.102.11.039.065l.026-.009q.026-.01.038.017c.206.472.656 1.127 1.166 1.29.021.009.034.017.043.035l.304.368c.039.043.026.06-.03.047a3.15 3.15 0 0 1-1.778-1.063c-.215-.257-.412-.591-.386-.942q.02-.308.321-.365c.455-.085 1.183-.077 1.569.219a.1.1 0 0 1 .026.043c.128.493.394.814.934.784a.56.56 0 0 0 .3-.107h.004l.013.013v.008a1.1 1.1 0 0 1-.591.3q-.014.006-.009.017l.004.013.009.009c.248.034.531-.099.711-.262.009-.012.022-.012.03 0 .249.3.686.335 1.046.24q.027-.006.034-.025c.013-.022.005-.035-.017-.03m-5.927-.767-.069.282a.07.07 0 0 0 .035.073l.128.086a.07.07 0 0 0 .056.013.07.07 0 0 0 .043-.043l.116-.274c.004-.013.008-.03 0-.043a.07.07 0 0 0-.03-.043l-.185-.094a.07.07 0 0 0-.08.017.1.1 0 0 0-.014.026m2.349.137.124.278a.064.064 0 0 0 .09.026l.141-.086a.07.07 0 0 0 .026-.068l-.069-.292a.07.07 0 0 0-.036-.045.06.06 0 0 0-.058.002l-.188.099a.065.065 0 0 0-.03.086m-4.693.077c-.005.034-.039.051-.073.051-.039-.004-.06-.034-.06-.068a.06.06 0 0 1 .073-.047c.038.004.06.034.06.064m7.478-.009c0 .035-.03.065-.064.065-.03 0-.06-.03-.06-.065a.06.06 0 0 1 .06-.06.06.06 0 0 1 .045.016q.01.01.014.02zm-9.758.223-.09-.171a.073.073 0 0 0-.095-.03l-.252.12a.1.1 0 0 0-.026.021.07.07 0 0 0 0 .09l.188.227a.1.1 0 0 0 .026.017.07.07 0 0 0 .086-.017l.154-.171a.07.07 0 0 0 .009-.086m12.18.253.188-.223a.07.07 0 0 0 .017-.06.07.07 0 0 0-.042-.051l-.249-.12a.073.073 0 0 0-.094.03l-.095.171a.07.07 0 0 0 .013.086l.155.171.021.017a.07.07 0 0 0 .086-.021m-7.702-.193-.154.24-.004-.004a.034.034 0 0 0 0 .043l.094.128.009.009a.03.03 0 0 0 .023.005.03.03 0 0 0 .02-.014l.222-.265a.04.04 0 0 0 .009-.026.03.03 0 0 0-.005-.015l-.012-.01-.159-.1-.011-.004h-.012a.03.03 0 0 0-.02.013m2.739.129.231.287h-.004l.01.008a.026.026 0 0 0 .033-.008l.103-.15a.03.03 0 0 0 .005-.015.03.03 0 0 0-.005-.015l-.163-.236a.03.03 0 0 0-.016-.011.03.03 0 0 0-.018.003l-.172.098a.026.026 0 0 0-.004.039m-7.08.398.116-.193a.02.02 0 0 0 0-.017l-.112-.214a.02.02 0 0 0-.013-.009h-.009l-.008.005-.197.227a.02.02 0 0 0 0 .03l.193.171a.02.02 0 0 0 .03 0m11.863-.201-.202-.227-.008-.005h-.009l-.01.006-.002.002v.001l-.108.21a.02.02 0 0 0 0 .021l.107.198.007.006.008.002q.005 0 .009-.002l.006-.006.202-.176v-.009a.02.02 0 0 0 0-.021m-8.01.45.21-.33c.013-.017.021-.017.034-.004l.073.077.004.01v.011a.03.03 0 0 1-.008.017l-.296.232a.01.01 0 0 1-.014.002l-.005-.004-.003-.007v-.008zm-3.335.086a2.4 2.4 0 0 1-.394-.27v-.022l.064-.116c.013-.03.03-.03.043-.004l.3.39c.03.039.026.043-.013.022m7.046-.425.223.335v.008l-.004.009-.009.004h-.013l-.295-.236q-.02-.02 0-.034l.077-.086a.01.01 0 0 1 .013-.004q.005 0 .008.004m3.536.442h-.013l-.002-.004-.001-.005q0-.005.003-.008l.313-.412c.017-.026.034-.021.051.004l.052.108c.017.03.013.055-.022.077zm-6.142.004-.01-.003-.007-.01a.02.02 0 0 1 .009-.021l.116-.073.008-.004 1.543.034.009.004.051.052v.008l-.006.01-.01.003zm2.58.716a2 2 0 0 0-.287.308.09.09 0 0 1-.073.035l-2.751-.086a.14.14 0 0 1-.099-.043l-.3-.313H9.98l-.013.009v.008c.472.656.965 1.346 1.226 2.096.274.78.026 1.414-.66 1.83-.977.6-2.336.6-3.42.334a2 2 0 0 1-.378-.14l-.05-.023c-.806-.36-.875-1.212-.742-1.988a8 8 0 0 1 .45-1.594q.064-.153-.038-.022a.5.5 0 0 0-.086.172c-.043.102-.056.098-.056-.005a1.7 1.7 0 0 0-.034-.385q-.005-.029.008-.043l.189-.249a.04.04 0 0 1 .043-.013q.488.156 1.058.202a.46.46 0 0 1 .245.107c.235.184.471.368.758.458a.08.08 0 0 0 .073-.017l.647-.6a.1.1 0 0 1 .047-.025 3.7 3.7 0 0 0 1.449-.588.1.1 0 0 1 .047-.017 83 83 0 0 0 2.074 0c.049 0 .107.042.15.073l.018.013a3.7 3.7 0 0 0 1.341.514q.024.004.043.022l.643.6q.02.02.047.025l.06-.004a3.1 3.1 0 0 0 .806-.501q.07-.046.154-.052c.368-.03.728-.098 1.076-.214q.025-.006.042.013l.086.116a.04.04 0 0 1 0 .051.8.8 0 0 0-.051.317l-.009.009a.02.02 0 0 1-.021-.009l-.017-.021a.01.01 0 0 0-.01-.002l-.003.002-.009.004v.009c0 .021.004.042.022.064a.1.1 0 0 1 .021.043q.017.09.025.182c.017.152.033.302.138.443a.7.7 0 0 1 .103.193c.227.815.458 2.096-.412 2.627-.647.395-1.607.45-2.335.403a3.9 3.9 0 0 1-1.372-.317c-.416-.184-.891-.548-1.028-1.003-.159-.497.051-1.067.274-1.504a9 9 0 0 1 .93-1.479c.06-.081.056-.085-.022-.025m-8.408.805c.068-.102.098-.098.098.03a2 2 0 0 1-.048.41 2 2 0 0 0-.05.46q.01.168.098.026.11-.185.202-.441.129-.354.27-.785a.04.04 0 0 1 .043-.034.05.05 0 0 1 .047.03l.231.519.006.007.008.004.01-.001.006-.006c.081-.36.051-.737-.085-1.08-.009-.017 0-.026.017-.026h.043a.04.04 0 0 1 .042.026l.048.094q.013.025.034 0l.154-.188c.009-.013.004-.017-.008-.026l-.716-.313a.06.06 0 0 0-.06.009c-.415.387-.619.89-.826 1.404l-.053.13a2 2 0 0 0-.137.531.02.02 0 0 0 .009.022.02.02 0 0 0 .021 0c.19-.125.39-.46.53-.693zm13.136-.126.008.08.112.856c.008.065-.018.086-.078.043q-.038-.02-.077-.111a14 14 0 0 1-.45-1.17.03.03 0 0 0-.025-.017.03.03 0 0 0-.026.017l-.232.514q-.026.052-.047-.004c-.111-.296-.013-.742.086-1.033.009-.026 0-.034-.026-.034a.11.11 0 0 0-.098.06.034.034 0 0 1-.043.013.06.06 0 0 1-.034-.043.035.035 0 0 1 .017-.039l.703-.296q.018-.005.038.009c.356.375.526.813.701 1.266l.083.213q.091.235.125.407.031.166-.09.051c-.163-.157-.299-.375-.427-.582a8 8 0 0 0-.139-.22c-.043-.063-.072-.06-.081.02"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M14.723 7.882c-.204.04-.365.071-.589.248v.004q-.024.018-.004.043l.013.017V8.2h.021c.207-.159.38-.184.59-.215l.16-.025q.053-.007.047-.065v-.017a.04.04 0 0 0-.017-.03.04.04 0 0 0-.034-.004 4 4 0 0 1-.187.04"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenFWB.displayName = 'FWB'

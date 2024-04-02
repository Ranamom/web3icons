import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenZOOMER = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.243 4.783q.3.27.6.514c.24.206.403.386.476.553q.165.363.283.746l-.026.013c-.022.004-.034 0-.043-.022a3.4 3.4 0 0 0-.969-1.315 10 10 0 0 0-.595-.467q-.065-.051-.125.021l-.021.026c-.03.043-.021.073.013.103q.232.166.394.424.143.22.352.428.45.466.702 1.072l-.184.06a1.28 1.28 0 0 0-.347-.767 2.9 2.9 0 0 1-.643-.746 1.3 1.3 0 0 0-.3-.377.17.17 0 0 0-.193-.034q-.063.027-.055.098.002.04.017.073.03.095-.06.069c-.086-.03-.146 0-.189.077a.18.18 0 0 0-.021.145c.081.292.163.455.394.686.18.18.343.429.484.737a1.8 1.8 0 0 0-.505-.12.55.55 0 0 0-.339.086c-.197.12-.416.116-.609.266l-.21.18a.3.3 0 0 0-.03-.163q-.03-.064-.094-.043-.102.019-.103.206l-.613-.523c-.12-.159-.261-.193-.424-.116q.02-.085-.171-.15l-.45-.154q-.14-.051-.313-.386a.2.2 0 0 1-.013-.146c.146-.492.514-.471.909-.432a.09.09 0 0 0 .077-.039.1.1 0 0 0 .008-.094.17.17 0 0 1-.013-.112c.013-.043.039-.073.082-.077.111-.021.171-.017.27-.081.266-.163.536-.257.818-.27a10.6 10.6 0 0 1 1.775.051z"
          />
          <path
            fill="currentColor"
            d="M13.586 4.762q.384.297.737.625c.086.078.124.198.197.288.043.051.06.042.043-.026-.069-.339-.27-.6-.6-.772-.086-.047-.111-.094-.064-.145a.9.9 0 0 1 .398.025c.172.219.339.403.429.686.12.39.193.686.45 1.067a.44.44 0 0 1 .043.403.22.22 0 0 1-.155-.043.75.75 0 0 0-.192-.411q-.079-.083-.06.034a1 1 0 0 0 .042.193q.064.237-.137.107-.155-.095-.141.189-.141.077-.296-.103c-.16-.4-.397-.764-.698-1.072a2.7 2.7 0 0 1-.352-.428 1.6 1.6 0 0 0-.394-.429c-.034-.025-.043-.06-.013-.098l.021-.026q.053-.072.129-.021c.206.154.407.308.591.467.425.354.757.805.969 1.315.009.022.021.026.043.022l.026-.013.004-.009a6 6 0 0 0-.287-.737c-.073-.163-.236-.347-.48-.548l-.6-.515c.107-.081.227-.085.351-.025z"
          />
          <path
            fill="currentColor"
            d="M13.899 4.732q-.065.075.064.145a1.1 1.1 0 0 1 .6.772c.017.073 0 .077-.043.026-.073-.086-.111-.21-.197-.288q-.354-.328-.733-.625zm.643.004q-.021.103.008.141.395.485.57 1.085l.142.411a1.3 1.3 0 0 1 .068.549l-.111-.009a.44.44 0 0 0-.043-.403c-.257-.381-.33-.677-.454-1.067-.086-.283-.249-.467-.429-.686a.7.7 0 0 1 .249-.021"
          />
          <path
            fill="currentColor"
            d="M14.542 4.736a.5.5 0 0 1 .227.026 5.4 5.4 0 0 1 .805 2.031.06.06 0 0 0 .048.009l.038-.009c.052-.017.073-.051.06-.111l-.154-.913a1.8 1.8 0 0 0-.42-.943q-.046-.05.017-.073a.3.3 0 0 1 .107-.013.27.27 0 0 1 .167 0q.405.888.463 1.607.033.387.103.523a3 3 0 0 1-.527.12.2.2 0 0 1-.146-.068 1.4 1.4 0 0 0-.068-.549l-.142-.411a3.1 3.1 0 0 0-.57-1.085q-.03-.037-.008-.141"
          />
          <path
            fill="currentColor"
            d="M15.27 4.74a.3.3 0 0 0-.107.013q-.063.027-.017.073c.227.261.368.579.42.943.043.3.098.6.158.913.009.06-.012.094-.064.111l-.038.009a.06.06 0 0 1-.043-.009l-.022-.017a5.4 5.4 0 0 0-.793-2.014zm.167 0c.236 0 .472 0 .707-.013.343-.021.455.176.515.515q.136.823.317 1.645l-.172.043q-.135-.153-.385-.043a6 6 0 0 1-.073-.972c.004-.403-.18-.913-.553-1.093-.12-.056-.171-.017-.137.12q.085.398.24.758c.158.365.12.75.18 1.149a.1.1 0 0 0-.073.021q-.07-.129-.103-.523-.057-.72-.463-1.607"
          />
          <path
            fill="currentColor"
            d="M16.419 6.887q-.066.163-.343-.042c-.06-.395-.022-.78-.18-1.145a4 4 0 0 1-.24-.758q-.044-.205.137-.12c.373.18.557.685.557 1.093-.004.321.017.642.069.972m-3.99-.132q-.13.05-.215-.065a29 29 0 0 1-.591-.835c-.154-.228-.377-.365-.583-.528-.12-.094-.154-.188-.107-.291a.12.12 0 0 1 .06-.051.1.1 0 0 1 .077 0c.279.107.514.287.712.531q.416.514.762 1.033c.06.086.043.141-.051.18l-.06.026zm1.671.184c-.128.116-.236.116-.304-.013a2.1 2.1 0 0 0-.6-.75l.004.004c.232.322.227.515-.021.592l.008.128a2.6 2.6 0 0 0-.484-.737 1.33 1.33 0 0 1-.394-.686.2.2 0 0 1 .021-.145c.043-.077.107-.107.189-.077.06.017.081 0 .06-.069a.4.4 0 0 1-.017-.073q-.008-.072.055-.098a.17.17 0 0 1 .193.038c.12.112.227.223.3.373q.161.309.643.746c.171.158.291.415.347.767"
          />
          <path
            fill="currentColor"
            d="M12.802 5.722c.111.175.214.308.235.295.017-.012-.055-.167-.171-.342-.107-.172-.214-.3-.232-.292-.017.013.06.167.172.343zM9.81 5.615a1.41 1.41 0 0 1 1.372.497c.205.244.428.454.651.664.073.073.069.129-.021.18l-.052.03a.16.16 0 0 1-.184-.009 2.7 2.7 0 0 1-.63-.6c-.236-.317-.694-.42-1.046-.458a.21.21 0 0 1-.18-.142.13.13 0 0 1 .004-.102.12.12 0 0 1 .082-.06zm3.986 1.311-.617-.154c.248-.077.257-.27.021-.592v-.008h.004c.266.214.459.463.592.754m1.268-.056q-.386-.082-.488.112c-.009-.189.043-.253.141-.189.129.086.176.052.133-.107l-.043-.193q-.013-.114.065-.034a.74.74 0 0 1 .192.411m-4.131.335c.026.008.03.021.021.042a.2.2 0 0 1-.085.095q-.066.026-.073-.043v-.094l.017-.018a.05.05 0 0 1 .047-.008zm-.244.372-.013.035a.02.02 0 0 1-.013.021l-.017.013a.05.05 0 0 1-.043 0q-.103-.063-.026-.159a.064.064 0 0 1 .095-.008c.03.026.034.056.017.098m.308.249c.022.086.086.141.15.129.065-.022.095-.108.073-.193-.021-.086-.09-.142-.154-.125-.06.022-.09.103-.069.189m-.351.304-.317-.09a.02.02 0 0 1-.013-.021q0-.018.013-.034a.05.05 0 0 1 .043-.022c.09-.004.18-.03.257-.073.043-.017.073-.013.098.026q.058.085-.013.189a.06.06 0 0 1-.03.025.06.06 0 0 1-.038 0m.377-.094c.03-.004.051.004.064.034l.009.039c0 .043-.022.056-.06.051l-.06-.008c-.056-.009-.065-.03-.026-.073a.13.13 0 0 1 .073-.043m-.9.476c.039-.043.051-.095.026-.12-.026-.03-.077-.022-.116.017-.039.034-.047.086-.026.116.026.03.077.021.116-.013m.831-.125c.035 0 .06.022.069.056a.08.08 0 0 1-.026.082.07.07 0 0 1-.077.008.08.08 0 0 1-.043-.073q.007-.078.077-.073m-.261.245a.127.127 0 0 0 .081-.15.116.116 0 0 0-.145-.077.124.124 0 0 0-.086.15.117.117 0 0 0 .15.077m-.339.163a.17.17 0 0 1-.085-.056.04.04 0 0 1-.009-.034l.004-.022a.04.04 0 0 1 .013-.013.1.1 0 0 1 .099-.021.07.07 0 0 1 .043.043.13.13 0 0 1-.005.073.05.05 0 0 1-.025.025.04.04 0 0 1-.035 0zm5.22 1.127a.9.9 0 0 1 .566-.077.12.12 0 0 0 .111-.048l.035-.051c.025-.039.056-.043.094-.021.184.107.356.107.506-.005.043-.034.073-.025.081.035 0 .038 0 .072-.013.111a.1.1 0 0 1-.042.051.1.1 0 0 1-.056.018.28.28 0 0 0-.223.09.13.13 0 0 1-.124.038l-.275-.06a.24.24 0 0 0-.111.004 1 1 0 0 0-.214.086c-.219.12-.545.009-.737-.116a.15.15 0 0 0-.108-.021l-.227.043q-.066.02-.03-.043a.3.3 0 0 1 .112-.116.14.14 0 0 1 .124-.004c.073.03.15.039.223.017a.13.13 0 0 1 .12.022l.064.042a.2.2 0 0 0 .064.018c.022 0 .043 0 .06-.013m-3.788.107c.017-.073.056-.124.103-.142.025-.008.043-.008.064.009.013.009.017.021.021.034 0 .03-.008.043-.038.043q-.103-.007-.155.056zm1.941.321a7 7 0 0 1 .42-.034c.232-.009.305-.244.54-.287q.065-.015.065.056c0 .055-.022.102-.065.128-.291.214-.643.296-1.054.232a.07.07 0 0 1-.056-.043.1.1 0 0 1 0-.077.04.04 0 0 1 .017-.018.043.043 0 0 1 .056.009.1.1 0 0 0 .077.034m-2.64-.137a.7.7 0 0 1-.433.056c.052-.24.352-.309.429-.056zm2.182-.043.06-.034q.072-.04.085.043l.009.06q.02.101-.077.068a.16.16 0 0 1-.09-.085.04.04 0 0 1 0-.026.04.04 0 0 1 .013-.026"
          />
          <path
            fill="currentColor"
            d="M10.684 6.789q-.45.752-.81 1.551a.5.5 0 0 0-.013.309.2.2 0 0 1-.017.111 1 1 0 0 0-.12.373q-.001.058.043.064c.193.043.326 0 .407-.115.026-.039.043-.035.065 0 .042.098.111.128.214.107.261-.06.5-.193.686-.386q.166-.193.193-.664c.012-.3 0-.579-.035-.827 0-.129.034-.193.103-.21q.063-.015.094.043a.3.3 0 0 1 .03.17q.002.15.007.294c.02.77.04 1.435-.864 1.747-.203.07-.429.065-.653.06a4 4 0 0 0-.315 0 .12.12 0 0 0-.069.03.13.13 0 0 0-.043.069c-.075.402-.23.786-.458 1.127l.004.021.017.013h.021a1.36 1.36 0 0 1 1.445.386c.043.043.073.034.094-.018q.223-.461.716-.668c.017-.004.021-.017.021-.034-.004-.039-.021-.043-.043-.022l-.064.052a.16.16 0 0 1-.098.043c-.338.01-.67.077-.986.197a.1.1 0 0 1-.03-.013.1.1 0 0 1-.039-.06c-.008-.09.043-.146.146-.155a.66.66 0 0 0 .321-.115.7.7 0 0 0 .429-.056l.171-.017c.12-.009.129-.051.039-.129-.03-.025-.039-.055-.021-.098q.038-.11.064 0l.013.043a.1.1 0 0 0 .034.043.08.08 0 0 0 .051.02c.129.018.245 0 .348-.042q.037.065.12.039.284-.091.454-.112.064-.007.077-.073c.004-.025.021-.038.043-.038a.12.12 0 0 1 .09.034q.09.077.167.167l.043.03h.056a.27.27 0 0 0 .137-.094c.03-.034.021-.056-.018-.069l-.188-.064-.004-.008.008-.04q0-.011.013-.016a.03.03 0 0 1 .022-.009.73.73 0 0 1 .364.137c.043.03.047.069.008.107l-.201.206a.11.11 0 0 1-.12.034.24.24 0 0 1-.09-.06.13.13 0 0 0-.103-.042.4.4 0 0 0-.171.038.12.12 0 0 1-.12-.008.29.29 0 0 0-.287-.013c-.155.073-.15.107.025.111.562.005 1.05.403 1.372.883q.043.057.098.017c.386-.27.874-.523 1.337-.343.043.018.065 0 .06-.042l-.034-.472q-.001-.012.004-.025l.013-.022a.06.06 0 0 1 .052-.017l.043.004c.042.004.06.03.064.077.001.298.094.588.266.832a.04.04 0 0 0 .023.001.04.04 0 0 0 .02-.014c.415-.609 1.006-.815 1.778-.6.073.021.099-.009.069-.086-.13-.322-.13-.733-.128-1.11l-.001-.274c-.017-.568-.137-1.152-.254-1.725L16.8 6.93l.176-.043c.188.575.296 1.046.321 1.423q.026.315.013 1.479c0 .283.047.531.099.801a.15.15 0 0 0 .073.107c.617.378.694 1.072.18 1.603a.3.3 0 0 0-.086.172q-.076.59-.12 1.148c-.03.455-.694.96-1.029 1.145-.223.128-.428.3-.527.56q-.089.232-.248.31-.251.134-.528.312c-.241.156-.79.291-1.039.352a1 1 0 0 0-.126.034q-.083.051-.065.154c.14.6.432 1.151.849 1.603l.06.017c.33.013.668.052 1.011.108a.56.56 0 0 1 .266.12c.094.072.086.102-.034.09l-1.294-.16a.34.34 0 0 1-.24-.14c-.386-.528-.828-1.166-.73-1.87a.16.16 0 0 1 .057-.098.14.14 0 0 1 .098-.034c.483.016.947-.274 1.348-.523l.11-.068q.235-.143.394-.42c.128-.223.334-.403.604-.536q.45-.22.758-.686c.138-.206.144-.437.15-.674l.005-.131c.003-.132.038-.246.074-.364q.031-.092.054-.194l-.004-.03a.04.04 0 0 0-.013-.017.04.04 0 0 0-.047-.008q-.618.333-1.346.03c-.038-.018-.064-.005-.085.03l-.228.407a.2.2 0 0 0-.025.12.3.3 0 0 1-.017.146c-.018.042-.048.068-.095.068l-.591-.013q-.019.002-.03-.008a.1.1 0 0 1-.021-.022.06.06 0 0 1 0-.064l.03-.043c.042-.064.094-.086.167-.056l.253.099a.08.08 0 0 0 .068-.009.1.1 0 0 0 .039-.064q.03-.288.248-.583.09-.126-.026-.214a.9.9 0 0 1-.342-.651.44.44 0 0 0-.107-.27c-.582-.686-1.191-.279-1.758.1l-.043.028a.2.2 0 0 0-.072.099l-.146.398a.13.13 0 0 0 .017.124q.033.04.021.086a.09.09 0 0 1-.06.069l-.437.158q-.072.021-.055.099.11.578.587.544c.043 0 .073.022.081.073v.03c.009.03-.004.047-.03.056-.407.103-.758-.155-.801-.622 0-.055-.03-.073-.077-.055a1.43 1.43 0 0 1-1.818-.772.66.66 0 0 1-.047-.355.15.15 0 0 0-.043-.133 1.316 1.316 0 0 0-1.568-.365.14.14 0 0 0-.086.086 3.9 3.9 0 0 0-.411 1.483q-.014.49 0 .969c.002.246-.082.466-.167.687-.084.217-.168.436-.172.684 0 .35-.192.694-.374 1.02q-.089.158-.166.308c-.133.261-.314.454-.497.65-.112.12-.226.24-.33.38-.155.202-.367.35-.576.498l-.101.071a.12.12 0 0 0-.043.052v.034a.06.06 0 0 0 .026.034.05.05 0 0 0 .043 0 .83.83 0 0 1 .501-.043q.058.008.094.06c.018.026.018.047.009.069-.017.03-.043.043-.086.043l-.053-.005a.6.6 0 0 0-.238.009 2 2 0 0 1-.495.063 1.8 1.8 0 0 0-.504.07l-.16.062c-.247.096-.497.194-.761.19q-.349-.006-.022-.128.637-.25 1.273-.403a.17.17 0 0 0 .099-.064c.139-.154.3-.271.462-.388.152-.11.305-.22.438-.362q.567-.617.664-.827.221-.477.454-.87c.113-.192.13-.39.148-.584.014-.162.029-.321.097-.475a2.8 2.8 0 0 0 .252-1.393 4.2 4.2 0 0 1 .43-1.851q.043-.091-.048-.06l-.454.15c-.069.021-.116 0-.138-.073l-.017-.039a.06.06 0 0 1 .005-.042q.002-.01.009-.014l.003-.003.018-.013.724-.232a.15.15 0 0 0 .086-.073l.231-.385a.26.26 0 0 0 .034-.129c0-.18.043-.351.12-.514a.4.4 0 0 0 .035-.184.45.45 0 0 1 .197-.395q.052-.039.008-.085-.2-.218-.085-.558.129-.372.342-.771a7 7 0 0 0 .43-.973c.162-.077.3-.043.428.116zm2.499 4.663q-.001.193-.086.368a1 1 0 0 1-.257.317c-.107.09-.24.163-.386.215a1.42 1.42 0 0 1-1.285-.202.9.9 0 0 1-.258-.313.82.82 0 0 1-.008-.741q.09-.175.257-.317c.107-.086.236-.163.381-.214a1.41 1.41 0 0 1 1.29.2c.112.09.198.198.258.314q.092.18.094.373m2.957-.009.111.159a.13.13 0 0 0 .108.06q.384.026.711.128a.13.13 0 0 0 .137-.03.14.14 0 0 0 .043-.146.3.3 0 0 1 .021-.231c.065-.12.116-.111.16.017l.15.484a.2.2 0 0 1 0 .116c-.168.497-1.107.502-1.475.309q-.066-.04-.043-.112a.4.4 0 0 0 .017-.154.18.18 0 0 0-.051-.107l-.429-.437a.12.12 0 0 1-.021-.129.73.73 0 0 1 .201-.313q.128-.114.107.06l-.026.232v.025l.018.022.021.013h.021l.04-.013a.04.04 0 0 0 .02-.017.05.05 0 0 0 .01-.03 1.4 1.4 0 0 1 .012-.42.11.11 0 0 1 .06-.077c.356-.18.729-.202 1.131-.056.125.043.15.176.159.3q.006.064-.052.051a2.6 2.6 0 0 0-.788.022c-.122.02-.19.067-.274.125l-.082.055c-.043.021-.043.056-.017.094m1.56.364-.236-.805a.04.04 0 0 1 0-.026c0-.009.009-.017.018-.022a.03.03 0 0 1 .025 0c.009 0 .013.005.022.013l.214.279.004.017.073.3a.04.04 0 0 1 0 .021l-.056.223q0 .012-.012.018a.035.035 0 0 1-.043 0 .04.04 0 0 1-.013-.018zm-1.311-.446q-.153.116.017.185c.163.064.257.03.291-.107a.13.13 0 0 0-.034-.12.12.12 0 0 0-.116-.03.4.4 0 0 0-.158.072m-.506.798c-.017.017-.098-.052-.176-.15-.077-.099-.124-.198-.103-.215s.099.052.176.15c.077.103.125.197.103.215"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.104 11.285q.016.002.03-.005.096-.058.095.056c-.013.287.3.54.583.497q.305-.047.612-.026c.206.018.283-.077.249-.282-.009-.056.013-.073.064-.06a1 1 0 0 0 .137.017q.091.005.035-.073a.2.2 0 0 0-.107-.073 1.9 1.9 0 0 1-.575-.214c-.313-.189-.775-.15-1.075 0a.17.17 0 0 0-.086.107c-.004.034.004.056.038.056m.618.346a.7.7 0 0 1-.035-.21.2.2 0 0 1 .035-.107q.069-.089-.06-.171a.17.17 0 0 0-.155-.013c-.184.069-.227.176-.141.317.066.11.161.198.274.257a.06.06 0 0 0 .064-.008.06.06 0 0 0 .018-.065m.742.063a.05.05 0 0 0 .033-.007v.004c.047-.034.073-.072.073-.128l-.008-.052a.1.1 0 0 0-.035-.038q-.037-.033-.081-.013c-.03.013-.043.034-.043.073a.6.6 0 0 0 .03.146.05.05 0 0 0 .03.015"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.1 13.102c.15-.018.262-.082.257-.138-.004-.06-.128-.094-.278-.077-.146.018-.258.077-.253.137.008.06.128.095.278.078zm.193 1.101a8 8 0 0 0 1.671-.343.04.04 0 0 1 .018.009.05.05 0 0 1 .021.043v.042q0 .091-.081.125a6.5 6.5 0 0 1-1.715.351 2.6 2.6 0 0 1-1.217-.205c-.06-.026-.086-.069-.073-.138v-.047a.06.06 0 0 1 .03-.043.05.05 0 0 1 .043 0q.635.264 1.303.206m-2.104 3.669q.232-.205.15-.558-.015-.064.043-.085l.042-.013.03.004a.04.04 0 0 1 .022.026c.086.304.034.544-.146.724q-.046.044-.098.017l-.035-.017a.1.1 0 0 1-.021-.021.06.06 0 0 1 .013-.082z"
          />
        </>
      ) : (
        <>
          <path
            fill="#B97B5C"
            d="M13.243 4.783q.3.27.6.514c.24.206.403.386.476.553q.165.363.283.746l-.026.013c-.022.004-.034 0-.043-.022a3.4 3.4 0 0 0-.969-1.315 10 10 0 0 0-.595-.467q-.065-.051-.125.021l-.021.026c-.03.043-.021.073.013.103q.232.166.394.424.143.22.352.428.45.466.702 1.072l-.184.06a1.28 1.28 0 0 0-.347-.767 2.9 2.9 0 0 1-.643-.746 1.3 1.3 0 0 0-.3-.377.17.17 0 0 0-.193-.034q-.063.027-.055.098.002.04.017.073.03.095-.06.069c-.086-.03-.146 0-.189.077a.18.18 0 0 0-.021.145c.081.292.163.455.394.686.18.18.343.429.484.737a1.8 1.8 0 0 0-.505-.12.55.55 0 0 0-.339.086c-.197.12-.416.116-.609.266l-.21.18a.3.3 0 0 0-.03-.163q-.03-.064-.094-.043-.102.019-.103.206l-.613-.523c-.12-.159-.261-.193-.424-.116q.02-.085-.171-.15l-.45-.154q-.14-.051-.313-.386a.2.2 0 0 1-.013-.146c.146-.492.514-.471.909-.432a.09.09 0 0 0 .077-.039.1.1 0 0 0 .008-.094.17.17 0 0 1-.013-.112c.013-.043.039-.073.082-.077.111-.021.171-.017.27-.081.266-.163.536-.257.818-.27a10.6 10.6 0 0 1 1.775.051z"
          />
          <path
            fill="#020202"
            d="M13.586 4.762q.384.297.737.625c.086.078.124.198.197.288.043.051.06.042.043-.026-.069-.339-.27-.6-.6-.772-.086-.047-.111-.094-.064-.145a.9.9 0 0 1 .398.025c.172.219.339.403.429.686.12.39.193.686.45 1.067a.44.44 0 0 1 .043.403.22.22 0 0 1-.155-.043.75.75 0 0 0-.192-.411q-.079-.083-.06.034a1 1 0 0 0 .042.193q.064.237-.137.107-.155-.095-.141.189-.141.077-.296-.103c-.16-.4-.397-.764-.698-1.072a2.7 2.7 0 0 1-.352-.428 1.6 1.6 0 0 0-.394-.429c-.034-.025-.043-.06-.013-.098l.021-.026q.053-.072.129-.021c.206.154.407.308.591.467.425.354.757.805.969 1.315.009.022.021.026.043.022l.026-.013.004-.009a6 6 0 0 0-.287-.737c-.073-.163-.236-.347-.48-.548l-.6-.515c.107-.081.227-.085.351-.025z"
          />
          <path
            fill="#B97B5C"
            d="M13.899 4.732q-.065.075.064.145a1.1 1.1 0 0 1 .6.772c.017.073 0 .077-.043.026-.073-.086-.111-.21-.197-.288q-.354-.328-.733-.625zm.643.004q-.021.103.008.141.395.485.57 1.085l.142.411a1.3 1.3 0 0 1 .068.549l-.111-.009a.44.44 0 0 0-.043-.403c-.257-.381-.33-.677-.454-1.067-.086-.283-.249-.467-.429-.686a.7.7 0 0 1 .249-.021"
          />
          <path
            fill="#020202"
            d="M14.542 4.736a.5.5 0 0 1 .227.026 5.4 5.4 0 0 1 .805 2.031.06.06 0 0 0 .048.009l.038-.009c.052-.017.073-.051.06-.111l-.154-.913a1.8 1.8 0 0 0-.42-.943q-.046-.05.017-.073a.3.3 0 0 1 .107-.013.27.27 0 0 1 .167 0q.405.888.463 1.607.033.387.103.523a3 3 0 0 1-.527.12.2.2 0 0 1-.146-.068 1.4 1.4 0 0 0-.068-.549l-.142-.411a3.1 3.1 0 0 0-.57-1.085q-.03-.037-.008-.141"
          />
          <path
            fill="#B97B5C"
            d="M15.27 4.74a.3.3 0 0 0-.107.013q-.063.027-.017.073c.227.261.368.579.42.943.043.3.098.6.158.913.009.06-.012.094-.064.111l-.038.009a.06.06 0 0 1-.043-.009l-.022-.017a5.4 5.4 0 0 0-.793-2.014zm.167 0c.236 0 .472 0 .707-.013.343-.021.455.176.515.515q.136.823.317 1.645l-.172.043q-.135-.153-.385-.043a6 6 0 0 1-.073-.972c.004-.403-.18-.913-.553-1.093-.12-.056-.171-.017-.137.12q.085.398.24.758c.158.365.12.75.18 1.149a.1.1 0 0 0-.073.021q-.07-.129-.103-.523-.057-.72-.463-1.607"
          />
          <path
            fill="#020202"
            d="M16.419 6.887q-.066.163-.343-.042c-.06-.395-.022-.78-.18-1.145a4 4 0 0 1-.24-.758q-.044-.205.137-.12c.373.18.557.685.557 1.093-.004.321.017.642.069.972m-3.99-.132q-.13.05-.215-.065a29 29 0 0 1-.591-.835c-.154-.228-.377-.365-.583-.528-.12-.094-.154-.188-.107-.291a.12.12 0 0 1 .06-.051.1.1 0 0 1 .077 0c.279.107.514.287.712.531q.416.514.762 1.033c.06.086.043.141-.051.18l-.06.026zm1.671.184c-.128.116-.236.116-.304-.013a2.1 2.1 0 0 0-.6-.75l.004.004c.232.322.227.515-.021.592l.008.128a2.6 2.6 0 0 0-.484-.737 1.33 1.33 0 0 1-.394-.686.2.2 0 0 1 .021-.145c.043-.077.107-.107.189-.077.06.017.081 0 .06-.069a.4.4 0 0 1-.017-.073q-.008-.072.055-.098a.17.17 0 0 1 .193.038c.12.112.227.223.3.373q.161.309.643.746c.171.158.291.415.347.767"
          />
          <path
            fill="#B97B5C"
            d="M12.802 5.722c.111.175.214.308.235.295.017-.012-.055-.167-.171-.342-.107-.172-.214-.3-.232-.292-.017.013.06.167.172.343z"
          />
          <path
            fill="#020202"
            d="M9.81 5.615a1.41 1.41 0 0 1 1.372.497c.205.244.428.454.651.664.073.073.069.129-.021.18l-.052.03a.16.16 0 0 1-.184-.009 2.7 2.7 0 0 1-.63-.6c-.236-.317-.694-.42-1.046-.458a.21.21 0 0 1-.18-.142.13.13 0 0 1 .004-.102.12.12 0 0 1 .082-.06z"
          />
          <path
            fill="#B97B5C"
            d="m13.796 6.926-.617-.154c.248-.077.257-.27.021-.592v-.008h.004c.266.214.459.463.592.754m1.268-.056q-.386-.082-.488.112c-.009-.189.043-.253.141-.189.129.086.176.052.133-.107l-.043-.193q-.013-.114.065-.034a.74.74 0 0 1 .192.411"
          />
          <path
            fill="#020202"
            d="M10.933 7.205c.026.008.03.021.021.042a.2.2 0 0 1-.085.095q-.066.026-.073-.043v-.094l.017-.018a.05.05 0 0 1 .047-.008zm-.244.372-.013.035a.02.02 0 0 1-.013.021l-.017.013a.05.05 0 0 1-.043 0q-.103-.063-.026-.159a.064.064 0 0 1 .095-.008c.03.026.034.056.017.098m.308.249c.022.086.086.141.15.129.065-.022.095-.108.073-.193-.021-.086-.09-.142-.154-.125-.06.022-.09.103-.069.189m-.351.304-.317-.09a.02.02 0 0 1-.013-.021q0-.018.013-.034a.05.05 0 0 1 .043-.022c.09-.004.18-.03.257-.073.043-.017.073-.013.098.026q.058.085-.013.189a.06.06 0 0 1-.03.025.06.06 0 0 1-.038 0m.377-.094c.03-.004.051.004.064.034l.009.039c0 .043-.022.056-.06.051l-.06-.008c-.056-.009-.065-.03-.026-.073a.13.13 0 0 1 .073-.043m-.9.476c.039-.043.051-.095.026-.12-.026-.03-.077-.022-.116.017-.039.034-.047.086-.026.116.026.03.077.021.116-.013m.831-.125c.035 0 .06.022.069.056a.08.08 0 0 1-.026.082.07.07 0 0 1-.077.008.08.08 0 0 1-.043-.073q.007-.078.077-.073m-.261.245a.127.127 0 0 0 .081-.15.116.116 0 0 0-.145-.077.124.124 0 0 0-.086.15.117.117 0 0 0 .15.077m-.339.163a.17.17 0 0 1-.085-.056.04.04 0 0 1-.009-.034l.004-.022a.04.04 0 0 1 .013-.013.1.1 0 0 1 .099-.021.07.07 0 0 1 .043.043.13.13 0 0 1-.005.073.05.05 0 0 1-.025.025.04.04 0 0 1-.035 0zm5.22 1.127a.9.9 0 0 1 .566-.077.12.12 0 0 0 .111-.048l.035-.051c.025-.039.056-.043.094-.021.184.107.356.107.506-.005.043-.034.073-.025.081.035 0 .038 0 .072-.013.111a.1.1 0 0 1-.042.051.1.1 0 0 1-.056.018.28.28 0 0 0-.223.09.13.13 0 0 1-.124.038l-.275-.06a.24.24 0 0 0-.111.004 1 1 0 0 0-.214.086c-.219.12-.545.009-.737-.116a.15.15 0 0 0-.108-.021l-.227.043q-.066.02-.03-.043a.3.3 0 0 1 .112-.116.14.14 0 0 1 .124-.004c.073.03.15.039.223.017a.13.13 0 0 1 .12.022l.064.042a.2.2 0 0 0 .064.018c.022 0 .043 0 .06-.013m-3.788.107c.017-.073.056-.124.103-.142.025-.008.043-.008.064.009.013.009.017.021.021.034 0 .03-.008.043-.038.043q-.103-.007-.155.056zm1.941.321a7 7 0 0 1 .42-.034c.232-.009.305-.244.54-.287q.065-.015.065.056c0 .055-.022.102-.065.128-.291.214-.643.296-1.054.232a.07.07 0 0 1-.056-.043.1.1 0 0 1 0-.077.04.04 0 0 1 .017-.018.043.043 0 0 1 .056.009.1.1 0 0 0 .077.034"
          />
          <path
            fill="#B97B5C"
            d="M11.087 10.213a.7.7 0 0 1-.433.056c.052-.24.352-.309.429-.056z"
          />
          <path
            fill="#020202"
            d="m13.269 10.17.06-.034q.072-.04.085.043l.009.06q.02.101-.077.068a.16.16 0 0 1-.09-.085.04.04 0 0 1 0-.026.04.04 0 0 1 .013-.026"
          />
          <path
            fill="#020202"
            d="M10.684 6.789q-.45.752-.81 1.551a.5.5 0 0 0-.013.309.2.2 0 0 1-.017.111 1 1 0 0 0-.12.373q-.001.058.043.064c.193.043.326 0 .407-.115.026-.039.043-.035.065 0 .042.098.111.128.214.107.261-.06.5-.193.686-.386q.166-.193.193-.664c.012-.3 0-.579-.035-.827 0-.129.034-.193.103-.21q.063-.015.094.043a.3.3 0 0 1 .03.17q.002.15.007.294c.02.77.04 1.435-.864 1.747-.203.07-.429.065-.653.06a4 4 0 0 0-.315 0 .12.12 0 0 0-.069.03.13.13 0 0 0-.043.069c-.075.402-.23.786-.458 1.127l.004.021.017.013h.021a1.36 1.36 0 0 1 1.445.386c.043.043.073.034.094-.018q.223-.461.716-.668c.017-.004.021-.017.021-.034-.004-.039-.021-.043-.043-.022l-.064.052a.16.16 0 0 1-.098.043c-.338.01-.67.077-.986.197a.1.1 0 0 1-.03-.013.1.1 0 0 1-.039-.06c-.008-.09.043-.146.146-.155a.66.66 0 0 0 .321-.115.7.7 0 0 0 .429-.056l.171-.017c.12-.009.129-.051.039-.129-.03-.025-.039-.055-.021-.098q.038-.11.064 0l.013.043a.1.1 0 0 0 .034.043.08.08 0 0 0 .051.02c.129.018.245 0 .348-.042q.037.065.12.039.284-.091.454-.112.064-.007.077-.073c.004-.025.021-.038.043-.038a.12.12 0 0 1 .09.034q.09.077.167.167l.043.03h.056a.27.27 0 0 0 .137-.094c.03-.034.021-.056-.018-.069l-.188-.064-.004-.008.008-.04q0-.011.013-.016a.03.03 0 0 1 .022-.009.73.73 0 0 1 .364.137c.043.03.047.069.008.107l-.201.206a.11.11 0 0 1-.12.034.24.24 0 0 1-.09-.06.13.13 0 0 0-.103-.042.4.4 0 0 0-.171.038.12.12 0 0 1-.12-.008.29.29 0 0 0-.287-.013c-.155.073-.15.107.025.111.562.005 1.05.403 1.372.883q.043.057.098.017c.386-.27.874-.523 1.337-.343.043.018.065 0 .06-.042l-.034-.472q-.001-.012.004-.025l.013-.022a.06.06 0 0 1 .052-.017l.043.004c.042.004.06.03.064.077.001.298.094.588.266.832a.04.04 0 0 0 .023.001.04.04 0 0 0 .02-.014c.415-.609 1.006-.815 1.778-.6.073.021.099-.009.069-.086-.13-.322-.13-.733-.128-1.11l-.001-.274c-.017-.568-.137-1.152-.254-1.725L16.8 6.93l.176-.043c.188.575.296 1.046.321 1.423q.026.315.013 1.479c0 .283.047.531.099.801a.15.15 0 0 0 .073.107c.617.378.694 1.072.18 1.603a.3.3 0 0 0-.086.172q-.076.59-.12 1.148c-.03.455-.694.96-1.029 1.145-.223.128-.428.3-.527.56q-.089.232-.248.31-.251.134-.528.312c-.241.156-.79.291-1.039.352a1 1 0 0 0-.126.034q-.083.051-.065.154c.14.6.432 1.151.849 1.603l.06.017c.33.013.668.052 1.011.108a.56.56 0 0 1 .266.12c.094.072.086.102-.034.09l-1.294-.16a.34.34 0 0 1-.24-.14c-.386-.528-.828-1.166-.73-1.87a.16.16 0 0 1 .057-.098.14.14 0 0 1 .098-.034c.483.016.947-.274 1.348-.523l.11-.068q.235-.143.394-.42c.128-.223.334-.403.604-.536q.45-.22.758-.686c.138-.206.144-.437.15-.674l.005-.131c.003-.132.038-.246.074-.364q.031-.092.054-.194l-.004-.03a.04.04 0 0 0-.013-.017.04.04 0 0 0-.047-.008q-.618.333-1.346.03c-.038-.018-.064-.005-.085.03l-.228.407a.2.2 0 0 0-.025.12.3.3 0 0 1-.017.146c-.018.042-.048.068-.095.068l-.591-.013q-.019.002-.03-.008a.1.1 0 0 1-.021-.022.06.06 0 0 1 0-.064l.03-.043c.042-.064.094-.086.167-.056l.253.099a.08.08 0 0 0 .068-.009.1.1 0 0 0 .039-.064q.03-.288.248-.583.09-.126-.026-.214a.9.9 0 0 1-.342-.651.44.44 0 0 0-.107-.27c-.582-.686-1.191-.279-1.758.1l-.043.028a.2.2 0 0 0-.072.099l-.146.398a.13.13 0 0 0 .017.124q.033.04.021.086a.09.09 0 0 1-.06.069l-.437.158q-.072.021-.055.099.11.578.587.544c.043 0 .073.022.081.073v.03c.009.03-.004.047-.03.056-.407.103-.758-.155-.801-.622 0-.055-.03-.073-.077-.055a1.43 1.43 0 0 1-1.818-.772.66.66 0 0 1-.047-.355.15.15 0 0 0-.043-.133 1.316 1.316 0 0 0-1.568-.365.14.14 0 0 0-.086.086 3.9 3.9 0 0 0-.411 1.483q-.014.49 0 .969c.002.246-.082.466-.167.687-.084.217-.168.436-.172.684 0 .35-.192.694-.374 1.02q-.089.158-.166.308c-.133.261-.314.454-.497.65-.112.12-.226.24-.33.38-.155.202-.367.35-.576.498l-.101.071a.12.12 0 0 0-.043.052v.034a.06.06 0 0 0 .026.034.05.05 0 0 0 .043 0 .83.83 0 0 1 .501-.043q.058.008.094.06c.018.026.018.047.009.069-.017.03-.043.043-.086.043l-.053-.005a.6.6 0 0 0-.238.009 2 2 0 0 1-.495.063 1.8 1.8 0 0 0-.504.07l-.16.062c-.247.096-.497.194-.761.19q-.349-.006-.022-.128.637-.25 1.273-.403a.17.17 0 0 0 .099-.064c.139-.154.3-.271.462-.388.152-.11.305-.22.438-.362q.567-.617.664-.827.221-.477.454-.87c.113-.192.13-.39.148-.584.014-.162.029-.321.097-.475a2.8 2.8 0 0 0 .252-1.393 4.2 4.2 0 0 1 .43-1.851q.043-.091-.048-.06l-.454.15c-.069.021-.116 0-.138-.073l-.017-.039a.06.06 0 0 1 .005-.042q.002-.01.009-.014l.003-.003.018-.013.724-.232a.15.15 0 0 0 .086-.073l.231-.385a.26.26 0 0 0 .034-.129c0-.18.043-.351.12-.514a.4.4 0 0 0 .035-.184.45.45 0 0 1 .197-.395q.052-.039.008-.085-.2-.218-.085-.558.129-.372.342-.771a7 7 0 0 0 .43-.973c.162-.077.3-.043.428.116zm2.499 4.663q-.001.193-.086.368a1 1 0 0 1-.257.317c-.107.09-.24.163-.386.215a1.42 1.42 0 0 1-1.285-.202.9.9 0 0 1-.258-.313.82.82 0 0 1-.008-.741q.09-.175.257-.317c.107-.086.236-.163.381-.214a1.41 1.41 0 0 1 1.29.2c.112.09.198.198.258.314q.092.18.094.373m2.957-.009.111.159a.13.13 0 0 0 .108.06q.384.026.711.128a.13.13 0 0 0 .137-.03.14.14 0 0 0 .043-.146.3.3 0 0 1 .021-.231c.065-.12.116-.111.16.017l.15.484a.2.2 0 0 1 0 .116c-.168.497-1.107.502-1.475.309q-.066-.04-.043-.112a.4.4 0 0 0 .017-.154.18.18 0 0 0-.051-.107l-.429-.437a.12.12 0 0 1-.021-.129.73.73 0 0 1 .201-.313q.128-.114.107.06l-.026.232v.025l.018.022.021.013h.021l.04-.013a.04.04 0 0 0 .02-.017.05.05 0 0 0 .01-.03 1.4 1.4 0 0 1 .012-.42.11.11 0 0 1 .06-.077c.356-.18.729-.202 1.131-.056.125.043.15.176.159.3q.006.064-.052.051a2.6 2.6 0 0 0-.788.022c-.122.02-.19.067-.274.125l-.082.055c-.043.021-.043.056-.017.094m1.56.364-.236-.805a.04.04 0 0 1 0-.026c0-.009.009-.017.018-.022a.03.03 0 0 1 .025 0c.009 0 .013.005.022.013l.214.279.004.017.073.3a.04.04 0 0 1 0 .021l-.056.223q0 .012-.012.018a.035.035 0 0 1-.043 0 .04.04 0 0 1-.013-.018zm-1.311-.446q-.153.116.017.185c.163.064.257.03.291-.107a.13.13 0 0 0-.034-.12.12.12 0 0 0-.116-.03.4.4 0 0 0-.158.072m-.506.798c-.017.017-.098-.052-.176-.15-.077-.099-.124-.198-.103-.215s.099.052.176.15c.077.103.125.197.103.215"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#020202"
            d="M11.104 11.285q.016.002.03-.005.096-.058.095.056c-.013.287.3.54.583.497q.305-.047.612-.026c.206.018.283-.077.249-.282-.009-.056.013-.073.064-.06a1 1 0 0 0 .137.017q.091.005.035-.073a.2.2 0 0 0-.107-.073 1.9 1.9 0 0 1-.575-.214c-.313-.189-.775-.15-1.075 0a.17.17 0 0 0-.086.107c-.004.034.004.056.038.056m.618.346a.7.7 0 0 1-.035-.21.2.2 0 0 1 .035-.107q.069-.089-.06-.171a.17.17 0 0 0-.155-.013c-.184.069-.227.176-.141.317.066.11.161.198.274.257a.06.06 0 0 0 .064-.008.06.06 0 0 0 .018-.065m.742.063a.05.05 0 0 0 .033-.007v.004c.047-.034.073-.072.073-.128l-.008-.052a.1.1 0 0 0-.035-.038q-.037-.033-.081-.013c-.03.013-.043.034-.043.073a.6.6 0 0 0 .03.146.05.05 0 0 0 .03.015"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#020202"
            d="M14.1 13.102c.15-.018.262-.082.257-.138-.004-.06-.128-.094-.278-.077-.146.018-.258.077-.253.137.008.06.128.095.278.078zm.193 1.101a8 8 0 0 0 1.671-.343.04.04 0 0 1 .018.009.05.05 0 0 1 .021.043v.042q0 .091-.081.125a6.5 6.5 0 0 1-1.715.351 2.6 2.6 0 0 1-1.217-.205c-.06-.026-.086-.069-.073-.138v-.047a.06.06 0 0 1 .03-.043.05.05 0 0 1 .043 0q.635.264 1.303.206m-2.104 3.669q.232-.205.15-.558-.015-.064.043-.085l.042-.013.03.004a.04.04 0 0 1 .022.026c.086.304.034.544-.146.724q-.046.044-.098.017l-.035-.017a.1.1 0 0 1-.021-.021.06.06 0 0 1 .013-.082z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenZOOMER.displayName = 'ZOOMER'

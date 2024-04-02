import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenHVH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.933 11.593-.103-.142.043-.025.099.141zm2.156-.33-.189-.069.017-.043.185.069zm.261.291-.283-.094.018-.043.278.09-.013.043zM12 11.13l-.081-.069.03-.034.085.069-.03.034zm-.338.137h-.198v-.047h.198zm1.375-.227-.415-.184.021-.043.412.184zm-2.151.069-.171.094-.026-.039.171-.094.026.043zm.587.805h-.364v-.047h.364zm-.986.005-.145-.16.034-.03.146.16zm2.452-1.402a1.9 1.9 0 0 0-.596-.248l.013-.043c.111.021.394.107.608.257zm-1.594-.038c-.202.06-.378.167-.438.21l-.03-.04c.065-.042.245-.15.455-.213z"
          />
          <path
            fill="currentColor"
            d="M11.649 10.414c.488-.043 1.573.107 1.971 1.08-.158-.184-.488-.9-1.971-1.08m.643 2.032a1.3 1.3 0 0 1-.643-.129c.111.013.386.034.643.034s.672-.175.844-.261a1.46 1.46 0 0 1-.844.356"
          />
          <path
            fill="currentColor"
            d="M18.857 8.139 12 4.286 5.143 8.139v7.7L12 19.715l6.857-3.874zm-1.714.432L12.43 6v4.071c-.215-.077-.27-.025-.514-.025-.18 0-.172-.232-.343-.189V6L6.857 8.57 10.5 10.5c-.317.257-.527.463-.643.857L6.43 9.43v5.142l3.428-1.928c.086.403.133.583.429.857l-3.429 1.928L11.572 18v-3.857c.171.043.163 0 .343 0 .244 0 .3.077.514 0V18l4.714-2.572-3.729-1.958c.288-.29.48-.66.55-1.063l3.608 2.164V9.43l-3.429 1.928c-.099-.398-.343-.591-.643-.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M13.372 12.214a2.6 2.6 0 0 1-1.432.416 2.57 2.57 0 0 1-1.646-.57l-.008.137c.334.184.969.493 1.29.493.261 0 .467-.017.626-.034.107-.009.197-.018.274-.018-.716.382-1.727-.042-2.186-.32.06.78.806 1.396 1.71 1.396.943 0 1.714-.673 1.714-1.5q.001-.11-.017-.214c-.227.566-1.002.771-1.371.801q.097-.05.227-.094c.159-.064.356-.137.57-.287.082-.056.167-.129.249-.206"
          />
          <path
            fill="currentColor"
            d="M11.34 9.857c-.081-.159-.085-.643.515-1.5.32-.493.385-1.033.385-1.5l.06.146c.129.304.214.518.214.814 0 .313-.085.664-.162.994-.018.086-.262 1.025-.073 1.046a.9.9 0 0 1 .24-.489c.103-.107.236-.2.381-.3.159-.107.326-.218.467-.368.215-.227.287-.339.279-.364a.47.47 0 0 1 .068.278c-.004.142-.098.326-.257.536-.381.514-.458.716-.428.891.056-.171.411-.557 1.431-.754.508-.14.964-.426 1.312-.823l-.056.15a2 2 0 0 1-.407.729c-.214.231-.514.428-.797.617l-.018.008c-.282.19-.548.365-.745.643a.9.9 0 0 1 .497-.145c.15 0 .309.038.48.073.184.042.386.085.587.085.313 0 .416-.051.429-.077-.018.129-.185.394-.69.454-.635.078-.832.159-.935.3.155-.077.682-.085 1.53.523.493.322 1.029.386 1.496.386l-.146.06c-.304.129-.514.214-.81.214-.313 0-.664-.085-.994-.158-.377-.09-.686-.18-.909-.12a.3.3 0 0 0-.14.12.93.93 0 0 1 .402.227c.107.103.201.24.3.385.107.155.219.322.368.463.228.215.34.249.365.24-.099.078-.403.159-.815-.145-.05-.043-.78-.596-.878-.42.171.064.549.424.75 1.427.13.518.405.988.793 1.354l-.146-.056a1.9 1.9 0 0 1-.703-.445c-.227-.215-.428-.515-.613-.797-.214-.318-.402-.61-.6-.73.047.1.09.24.09.408 0 .15-.034.309-.068.48a2.6 2.6 0 0 0-.077.583c0 .313.043.424.068.437-.128-.021-.394-.184-.454-.694-.073-.617-.154-.819-.287-.926h-.009c.073.172.064.69-.523 1.526a2.7 2.7 0 0 0-.385 1.5l-.06-.146c-.125-.304-.215-.518-.215-.814 0-.313.086-.665.163-.995.102-.313.138-.644.107-.972 0-.022-.004-.039-.034-.043a.9.9 0 0 1-.236.458 2.4 2.4 0 0 1-.385.3 2.7 2.7 0 0 0-.463.369c-.215.227-.253.338-.24.364-.077-.098-.159-.407.146-.814.385-.514.458-.716.428-.891-.051.17-.411.557-1.431.754a2.7 2.7 0 0 0-1.359.716l.06-.146c.116-.309.249-.416.45-.63.214-.227.514-.429.801-.613.297-.185.562-.417.785-.686a.9.9 0 0 1-.485.137 2.3 2.3 0 0 1-.48-.072 2.6 2.6 0 0 0-.587-.086c-.312 0-.415.051-.428.077.017-.129.184-.394.69-.454.634-.077.806-.159.908-.3-.154.077-.655.085-1.5-.523a2.7 2.7 0 0 0-1.5-.386l.146-.06c.304-.128.514-.214.81-.214.313 0 .664.085.994.163.377.085.729.171.943.111.056 0 .052-.043.073-.06a2.3 2.3 0 0 1-.407-.24 2.3 2.3 0 0 1-.3-.386c-.103-.154-.214-.321-.369-.463-.227-.214-.338-.248-.364-.24.099-.077.403-.158.814.146.515.377.712.455.888.42-.168-.047-.558-.403-.76-1.427a2.75 2.75 0 0 0-.753-1.354c.051.021.098.043.145.055.309.12.455.245.665.446.227.214.428.515.617.797.205.317.398.609.595.729a1 1 0 0 1-.09-.407c0-.15.035-.309.073-.48.043-.184.086-.386.086-.592 0-.312-.056-.415-.081-.428.128.021.394.184.454.694.077.634.159.797.3.9zm.613 4.23a2.035 2.035 0 1 0 0-4.071 2.057 2.057 0 0 0-2.07 2.031c0 1.123.947 2.04 2.07 2.04"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="m10.933 11.593-.103-.142.043-.025.098.141zm2.155-.33-.188-.069.017-.043.184.069zm.262.291-.283-.094.017-.043.279.09-.013.043zM12 11.13l-.082-.069.03-.034.086.069-.03.034zm-.339.137h-.197v-.047h.197zm1.376-.227-.416-.184.022-.043.411.184zm-2.152.069-.171.094-.026-.039.172-.094.025.043zm.588.805h-.365v-.047h.365zm-.986.005-.146-.16.034-.03.146.16zm2.451-1.402a1.9 1.9 0 0 0-.595-.248l.012-.043c.112.021.395.107.609.257zm-1.594-.038c-.201.06-.377.167-.437.21l-.03-.04c.064-.042.244-.15.454-.213z"
          />
          <path
            fill="#fff"
            d="M11.648 10.414c.489-.043 1.573.107 1.972 1.08-.159-.184-.489-.9-1.972-1.08m.643 2.032a1.3 1.3 0 0 1-.643-.129c.112.013.386.034.643.034s.673-.175.844-.261a1.46 1.46 0 0 1-.844.356"
          />
          <path
            fill="#76928C"
            d="M18.857 8.139 12 4.286 5.143 8.139v7.7L12 19.715l6.857-3.874zm-1.714.432L12.428 6v4.071c-.214-.077-.27-.025-.514-.025-.18 0-.171-.232-.343-.189V6L6.857 8.57 10.5 10.5c-.317.257-.527.463-.643.857L6.428 9.43v5.142l3.429-1.928c.086.403.133.583.428.857l-3.428 1.928L11.57 18v-3.857c.172.043.163 0 .343 0 .244 0 .3.077.514 0V18l4.715-2.572-3.729-1.958c.287-.29.479-.66.549-1.063l3.608 2.164V9.43l-3.428 1.928c-.099-.398-.343-.591-.643-.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M13.371 12.214a2.6 2.6 0 0 1-1.431.416 2.57 2.57 0 0 1-1.646-.57l-.009.137c.335.184.969.493 1.29.493.262 0 .468-.017.626-.034.107-.009.197-.018.274-.018-.715.382-1.727-.042-2.185-.32.06.78.805 1.396 1.71 1.396.943 0 1.714-.673 1.714-1.5q.001-.11-.017-.214c-.227.566-1.003.771-1.372.801q.098-.05.228-.094c.158-.064.355-.137.57-.287.081-.056.167-.129.248-.206"
          />
          <path
            fill="#fff"
            d="M11.34 9.857c-.082-.159-.086-.643.514-1.5.321-.493.386-1.033.386-1.5l.06.146c.128.304.214.518.214.814 0 .313-.086.664-.163.994-.017.086-.261 1.025-.073 1.046a.9.9 0 0 1 .24-.489c.103-.107.236-.2.382-.3.158-.107.325-.218.467-.368.214-.227.287-.339.278-.364a.47.47 0 0 1 .069.278c-.004.142-.099.326-.257.536-.382.514-.459.716-.429.891.056-.171.412-.557 1.432-.754a2.7 2.7 0 0 0 1.311-.823l-.056.15a2 2 0 0 1-.407.729c-.214.231-.514.428-.797.617l-.017.008c-.283.19-.549.365-.746.643a.9.9 0 0 1 .497-.145c.15 0 .309.038.48.073.185.042.386.085.588.085.312 0 .415-.051.428-.077-.017.129-.184.394-.69.454-.634.078-.831.159-.934.3.154-.077.681-.085 1.53.523.493.322 1.028.386 1.496.386l-.146.06c-.304.129-.514.214-.81.214-.313 0-.664-.085-.994-.158-.378-.09-.686-.18-.909-.12a.3.3 0 0 0-.141.12c.102.025.257.09.402.227.108.103.202.24.3.385.108.155.219.322.369.463.227.215.339.249.364.24-.098.078-.403.159-.814-.145-.051-.043-.78-.596-.879-.42.172.064.549.424.75 1.427.13.518.405.988.793 1.354l-.145-.056a1.9 1.9 0 0 1-.703-.445c-.227-.215-.429-.515-.613-.797-.214-.318-.403-.61-.6-.73.047.1.09.24.09.408 0 .15-.034.309-.069.48a2.6 2.6 0 0 0-.077.583c0 .313.043.424.069.437-.129-.021-.395-.184-.455-.694-.072-.617-.154-.819-.287-.926h-.008c.073.172.064.69-.523 1.526a2.7 2.7 0 0 0-.386 1.5l-.06-.146c-.124-.304-.214-.518-.214-.814 0-.313.086-.665.163-.995.101-.313.138-.644.107-.972 0-.022-.004-.039-.034-.043a.9.9 0 0 1-.236.458 2.4 2.4 0 0 1-.386.3 2.7 2.7 0 0 0-.463.369c-.214.227-.253.338-.24.364-.077-.098-.158-.407.146-.814.386-.514.459-.716.429-.891-.052.17-.412.557-1.432.754a2.7 2.7 0 0 0-1.358.716l.06-.146c.115-.309.248-.416.45-.63.214-.227.514-.429.801-.613.297-.185.561-.417.784-.686a.9.9 0 0 1-.484.137c-.15 0-.309-.034-.48-.072a2.6 2.6 0 0 0-.587-.086c-.313 0-.416.051-.429.077.017-.129.185-.394.69-.454.635-.077.806-.159.909-.3-.154.077-.656.085-1.5-.523a2.7 2.7 0 0 0-1.5-.386l.146-.06c.304-.128.514-.214.81-.214.312 0 .664.085.994.163.377.085.728.171.943.111.055 0 .051-.043.073-.06a2.3 2.3 0 0 1-.408-.24 2.3 2.3 0 0 1-.3-.386 2.4 2.4 0 0 0-.368-.463c-.227-.214-.339-.248-.364-.24.098-.077.402-.158.814.146.514.377.711.455.887.42-.167-.047-.557-.403-.759-1.427a2.75 2.75 0 0 0-.754-1.354c.052.021.099.043.146.055.308.12.454.245.664.446.227.214.429.515.617.797.206.317.399.609.596.729a1 1 0 0 1-.09-.407c0-.15.034-.309.073-.48.043-.184.086-.386.086-.592 0-.312-.056-.415-.082-.428.129.021.394.184.454.694.078.634.159.797.3.9zm.613 4.23a2.035 2.035 0 1 0 0-4.071 2.057 2.057 0 0 0-2.07 2.031c0 1.123.947 2.04 2.07 2.04"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenHVH.displayName = 'HVH'

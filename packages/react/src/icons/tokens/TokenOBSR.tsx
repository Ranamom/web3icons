import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenOBSR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.62 10.5c.38.41.691.877.92 1.387.23-.567.351-1.171.358-1.783v-.122l.064.093v.03A4.9 4.9 0 0 1 16.585 12a4.9 4.9 0 0 1 .401 1.895v.019c.38-.418.682-.9.892-1.425q.09-.24.151-.49l.01-.034a5 5 0 0 0-.161-.455 4.7 4.7 0 0 0-.902-1.435v-.01l-.078-.083q.003-.048.001-.095l-.025-.027q.003.06 0 .122l-.084-.089a4.9 4.9 0 0 0-1.503-1.023c.201.52.314 1.069.332 1.626z"
          />
          <path
            fill="currentColor"
            d="M16.987 9.958c.496.529.87 1.16 1.095 1.85a5 5 0 0 0-.009-2.326v-.004.024a4.7 4.7 0 0 0-.73-.93 5 5 0 0 0-.933-.752c.334.65.52 1.365.546 2.095l.03.032zm1.041 4.747.045-.165a.6.6 0 0 1-.045.165"
          />
          <path
            fill="currentColor"
            d="M9.757 14.091a5 5 0 0 1-.388-.443l-.073-.137-.04-.057-.028-.08-.018-.05-.025-.06q.026.095.057.19.067.226.162.44.1.244.23.471a1 1 0 0 1-.142-.078 5 5 0 0 1-.424-1.13 5 5 0 0 1-.457-1 .4.4 0 0 1 .018-.065c.01-.03.02-.06.02-.092a7 7 0 0 0 .172.49c.027.07.074.15.117.223.05.085.096.162.103.212q.005.03.014.063.037.069.079.138a3.7 3.7 0 0 1-.202-1.112L8.934 12v-.108q0-.096.005-.193a3 3 0 0 0-.015.193 5 5 0 0 1 .081-.78q-.102.195-.184.398-.049.123-.098.254l-.067.174c.008.02.01.04-.006.062-.04.053-.04.102-.04.156q-.009-.024-.022-.048l-.01-.018a.2.2 0 0 0 .033.066 4.8 4.8 0 0 0-.138 1.185v.123l-.083-.093a5 5 0 0 1 .17-1.331.1.1 0 0 1 .001-.04l.006-.017c-.121-.443-.18-.9-.177-1.36l.083-.093v.127q0 .578.135 1.139a5 5 0 0 1 .473-1.006l.021-.034q.067-.105.14-.211l-.028.078c-.024.066-.049.13-.05.196.148-.35.354-.677.603-.947a.6.6 0 0 0 .092-.07l.05-.046-.044.041.025-.023.018-.018q.079-.075.16-.149c.2-.168.422-.31.657-.42a2 2 0 0 1-.162.033l-.032.022q-.22.07-.431.161a5 5 0 0 0-.475.228 4 4 0 0 0-.221.473q-.105.215-.181.44c-.047.068-.088.13-.13.196l-.032.05a5 5 0 0 1 .416-1.069q-.496.309-.906.726l-.106.06-.001.023-.084.088v.01A4.8 4.8 0 0 0 7.508 12a4.8 4.8 0 0 0 .872 1.371v.005l.084.093.107.083q.405.432.901.755.036.073.079.141a5 5 0 0 1-1.082-.846c.03.54.149 1.07.352 1.571v.005q.02.055.049.108c.24.55.578 1.052 1 1.48l.088.083H9.83a4.9 4.9 0 0 1-1.072-1.607 4.9 4.9 0 0 1-1.625-1.067 4.8 4.8 0 0 0 .375 1.62q.1.24.226.466l.007.014q.226.12.463.216c.516.22 1.066.348 1.626.377l.03.03h.122l.063.059h.02l-.083-.079h.122a4.9 4.9 0 0 0 1.783-.338 5.1 5.1 0 0 1-1.38-.916h-.01l-.007-.006a5 5 0 0 1-1.615-.332 1 1 0 0 1-.049-.108c.491.2 1.011.318 1.54.35a5 5 0 0 1-.815-1.08 1 1 0 0 1-.059-.161q.06.053.123.098.027.056.058.11l.04.012q.31.506.734.921l.074.108h.01l.087.083h.01c.405.367.868.661 1.372.872.503-.21.967-.505 1.371-.872h.005l.093-.083.123-.005a4.9 4.9 0 0 0 1.582-.353h.005l.107-.049a4.9 4.9 0 0 0 1.504-1.023l.059-.089a1 1 0 0 1 0 .128v.024a4.9 4.9 0 0 1-1.607 1.073 4.9 4.9 0 0 1-1.066 1.625 4.8 4.8 0 0 0 2.085-.601q.074-.035.142-.079-.035.075-.078.142l-.005.003a4.95 4.95 0 0 1-1.543 1.662l-.28.079c.34-.203.653-.449.931-.73q.433-.42.75-.933c-.65.334-1.365.52-2.094.546l-.032.03h-.01c-.53.496-1.16.87-1.85 1.095a5 5 0 0 0 2.326-.008l-.02.011.02-.011.279-.079-.25.157-.284.064A4.9 4.9 0 0 1 12 18.117a4.9 4.9 0 0 1-2.263.098q-.125-.064-.242-.135l-.013-.007a5 5 0 0 0 2.318.01 4.9 4.9 0 0 1-1.847-1.097h-.005l-.032-.03a4.95 4.95 0 0 1-2.092-.537c.21.337.461.648.747.924.268.278.57.521.896.726l.015.004q.123.08.255.142l-.284-.064-.235-.147L9.203 18a4.95 4.95 0 0 1-1.528-1.67q.054.033.11.062l-.001-.003a1 1 0 0 1-.114-.065l-.003-.004a4.95 4.95 0 0 1-1.662-1.543l-.028-.079-.006-.015.034.113q-.026-.038-.056-.077a.6.6 0 0 1-.097-.158 4.95 4.95 0 0 0 3.6 3.59 4.96 4.96 0 0 0 5.095 0 4.96 4.96 0 0 0 3.606-3.604 4.95 4.95 0 0 0 0-5.094 4.95 4.95 0 0 0-3.605-3.605 4.95 4.95 0 0 0-5.093 0l.282-.064A4.9 4.9 0 0 1 12 5.882a5 5 0 0 1 1.342-.186q.464 0 .92.088.13.066.256.142a5 5 0 0 0-2.361 0c.704.219 1.35.592 1.89 1.092h-.117l.02.02h.102a4.94 4.94 0 0 1 2.13.553q.045.072.079.147a4.8 4.8 0 0 0-2.116-.612h-.127l-.026-.024h-.097a4.9 4.9 0 0 0-1.782.357c.507.228.973.537 1.38.916h.01l.007.005a5 5 0 0 1 1.615.333q.027.052.049.108a4.9 4.9 0 0 0-1.54-.35c.32.32.594.684.815 1.08q.035.078.059.16a1 1 0 0 0-.123-.097 1 1 0 0 0-.059-.11l-.015-.005q.041.065.074.135a4 4 0 0 0-.49-.23q-.163-.08-.333-.144.17.14.327.29l.012.01q.222.196.421.416l-.098-.11a5 5 0 0 1 .518.649l.029.081.02.054-.03-.093-.003-.012a4 4 0 0 0-.162-.44 4 4 0 0 0-.23-.471q.073.034.142.078a5 5 0 0 1 .424 1.131q.285.474.457 1l-.018.064c-.01.03-.02.06-.02.093a7 7 0 0 0-.172-.49 2 2 0 0 0-.118-.224.8.8 0 0 1-.103-.212l-.012-.06-.056-.098q.132.354.176.733.017.31-.002.62.008-.08.012-.162a6 6 0 0 1-.082.781 5 5 0 0 0 .185-.399q.049-.12.096-.25l.075-.194a.1.1 0 0 1 0-.045l.016-.049a.3.3 0 0 0 .023-.108 4.8 4.8 0 0 0 .147-1.19v-.123l.084.098a5 5 0 0 1-.187 1.389c.12.442.18.9.177 1.359l-.083.093v-.127c0-.383-.045-.766-.136-1.138a5 5 0 0 1-.453.97l-.019.036-.037.058-.116.174-.008.027q-.228.324-.503.61l-.011.012a2 2 0 0 1-.152.152c-.515.481-1.762.768-2.047.82l-.027-.005h-.109a5 5 0 0 1-.42-.028q.2.036.403.046a6 6 0 0 1-.781-.082 5 5 0 0 0 .504.226c.109.043.221.087.333.143L12 15.35q.245-.075.49-.172.206-.077.393-.193a6 6 0 0 1-.775.08 3.2 3.2 0 0 0 1.038-.23h.03a3 3 0 0 0 .279-.078q.225-.066.44-.162a4 4 0 0 0 .47-.23 1 1 0 0 1-.078.142 5 5 0 0 1-1.077.412l-.05.01q-.474.286-1.003.46l-.018-.005-.14.044a5 5 0 0 1-1.346.181h-.03l-.092-.083h.127c.37 0 .74-.042 1.1-.126a5 5 0 0 1-.968-.462l.257.035-.003-.002-.254-.052a5 5 0 0 1-1.078-.412 1 1 0 0 1-.078-.142 4.6 4.6 0 0 0 .911.392q.04.012.08.028.058.024.115.04a3 3 0 0 1-.719-.441l-.132-.121a.6.6 0 0 0-.116-.154zM12 15.428a5 5 0 0 0 1.342.181h.03l.093-.083h-.123a4.8 4.8 0 0 1-1.185-.137zm2.449-.98a1 1 0 0 1-.162.06q.05-.055.093-.115l-.014.007a4 4 0 0 0 .23-.49q.095-.216.162-.441c.058-.098.107-.176.161-.226q-.135.526-.377 1.011a4.8 4.8 0 0 0 .886-.702l.107-.06.001-.023.084-.092v-.006A4.8 4.8 0 0 0 16.49 12a4.8 4.8 0 0 0-.871-1.372v-.005l-.084-.093a4.9 4.9 0 0 0-.357-1.704V8.82a1 1 0 0 0-.05-.108 4.9 4.9 0 0 0-1.023-1.48l-.088-.083h.152c.46.46.825 1.006 1.072 1.607.61.25 1.163.622 1.626 1.092a4.8 4.8 0 0 0-.377-1.646 5 5 0 0 0-.225-.465l-.005-.005a1 1 0 0 0-.078-.142q.076.037.147.084l.002.004a4.95 4.95 0 0 1 1.663 1.544q.012.04.028.079l.007.017-.035-.116q.026.038.056.077a.5.5 0 0 1 .102.173l.02.073a.7.7 0 0 1 .042.21A5 5 0 0 1 18.118 12c.205.736.239 1.51.097 2.262q-.064.128-.138.25l-.004.005a5 5 0 0 0 .01-2.32 4.9 4.9 0 0 1-1.096 1.844v.01l-.031.033a4.95 4.95 0 0 1-.553 2.099q-.068.043-.142.078.13-.226.23-.465c.223-.524.35-1.083.377-1.651l.031-.033q.001-.047-.001-.095v-.122a4.9 4.9 0 0 0-.357-1.783 5.1 5.1 0 0 1-.916 1.38v.011l-.006.006a5 5 0 0 1-.332 1.615l-.108.05c.2-.492.318-1.012.35-1.541-.32.32-.684.594-1.08.816m0 0a1 1 0 0 1-.142.079q-.323.497-.755.901l-.087.088h.127c.334-.314.622-.674.857-1.068m3.624.07v.008q-.309.496-.73.902-.42.436-.935.755-.035.073-.078.141A4.95 4.95 0 0 0 18 14.796l.006-.016q.076-.117.147-.233c.034-.058.04-.126.05-.194q.004-.045.012-.09a2 2 0 0 1-.142.254M14.45 9.55q.043.07.079.143.496.322.9.754l.089.088a1 1 0 0 1 0-.127 5 5 0 0 0-1.068-.858m1.734-1.959q.073.036.142.079A4.95 4.95 0 0 0 14.797 6l-.015-.005-.235-.147-.284-.064c.088.043.186.093.255.142l.013.004q.493.307.898.726.435.422.754.935m-7.268 4.52.008-.05-.008.047z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.834 13.202a2 2 0 0 1-.04.152.6.6 0 0 0 .04-.152m-.991-3.685a3 3 0 0 0-.455-.325l.067.05-.081-.029a1 1 0 0 0-.143-.044q.325.139.612.348m-1.523-.576a3 3 0 0 0-.212-.018q.394.015.781.082a5 5 0 0 0-.4-.184 5 5 0 0 0-.473-.167L12 8.659l-.018-.004a7 7 0 0 0-.472.166 2.3 2.3 0 0 0-.436.22l-.062.013-.08.045q.294-.114.61-.163a5 5 0 0 1 .373-.022l.109.02h.11q.093.001.186.007"
          />
          <path
            fill="currentColor"
            d="M9.451 5.848A4.95 4.95 0 0 0 5.85 9.45q.074-.123.156-.247l-.028.079a.6.6 0 0 0-.05.2c-.05.067-.097.164-.141.251l-.002.004q.009-.045.014-.092a.5.5 0 0 1 .041-.176 4.95 4.95 0 0 0 .009 5.076l-.022-.074a.7.7 0 0 1-.042-.209A5 5 0 0 1 5.882 12a5 5 0 0 1-.098-2.263q.067-.13.142-.255a5 5 0 0 0 0 2.36 4.9 4.9 0 0 1 1.112-1.884v-.01l.005-.006a4.95 4.95 0 0 1 .548-2.125q.038-.076.084-.147l.004-.003a4.95 4.95 0 0 1 1.524-1.663zm-1.86 1.969q.036-.075.079-.142a4.95 4.95 0 0 0-1.665 1.528q-.043.14-.079.279.309-.502.73-.91.422-.436.935-.755"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.789 16.667a5 5 0 0 0 .21-.083l.007.003.006.002a4.9 4.9 0 0 0 1.883.372h.03l.093-.088h.122l-.026.024h-.096l-.083.079h-.01a4.7 4.7 0 0 1-1.435.901 5 5 0 0 1-.456.162l-.034-.01-.043.012a5 5 0 0 1-.447-.164 4.7 4.7 0 0 1-1.43-.896h-.01l-.02-.02h.02l.005.005h.03c.575 0 1.145-.102 1.684-.299"
          />
          <path
            fill="currentColor"
            d="M12.125 16.545a4.9 4.9 0 0 0 1.77.328h.123l.088-.083c.432-.433.78-.943 1.024-1.504a5 5 0 0 1-1.626.333h-.005c-.409.38-.877.692-1.386.92l.002.002q.211-.091.413-.201a5 5 0 0 1-.403.205m-2.967-5.712-.004.006v.004zm1.457-2.445.009-.008h.004A4.8 4.8 0 0 1 12 7.508c.503.21.967.506 1.371.872h.006l.092.083h.015l.074.074c.277.283.52.598.72.94a5 5 0 0 0-1.068-.416l-.056-.012a5 5 0 0 0-.95-.441 4.8 4.8 0 0 1 1.138-.135h.127l-.093-.083h-.03A5 5 0 0 0 12 8.57a5 5 0 0 0-1.342-.181h-.03l-.097.073z"
          />
          <path
            fill="currentColor"
            d="M11.843 8.61 12 8.57l-.139.043zm-2.293.94a5 5 0 0 1 .848-1.082c-.54.03-1.07.15-1.572.353h-.005l-.108.049c-.55.24-1.051.578-1.479.999l-.084.088a1 1 0 0 1 0-.127 4.9 4.9 0 0 1 1.608-1.073c.25-.61.622-1.163 1.091-1.626a4.8 4.8 0 0 0-1.645.377q-.238.099-.462.223l-.004.007-.017.008a5 5 0 0 0-.213.457 4.8 4.8 0 0 0-.377 1.651l-.005.006q-.003.06 0 .122l-.024.025v.097c.007.612.128 1.216.357 1.783.228-.507.538-.974.916-1.381v-.01l.006-.006c.02-.553.132-1.1.332-1.615l.108-.05a4.9 4.9 0 0 0-.35 1.54 5 5 0 0 1 1.08-.815"
          />
          <path
            fill="currentColor"
            d="M9.55 9.55q.072-.03.144-.053l.004-.005q.504-.262 1.052-.405l.04-.026.084-.012a5 5 0 0 1 .97-.44 4.8 4.8 0 0 0-1.191-.146h-.122l-.084.108q-.432.404-.754.9-.074.036-.142.08m3.659-.491.118.079-.022-.007zM9.482 5.926q-.5.309-.91.73-.436.422-.755.935a4.95 4.95 0 0 1 2.125-.548l.006-.005h.005a4.94 4.94 0 0 1 1.856-1.12 5 5 0 0 0-2.327.008"
          />
          <path
            fill="currentColor"
            d="m12 5.97-.034-.01q-.233.069-.456.162a4.7 4.7 0 0 0-1.43.916h.025A4.9 4.9 0 0 1 12 7.415a4.9 4.9 0 0 1 1.895-.402h.02c-.418-.38-.9-.682-1.425-.891q-.24-.09-.49-.152m-3.62 7.533c.02.557.131 1.107.333 1.627a4.9 4.9 0 0 1-1.503-1.025l-.084-.088v-.122c0-.61.112-1.215.333-1.783.23.51.54.978.921 1.386z"
          />
          <path
            fill="currentColor"
            d="m7.043 14.057-.005-.005a1 1 0 0 1 0-.127v-.03A4.9 4.9 0 0 1 7.415 12a4.9 4.9 0 0 1-.401-1.889c-.376.41-.676.884-.887 1.399q-.092.24-.156.49l-.01.035q.07.231.161.454c.212.529.517 1.015.902 1.435a1 1 0 0 0 0 .128 4.94 4.94 0 0 1-1.106-1.86 5 5 0 0 0 .008 2.325l.001.004v-.024q.306.512.73.931c.279.29.593.543.934.755a4.95 4.95 0 0 1-.548-2.126m8.379-2.012-.006.013-.015.038.001.004a.4.4 0 0 0 .02-.055m-6.845-.09.016-.046.001.006-.01.026zm.293-3.242a5 5 0 0 1 1.626-.333h.005a5.1 5.1 0 0 1 1.386-.921 4.9 4.9 0 0 0-1.782-.333h-.123l-.088.083c-.432.433-.78.943-1.024 1.504m.793.837-.048.064a1 1 0 0 0-.11.06l-.006.014a1 1 0 0 1 .128-.07zm3.306-.519.022.015-.03-.016z"
          />
        </>
      ) : (
        <>
          <path
            fill="#14CADB"
            d="M15.62 10.5c.38.41.691.877.92 1.387.23-.567.351-1.171.358-1.783v-.122l.064.093v.03A4.9 4.9 0 0 1 16.585 12a4.9 4.9 0 0 1 .401 1.895v.019c.38-.418.682-.9.892-1.425q.09-.24.151-.49l.01-.034a5 5 0 0 0-.161-.455 4.7 4.7 0 0 0-.902-1.435v-.01l-.078-.083q.003-.048.001-.095l-.025-.027q.003.06 0 .122l-.084-.089a4.9 4.9 0 0 0-1.503-1.023c.201.52.314 1.069.332 1.626z"
          />
          <path
            fill="#14CADB"
            d="M16.987 9.958c.496.529.87 1.16 1.095 1.85a5 5 0 0 0-.009-2.326v-.004.024a4.7 4.7 0 0 0-.73-.93 5 5 0 0 0-.933-.752c.334.65.52 1.365.546 2.095l.03.032zm1.041 4.747.045-.165a.6.6 0 0 1-.045.165"
          />
          <path
            fill="#14CADB"
            d="M9.757 14.091a5 5 0 0 1-.388-.443l-.073-.137-.04-.057-.028-.08-.018-.05-.025-.06q.026.095.057.19.067.226.162.44.1.244.23.471a1 1 0 0 1-.142-.078 5 5 0 0 1-.424-1.13 5 5 0 0 1-.457-1 .4.4 0 0 1 .018-.065c.01-.03.02-.06.02-.092a7 7 0 0 0 .172.49c.027.07.074.15.117.223.05.085.096.162.103.212q.005.03.014.063.037.069.079.138a3.7 3.7 0 0 1-.202-1.112L8.934 12v-.108q0-.096.005-.193a3 3 0 0 0-.015.193 5 5 0 0 1 .081-.78q-.102.195-.184.398-.049.123-.098.254l-.067.174c.008.02.01.04-.006.062-.04.053-.04.102-.04.156q-.009-.024-.022-.048l-.01-.018a.2.2 0 0 0 .033.066 4.8 4.8 0 0 0-.138 1.185v.123l-.083-.093a5 5 0 0 1 .17-1.331.1.1 0 0 1 .001-.04l.006-.017c-.121-.443-.18-.9-.177-1.36l.083-.093v.127q0 .578.135 1.139a5 5 0 0 1 .473-1.006l.021-.034q.067-.105.14-.211l-.028.078c-.024.066-.049.13-.05.196.148-.35.354-.677.603-.947a.6.6 0 0 0 .092-.07l.05-.046-.044.041.025-.023.018-.018q.079-.075.16-.149c.2-.168.422-.31.657-.42a2 2 0 0 1-.162.033l-.032.022q-.22.07-.431.161a5 5 0 0 0-.475.228 4 4 0 0 0-.221.473q-.105.215-.181.44c-.047.068-.088.13-.13.196l-.032.05a5 5 0 0 1 .416-1.069q-.496.309-.906.726l-.106.06-.001.023-.084.088v.01A4.8 4.8 0 0 0 7.508 12a4.8 4.8 0 0 0 .872 1.371v.005l.084.093.107.083q.405.432.901.755.036.073.079.141a5 5 0 0 1-1.082-.846c.03.54.149 1.07.352 1.571v.005q.02.055.049.108c.24.55.578 1.052 1 1.48l.088.083H9.83a4.9 4.9 0 0 1-1.072-1.607 4.9 4.9 0 0 1-1.625-1.067 4.8 4.8 0 0 0 .375 1.62q.1.24.226.466l.007.014q.226.12.463.216c.516.22 1.066.348 1.626.377l.03.03h.122l.063.059h.02l-.083-.079h.122a4.9 4.9 0 0 0 1.783-.338 5.1 5.1 0 0 1-1.38-.916h-.01l-.007-.006a5 5 0 0 1-1.615-.332 1 1 0 0 1-.049-.108c.491.2 1.011.318 1.54.35a5 5 0 0 1-.815-1.08 1 1 0 0 1-.059-.161q.06.053.123.098.027.056.058.11l.04.012q.31.506.734.921l.074.108h.01l.087.083h.01c.405.367.868.661 1.372.872.503-.21.967-.505 1.371-.872h.005l.093-.083.123-.005a4.9 4.9 0 0 0 1.582-.353h.005l.107-.049a4.9 4.9 0 0 0 1.504-1.023l.059-.089a1 1 0 0 1 0 .128v.024a4.9 4.9 0 0 1-1.607 1.073 4.9 4.9 0 0 1-1.066 1.625 4.8 4.8 0 0 0 2.085-.601q.074-.035.142-.079-.035.075-.078.142l-.005.003a4.95 4.95 0 0 1-1.543 1.662l-.28.079c.34-.203.653-.449.931-.73q.433-.42.75-.933c-.65.334-1.365.52-2.094.546l-.032.03h-.01c-.53.496-1.16.87-1.85 1.095a5 5 0 0 0 2.326-.008l-.02.011.02-.011.279-.079-.25.157-.284.064A4.9 4.9 0 0 1 12 18.117a4.9 4.9 0 0 1-2.263.098q-.125-.064-.242-.135l-.013-.007a5 5 0 0 0 2.318.01 4.9 4.9 0 0 1-1.847-1.097h-.005l-.032-.03a4.95 4.95 0 0 1-2.092-.537c.21.337.461.648.747.924.268.278.57.521.896.726l.015.004q.123.08.255.142l-.284-.064-.235-.147L9.203 18a4.95 4.95 0 0 1-1.528-1.67q.054.033.11.062l-.001-.003a1 1 0 0 1-.114-.065l-.003-.004a4.95 4.95 0 0 1-1.662-1.543l-.028-.079-.006-.015.034.113q-.026-.038-.056-.077a.6.6 0 0 1-.097-.158 4.95 4.95 0 0 0 3.6 3.59 4.96 4.96 0 0 0 5.095 0 4.96 4.96 0 0 0 3.606-3.604 4.95 4.95 0 0 0 0-5.094 4.95 4.95 0 0 0-3.605-3.605 4.95 4.95 0 0 0-5.093 0l.282-.064A4.9 4.9 0 0 1 12 5.882a5 5 0 0 1 1.342-.186q.464 0 .92.088.13.066.256.142a5 5 0 0 0-2.361 0c.704.219 1.35.592 1.89 1.092h-.117l.02.02h.102a4.94 4.94 0 0 1 2.13.553q.045.072.079.147a4.8 4.8 0 0 0-2.116-.612h-.127l-.026-.024h-.097a4.9 4.9 0 0 0-1.782.357c.507.228.973.537 1.38.916h.01l.007.005a5 5 0 0 1 1.615.333q.027.052.049.108a4.9 4.9 0 0 0-1.54-.35c.32.32.594.684.815 1.08q.035.078.059.16a1 1 0 0 0-.123-.097 1 1 0 0 0-.059-.11l-.015-.005q.041.065.074.135a4 4 0 0 0-.49-.23q-.163-.08-.333-.144.17.14.327.29l.012.01q.222.196.421.416l-.098-.11a5 5 0 0 1 .518.649l.029.081.02.054-.03-.093-.003-.012a4 4 0 0 0-.162-.44 4 4 0 0 0-.23-.471q.073.034.142.078a5 5 0 0 1 .424 1.131q.285.474.457 1l-.018.064c-.01.03-.02.06-.02.093a7 7 0 0 0-.172-.49 2 2 0 0 0-.118-.224.8.8 0 0 1-.103-.212l-.012-.06-.056-.098q.132.354.176.733.017.31-.002.62.008-.08.012-.162a6 6 0 0 1-.082.781 5 5 0 0 0 .185-.399q.049-.12.096-.25l.075-.194a.1.1 0 0 1 0-.045l.016-.049a.3.3 0 0 0 .023-.108 4.8 4.8 0 0 0 .147-1.19v-.123l.084.098a5 5 0 0 1-.187 1.389c.12.442.18.9.177 1.359l-.083.093v-.127c0-.383-.045-.766-.136-1.138a5 5 0 0 1-.453.97l-.019.036-.037.058-.116.174-.008.027q-.228.324-.503.61l-.011.012a2 2 0 0 1-.152.152c-.515.481-1.762.768-2.047.82l-.027-.005h-.109a5 5 0 0 1-.42-.028q.2.036.403.046a6 6 0 0 1-.781-.082 5 5 0 0 0 .504.226c.109.043.221.087.333.143L12 15.35q.245-.075.49-.172.206-.077.393-.193a6 6 0 0 1-.775.08 3.2 3.2 0 0 0 1.038-.23h.03a3 3 0 0 0 .279-.078q.225-.066.44-.162a4 4 0 0 0 .47-.23 1 1 0 0 1-.078.142 5 5 0 0 1-1.077.412l-.05.01q-.474.286-1.003.46l-.018-.005-.14.044a5 5 0 0 1-1.346.181h-.03l-.092-.083h.127c.37 0 .74-.042 1.1-.126a5 5 0 0 1-.968-.462l.257.035-.003-.002-.254-.052a5 5 0 0 1-1.078-.412 1 1 0 0 1-.078-.142 4.6 4.6 0 0 0 .911.392q.04.012.08.028.058.024.115.04a3 3 0 0 1-.719-.441l-.132-.121a.6.6 0 0 0-.116-.154zM12 15.428a5 5 0 0 0 1.342.181h.03l.093-.083h-.123a4.8 4.8 0 0 1-1.185-.137zm2.449-.98a1 1 0 0 1-.162.06q.05-.055.093-.115l-.014.007a4 4 0 0 0 .23-.49q.095-.216.162-.441c.058-.098.107-.176.161-.226q-.135.526-.377 1.011a4.8 4.8 0 0 0 .886-.702l.107-.06.001-.023.084-.092v-.006A4.8 4.8 0 0 0 16.49 12a4.8 4.8 0 0 0-.871-1.372v-.005l-.084-.093a4.9 4.9 0 0 0-.357-1.704V8.82a1 1 0 0 0-.05-.108 4.9 4.9 0 0 0-1.023-1.48l-.088-.083h.152c.46.46.825 1.006 1.072 1.607.61.25 1.163.622 1.626 1.092a4.8 4.8 0 0 0-.377-1.646 5 5 0 0 0-.225-.465l-.005-.005a1 1 0 0 0-.078-.142q.076.037.147.084l.002.004a4.95 4.95 0 0 1 1.663 1.544q.012.04.028.079l.007.017-.035-.116q.026.038.056.077a.5.5 0 0 1 .102.173l.02.073a.7.7 0 0 1 .042.21A5 5 0 0 1 18.118 12c.205.736.239 1.51.097 2.262q-.064.128-.138.25l-.004.005a5 5 0 0 0 .01-2.32 4.9 4.9 0 0 1-1.096 1.844v.01l-.031.033a4.95 4.95 0 0 1-.553 2.099q-.068.043-.142.078.13-.226.23-.465c.223-.524.35-1.083.377-1.651l.031-.033q.001-.047-.001-.095v-.122a4.9 4.9 0 0 0-.357-1.783 5.1 5.1 0 0 1-.916 1.38v.011l-.006.006a5 5 0 0 1-.332 1.615l-.108.05c.2-.492.318-1.012.35-1.541-.32.32-.684.594-1.08.816m0 0a1 1 0 0 1-.142.079q-.323.497-.755.901l-.087.088h.127c.334-.314.622-.674.857-1.068m3.624.07v.008q-.309.496-.73.902-.42.436-.935.755-.035.073-.078.141A4.95 4.95 0 0 0 18 14.796l.006-.016q.076-.117.147-.233c.034-.058.04-.126.05-.194q.004-.045.012-.09a2 2 0 0 1-.142.254M14.45 9.55q.043.07.079.143.496.322.9.754l.089.088a1 1 0 0 1 0-.127 5 5 0 0 0-1.068-.858m1.734-1.959q.073.036.142.079A4.95 4.95 0 0 0 14.797 6l-.015-.005-.235-.147-.284-.064c.088.043.186.093.255.142l.013.004q.493.307.898.726.435.422.754.935m-7.268 4.52.008-.05-.008.047z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#14CADB"
            d="M14.834 13.202a2 2 0 0 1-.04.152.6.6 0 0 0 .04-.152m-.991-3.685a3 3 0 0 0-.455-.325l.067.05-.081-.029a1 1 0 0 0-.143-.044q.325.139.612.348m-1.523-.576a3 3 0 0 0-.212-.018q.394.015.781.082a5 5 0 0 0-.4-.184 5 5 0 0 0-.473-.167L12 8.659l-.018-.004a7 7 0 0 0-.472.166 2.3 2.3 0 0 0-.436.22l-.062.013-.08.045q.294-.114.61-.163a5 5 0 0 1 .373-.022l.109.02h.11q.093.001.186.007"
          />
          <path
            fill="#14CADB"
            d="M9.451 5.848A4.95 4.95 0 0 0 5.85 9.45q.074-.123.156-.247l-.028.079a.6.6 0 0 0-.05.2c-.05.067-.097.164-.141.251l-.002.004q.009-.045.014-.092a.5.5 0 0 1 .041-.176 4.95 4.95 0 0 0 .009 5.076l-.022-.074a.7.7 0 0 1-.042-.209A5 5 0 0 1 5.882 12a5 5 0 0 1-.098-2.263q.067-.13.142-.255a5 5 0 0 0 0 2.36 4.9 4.9 0 0 1 1.112-1.884v-.01l.005-.006a4.95 4.95 0 0 1 .548-2.125q.038-.076.084-.147l.004-.003a4.95 4.95 0 0 1 1.524-1.663zm-1.86 1.969q.036-.075.079-.142a4.95 4.95 0 0 0-1.665 1.528q-.043.14-.079.279.309-.502.73-.91.422-.436.935-.755"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#14CADB"
            d="M11.789 16.667a5 5 0 0 0 .21-.083l.007.003.006.002a4.9 4.9 0 0 0 1.883.372h.03l.093-.088h.122l-.026.024h-.096l-.083.079h-.01a4.7 4.7 0 0 1-1.435.901 5 5 0 0 1-.456.162l-.034-.01-.043.012a5 5 0 0 1-.447-.164 4.7 4.7 0 0 1-1.43-.896h-.01l-.02-.02h.02l.005.005h.03c.575 0 1.145-.102 1.684-.299"
          />
          <path
            fill="#14CADB"
            d="M12.125 16.545a4.9 4.9 0 0 0 1.77.328h.123l.088-.083c.432-.433.78-.943 1.024-1.504a5 5 0 0 1-1.626.333h-.005c-.409.38-.877.692-1.386.92l.002.002q.211-.091.413-.201a5 5 0 0 1-.403.205m-2.967-5.712-.004.006v.004zm1.457-2.445.009-.008h.004A4.8 4.8 0 0 1 12 7.508c.503.21.967.506 1.371.872h.006l.092.083h.015l.074.074c.277.283.52.598.72.94a5 5 0 0 0-1.068-.416l-.056-.012a5 5 0 0 0-.95-.441 4.8 4.8 0 0 1 1.138-.135h.127l-.093-.083h-.03A5 5 0 0 0 12 8.57a5 5 0 0 0-1.342-.181h-.03l-.097.073z"
          />
          <path
            fill="#14CADB"
            d="M11.843 8.61 12 8.57l-.139.043zm-2.293.94a5 5 0 0 1 .848-1.082c-.54.03-1.07.15-1.572.353h-.005l-.108.049c-.55.24-1.051.578-1.479.999l-.084.088a1 1 0 0 1 0-.127 4.9 4.9 0 0 1 1.608-1.073c.25-.61.622-1.163 1.091-1.626a4.8 4.8 0 0 0-1.645.377q-.238.099-.462.223l-.004.007-.017.008a5 5 0 0 0-.213.457 4.8 4.8 0 0 0-.377 1.651l-.005.006q-.003.06 0 .122l-.024.025v.097c.007.612.128 1.216.357 1.783.228-.507.538-.974.916-1.381v-.01l.006-.006c.02-.553.132-1.1.332-1.615l.108-.05a4.9 4.9 0 0 0-.35 1.54 5 5 0 0 1 1.08-.815"
          />
          <path
            fill="#14CADB"
            d="M9.55 9.55q.072-.03.144-.053l.004-.005q.504-.262 1.052-.405l.04-.026.084-.012a5 5 0 0 1 .97-.44 4.8 4.8 0 0 0-1.191-.146h-.122l-.084.108q-.432.404-.754.9-.074.036-.142.08m3.659-.491.118.079-.022-.007zM9.482 5.926q-.5.309-.91.73-.436.422-.755.935a4.95 4.95 0 0 1 2.125-.548l.006-.005h.005a4.94 4.94 0 0 1 1.856-1.12 5 5 0 0 0-2.327.008"
          />
          <path
            fill="#14CADB"
            d="m12 5.97-.034-.01q-.233.069-.456.162a4.7 4.7 0 0 0-1.43.916h.025A4.9 4.9 0 0 1 12 7.415a4.9 4.9 0 0 1 1.895-.402h.02c-.418-.38-.9-.682-1.425-.891q-.24-.09-.49-.152m-3.62 7.533c.02.557.131 1.107.333 1.627a4.9 4.9 0 0 1-1.503-1.025l-.084-.088v-.122c0-.61.112-1.215.333-1.783.23.51.54.978.921 1.386z"
          />
          <path
            fill="#14CADB"
            d="m7.043 14.057-.005-.005a1 1 0 0 1 0-.127v-.03A4.9 4.9 0 0 1 7.415 12a4.9 4.9 0 0 1-.401-1.889c-.376.41-.676.884-.887 1.399q-.092.24-.156.49l-.01.035q.07.231.161.454c.212.529.517 1.015.902 1.435a1 1 0 0 0 0 .128 4.94 4.94 0 0 1-1.106-1.86 5 5 0 0 0 .008 2.325l.001.004v-.024q.306.512.73.931c.279.29.593.543.934.755a4.95 4.95 0 0 1-.548-2.126m8.379-2.012-.006.013-.015.038.001.004a.4.4 0 0 0 .02-.055m-6.845-.09.016-.046.001.006-.01.026zm.293-3.242a5 5 0 0 1 1.626-.333h.005a5.1 5.1 0 0 1 1.386-.921 4.9 4.9 0 0 0-1.782-.333h-.123l-.088.083c-.432.433-.78.943-1.024 1.504m.793.837-.048.064a1 1 0 0 0-.11.06l-.006.014a1 1 0 0 1 .128-.07zm3.306-.519.022.015-.03-.016z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenOBSR.displayName = 'OBSR'

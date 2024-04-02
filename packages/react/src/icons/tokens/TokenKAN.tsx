import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenKAN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.906 15.397-.147.283a7.72 7.72 0 0 1-3.527 3.318c-1.097.51-2.3.754-3.509.711a7.65 7.65 0 0 1-4.444-1.607 7.7 7.7 0 0 1-2.293-2.889 2.4 2.4 0 0 1-.198-.75 1.6 1.6 0 0 1 .05-.634c.087-.291.264-.514.519-.675.218-.139.453-.225.716-.215.255.01.477.107.677.257.225.169.39.387.536.624q.463.76 1.047 1.43a7.3 7.3 0 0 0 1.61 1.393c.455.284.944.51 1.456.669a7 7 0 0 0 2.342.297 7.5 7.5 0 0 0 1.496-.225 9 9 0 0 0 1.227-.396 8 8 0 0 0 1.379-.7c.388-.25.75-.53 1.047-.887zm-13.81-6.8q.088-.17.178-.336a7.7 7.7 0 0 1 1.67-2.07A7.64 7.64 0 0 1 10.8 4.38a8 8 0 0 1 1.582-.087 7.6 7.6 0 0 1 3.02.777 7.74 7.74 0 0 1 3.41 3.304c.149.28.286.565.354.88.058.269.08.539.022.81a1.17 1.17 0 0 1-.523.765 1.3 1.3 0 0 1-.578.223 1.1 1.1 0 0 1-.709-.164 1.94 1.94 0 0 1-.64-.672 10.2 10.2 0 0 0-1.311-1.731 6.9 6.9 0 0 0-1.83-1.392 6.2 6.2 0 0 0-1.58-.56 7.2 7.2 0 0 0-1.774-.144 7 7 0 0 0-1.226.165 9 9 0 0 0-1.633.517 7.3 7.3 0 0 0-1.697.97q-.31.242-.567.54l-.017.02z"
          />
          <path
            fill="currentColor"
            d="M12.001 8.447a3.55 3.55 0 0 1 3.546 3.523c.015 1.984-1.589 3.62-3.544 3.622-1.957 0-3.536-1.628-3.55-3.57-.013-1.956 1.575-3.58 3.548-3.575m1.707 3.554.018-.023q.292-.309.343-.73a1.22 1.22 0 0 0-.176-.808c-.198-.318-.633-.511-1-.586-.032-.006-.037-.02-.036-.048.002-.08-.001-.25 0-.33 0-.036-.013-.05-.05-.05-.218.002-.547.006-.764.005-.035 0-.044.014-.043.045.002.072-.002.26 0 .333.001.036-.012.051-.05.05l-.76-.002c-.035 0-.047-.015-.047-.048v-.333c0-.032-.01-.048-.048-.048-.217.002-.546.002-.763 0-.036 0-.048.014-.048.048.002.069-.001.255.002.323.002.044-.014.059-.058.058-.132-.002-.19 0-.322 0-.027 0-.049-.003-.048.038.001.217.002.546 0 .763-.001.047.016.059.06.058.13-.003.184.003.313 0 .042 0 .055.014.055.056-.001.912-.002 1.543 0 2.455 0 .048-.016.06-.06.059-.133-.003-.19-.001-.323-.002-.027 0-.046.002-.046.038l-.002.78c0 .026.008.042.039.04h.345q.052.002.048.056c-.002.069.003.255 0 .324-.001.04.012.05.054.05q.375-.003.75 0c.039 0 .052-.014.052-.05-.001-.072.002-.258 0-.33-.001-.032.008-.05.04-.05h.65l.11.002c.042 0 .06.014.058.06-.004.071 0 .257-.001.328 0 .029.01.04.04.04q.387-.003.774 0c.03 0 .044-.01.043-.042 0-.081.003-.252 0-.333-.001-.035.01-.047.043-.055.081-.022.311-.043.39-.073A1.266 1.266 0 0 0 13.707 12M4.7 11.472c-.005-.113-.014-.225-.014-.338q.002-.554.195-1.076A3 3 0 0 1 5.67 8.9a6.8 6.8 0 0 1 1.578-1.102 7.7 7.7 0 0 1 1.61-.594 9.4 9.4 0 0 1 2.856-.252c.107.006.213.02.319.03q.008 0 .023.006a9.2 9.2 0 0 0-4.19 1.388 10.3 10.3 0 0 0-3.165 3.097m7.25 5.548a9.34 9.34 0 0 0 4.187-1.398 10.15 10.15 0 0 0 3.157-3.107c.007.078.017.151.018.225a3.02 3.02 0 0 1-.55 1.87 3.6 3.6 0 0 1-.57.615c-.53.469-1.13.853-1.779 1.136a8.2 8.2 0 0 1-1.957.577 9.6 9.6 0 0 1-1.982.12c-.175-.007-.35-.025-.524-.038"
          />
          <path
            fill="currentColor"
            d="M11.207 11.571c-.063 0-.064 0-.064-.064v-.735c0-.04.007-.06.054-.06.536.001 1.099-.002 1.635.002.27.002.428.085.454.326.033.305-.14.49-.397.526q-.064.007-.129.005zm.832.86h.794c.218.004.383.073.453.279.102.299-.187.578-.472.578H11.21c-.066 0-.066 0-.066-.065l-.003-.756c0-.04.022-.039.05-.039z"
          />
        </>
      ) : (
        <>
          <path
            fill="#4A5EE0"
            d="M18.905 15.397q-.073.144-.147.283a7.72 7.72 0 0 1-3.526 3.318 7.7 7.7 0 0 1-3.51.711 7.65 7.65 0 0 1-4.444-1.607 7.7 7.7 0 0 1-2.292-2.889 2.4 2.4 0 0 1-.198-.75 1.6 1.6 0 0 1 .05-.634c.086-.291.263-.514.518-.675a1.23 1.23 0 0 1 .717-.215c.255.01.476.107.677.257.225.169.39.387.536.624a10.4 10.4 0 0 0 1.046 1.43 7.3 7.3 0 0 0 1.611 1.393c.454.284.944.51 1.455.669q.534.165 1.087.238.626.086 1.255.058a7.5 7.5 0 0 0 1.496-.224 9 9 0 0 0 1.228-.396q.722-.284 1.378-.7c.388-.25.75-.53 1.048-.887zm-13.81-6.8q.089-.17.179-.336a7.7 7.7 0 0 1 1.67-2.07A7.64 7.64 0 0 1 10.8 4.38a8 8 0 0 1 1.583-.087 7.6 7.6 0 0 1 3.02.777 7.74 7.74 0 0 1 3.41 3.304c.148.28.286.565.354.88.057.269.079.539.022.81a1.17 1.17 0 0 1-.523.765 1.3 1.3 0 0 1-.579.223 1.1 1.1 0 0 1-.708-.164 1.94 1.94 0 0 1-.64-.672 10.2 10.2 0 0 0-1.312-1.731 6.9 6.9 0 0 0-1.829-1.392 6.2 6.2 0 0 0-1.581-.56 7.2 7.2 0 0 0-1.774-.144 7 7 0 0 0-1.225.165 9 9 0 0 0-1.634.517 7.3 7.3 0 0 0-1.696.97q-.311.242-.567.54l-.018.02z"
          />
          <path
            fill="#4A5EE0"
            d="M12 8.447a3.55 3.55 0 0 1 3.547 3.523c.015 1.984-1.59 3.62-3.544 3.622-1.958 0-3.537-1.628-3.55-3.57-.013-1.956 1.575-3.58 3.548-3.575m1.708 3.554.017-.023q.293-.309.344-.73a1.23 1.23 0 0 0-.176-.808c-.198-.318-.634-.511-1.001-.586-.032-.006-.036-.02-.035-.048.002-.08-.002-.25 0-.33 0-.036-.014-.05-.051-.05-.217.002-.547.006-.763.005-.036 0-.044.014-.043.045.001.072-.003.26 0 .333 0 .036-.012.051-.05.05l-.76-.002c-.036 0-.048-.015-.048-.048.002-.072 0-.261 0-.333 0-.032-.01-.048-.047-.048-.217.002-.547.002-.764 0-.036 0-.048.014-.047.048.001.069-.002.255.001.323.002.044-.013.059-.057.058-.133-.002-.19 0-.322 0-.027 0-.05-.003-.049.038.002.217.002.546 0 .763 0 .047.017.059.061.058.13-.003.184.003.313 0 .042 0 .054.014.054.056v2.455c0 .048-.016.06-.06.059-.133-.003-.19-.001-.322-.002-.027 0-.046.002-.046.038l-.003.78c0 .026.009.042.04.04h.345q.05.002.048.056c-.003.069.002.255 0 .324-.002.04.012.05.054.05q.375-.003.75 0c.039 0 .052-.014.051-.05 0-.072.002-.258 0-.33 0-.032.009-.05.041-.05h.65l.11.002c.041 0 .06.014.058.06-.004.071 0 .257-.001.328 0 .029.01.04.04.04q.386-.003.773 0c.03 0 .044-.01.044-.042-.001-.081.002-.252 0-.333-.002-.035.01-.047.042-.055.082-.022.312-.043.39-.073A1.266 1.266 0 0 0 13.708 12"
          />
          <path
            fill="#ED9D72"
            d="M4.7 11.472c-.005-.113-.015-.225-.014-.338q0-.554.195-1.076A3 3 0 0 1 5.67 8.9a6.8 6.8 0 0 1 1.578-1.102 7.7 7.7 0 0 1 1.61-.594 9.4 9.4 0 0 1 2.856-.252c.106.006.212.02.319.03q.007 0 .022.006a9.2 9.2 0 0 0-4.19 1.388A10.3 10.3 0 0 0 4.7 11.472m7.249 5.548a9.34 9.34 0 0 0 4.188-1.398 10.15 10.15 0 0 0 3.157-3.107c.006.078.016.151.018.225a3.02 3.02 0 0 1-.55 1.87 3.6 3.6 0 0 1-.571.615c-.53.469-1.13.853-1.778 1.136a8.2 8.2 0 0 1-1.957.577 9.6 9.6 0 0 1-1.983.12c-.175-.007-.35-.025-.524-.038"
          />
          <path
            fill="#4A5EE0"
            d="M11.207 11.571c-.064 0-.065 0-.065-.064v-.735c0-.04.007-.06.055-.06.536.001 1.098-.002 1.634.002.271.002.429.085.454.326.033.305-.14.49-.397.526q-.063.007-.128.005zm.832.86h.794c.218.004.382.073.452.279.102.299-.187.578-.471.578h-1.606c-.066 0-.066 0-.066-.065l-.002-.756c0-.04.021-.039.049-.039z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenKAN.displayName = 'KAN'

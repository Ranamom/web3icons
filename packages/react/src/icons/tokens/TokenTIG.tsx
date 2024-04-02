import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTIG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.55 11.113h-.009v-.009c1.14-1.997 2.272-3.998 3.42-5.991a.5.5 0 0 0 .043-.103l-.223-.017.913-.707-.086 1.135-.192-.175a112 112 0 0 1-3.866 5.871zm2.756-5.237c-.159.205-.347.244-.583.145a6 6 0 0 0-3.806-.312 7.7 7.7 0 0 0-1.329.458q-.256.115-.565.18c-.077.017-.167.043-.245.047.648 1.265 1.329 2.524 1.93 3.815-.76-1.363-1.544-2.71-2.32-4.06-.012-.016.013-.025.026-.016a.65.65 0 0 0 .36.064q.215-.019.416-.077.364-.098.638-.223a7.7 7.7 0 0 1 2.075-.626q.777-.102 1.311-.064c.724.056 1.449.33 2.092.669"
          />
          <path
            fill="currentColor"
            d="M17.67 11.13c.004.428.043.848.077 1.277.017.193.099.587.253.703a23.4 23.4 0 0 1-4.376-.514c1.342 0 2.692.257 4.033.265.021 0 .039-.021.03-.043a1.8 1.8 0 0 1-.129-.557c-.042-.368 0-.75-.055-1.118a5.9 5.9 0 0 0-1.646-3.412c-.116-.115-.257-.287-.278-.433-.01-.085-.043-.15-.06-.235-.005-.026-.022.253-.03.283-.06.171-.108.304-.223.471a4.6 4.6 0 0 0-.588 1.059q-.14.358-.26.728c-.31.917-1.047 1.672-1.244 2.627a5.3 5.3 0 0 0 .009 2.889 3.97 3.97 0 0 0 1.508 2.147c.129.094.27.193.42.287.047.03.095.077.133.142.124.184-.274.158-.351.154a4.6 4.6 0 0 1-1.17-.214 3.5 3.5 0 0 1-.45-.159c.513.38 1.102.647 1.727.78-.943.471-1.941.536-2.987.591a4 4 0 0 1-.793-.03c-.24-.034-.437-.21-.382-.462q.058-.258.043-.54a2.85 2.85 0 0 0-.535-1.359c-.155-.236-.343-.381-.63-.351a1.97 1.97 0 0 0-.965.467c-.441.343-.887.686-1.384.951-.257.137-.557.219-.844.292a1.1 1.1 0 0 1-.377.017C6 17.81 5.987 17.584 6 17.477c.043-.428.176-.904.386-1.286l.565-1.05c.377-.694 1.106-1.602 1.852-1.877.085-.03.128.065.133.129.025.3-.3.651-.515.814-.368.283-.664.583-.707 1.059a1.3 1.3 0 0 1-.278.638c-.18.257-.348.532-.515.797.365-.385.699-.827 1.037-1.242.36-.446.622-.913 1.098-1.265.184-.128.39-.214.591-.321.171-.086.583-.386.291-.6a1.2 1.2 0 0 0-.63-.214c-.308-.03-.54-.09-.72-.352a1.7 1.7 0 0 1-.287-.891c0-.172.03-.343.099-.498a.89.89 0 0 1 1.131-.484c.283.095.463.356.772.403l.214.043q.065.02.06.086c-.026.317.24.428.3.724.017.111-.064.219-.124.309-.103.162.09.17.12.282.056.24-.082.592-.124.832.17-.214.235-.553.33-.797.137-.369.308-.673.548-.973.266-.322.634-.562.887-.892.39-.523.815-1.011 1.136-1.577.236-.428.437-.84.591-1.247.099-.248.283-.45.416-.686a4 4 0 0 0 .244-.527c.047-.12.185-.33.343-.223q1.48 1.027 2.053 2.679c.201.587.326 1.204.369 1.86z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TIG__a)"
            d="M11.55 11.113h-.009v-.009c1.14-1.997 2.272-3.998 3.42-5.991a.5.5 0 0 0 .043-.103l-.223-.017.913-.707-.086 1.135-.192-.175a112 112 0 0 1-3.866 5.871zm2.756-5.237c-.159.205-.347.244-.583.145a6 6 0 0 0-3.806-.312 7.7 7.7 0 0 0-1.329.458q-.256.115-.565.18c-.077.017-.167.043-.245.047.648 1.265 1.329 2.524 1.93 3.815-.76-1.363-1.544-2.71-2.32-4.06-.012-.016.013-.025.026-.016a.65.65 0 0 0 .36.064q.215-.019.416-.077.364-.098.638-.223a7.7 7.7 0 0 1 2.075-.626q.777-.102 1.311-.064c.724.056 1.449.33 2.092.669"
          />
          <path
            fill="url(#TIG__b)"
            d="M17.67 11.13c.004.428.043.848.077 1.277.017.193.099.587.253.703a23.4 23.4 0 0 1-4.376-.514c1.342 0 2.692.257 4.033.265.021 0 .039-.021.03-.043a1.8 1.8 0 0 1-.129-.557c-.042-.368 0-.75-.055-1.118a5.9 5.9 0 0 0-1.646-3.412c-.116-.115-.257-.287-.278-.433-.01-.085-.043-.15-.06-.235-.005-.026-.022.253-.03.283-.06.171-.108.304-.223.471a4.6 4.6 0 0 0-.588 1.059q-.14.358-.26.728c-.31.917-1.047 1.672-1.244 2.627a5.3 5.3 0 0 0 .009 2.889 3.97 3.97 0 0 0 1.508 2.147c.129.094.27.193.42.287.047.03.095.077.133.142.124.184-.274.158-.351.154a4.6 4.6 0 0 1-1.17-.214 3.5 3.5 0 0 1-.45-.159c.513.38 1.102.647 1.727.78-.943.471-1.941.536-2.987.591a4 4 0 0 1-.793-.03c-.24-.034-.437-.21-.382-.462q.058-.258.043-.54a2.85 2.85 0 0 0-.535-1.359c-.155-.236-.343-.381-.63-.351a1.97 1.97 0 0 0-.965.467c-.441.343-.887.686-1.384.951-.257.137-.557.219-.844.292a1.1 1.1 0 0 1-.377.017C6 17.81 5.987 17.584 6 17.477c.043-.428.176-.904.386-1.286l.565-1.05c.377-.694 1.106-1.602 1.852-1.877.085-.03.128.065.133.129.025.3-.3.651-.515.814-.368.283-.664.583-.707 1.059a1.3 1.3 0 0 1-.278.638c-.18.257-.348.532-.515.797.365-.385.699-.827 1.037-1.242.36-.446.622-.913 1.098-1.265.184-.128.39-.214.591-.321.171-.086.583-.386.291-.6a1.2 1.2 0 0 0-.63-.214c-.308-.03-.54-.09-.72-.352a1.7 1.7 0 0 1-.287-.891c0-.172.03-.343.099-.498a.89.89 0 0 1 1.131-.484c.283.095.463.356.772.403l.214.043q.065.02.06.086c-.026.317.24.428.3.724.017.111-.064.219-.124.309-.103.162.09.17.12.282.056.24-.082.592-.124.832.17-.214.235-.553.33-.797.137-.369.308-.673.548-.973.266-.322.634-.562.887-.892.39-.523.815-1.011 1.136-1.577.236-.428.437-.84.591-1.247.099-.248.283-.45.416-.686a4 4 0 0 0 .244-.527c.047-.12.185-.33.343-.223q1.48 1.027 2.053 2.679c.201.587.326 1.204.369 1.86z"
          />
          <defs>
            <linearGradient
              id="TIG__a"
              x1="15.428"
              x2="8.79"
              y1="8.209"
              y2="17.39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0149DC" />
              <stop offset="1" stopColor="#920BBD" />
            </linearGradient>
            <linearGradient
              id="TIG__b"
              x1="15.428"
              x2="8.79"
              y1="8.209"
              y2="17.39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0149DC" />
              <stop offset="1" stopColor="#920BBD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenTIG.displayName = 'TIG'

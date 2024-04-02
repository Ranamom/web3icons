import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.713 9.356c-1.329-1.997.446-3.926 1.5-4.642C6.746 5.284 6.549 7.81 6.883 9c-.669-.141-.836-1.487-.836-2.143-1.465 2.713-.055 4.466.836 5.002a3.47 3.47 0 0 1-2.169-1.787c0 2.43 2.225 3.63 3.335 3.93-.802 0-1.779-.24-2.169-.36.403 1.714 3.172 2.742 4.5 3.038-.227-.124-.793-.771-1.157-1.217.377.39 1.114.836 1.491 1.037-.12 0-.244.142-.398.326-.27.317-.635.745-1.269.745-.801 0-1.556-.595-1.834-.89.334 1.246.668 1.782 1.5 1.962.669.141 1.389-.536 1.671-.892-.402 1.14-1.5 1.188-2.001 1.072.107.176.531.536 1.329.536.8 0 1.337-1.192 1.5-1.788a2.63 2.63 0 0 1-1.166 2.143h1.003c1.328-.287 1.221-1.787.998-2.498.669.998.386 1.843.167 2.143 1.2-.575.943-1.672.669-2.143.266.141.441.771.497 1.071.266-.857 0-1.431-.167-1.607.536-.146 1.444-1.011 1.834-1.431a4.5 4.5 0 0 1-1.333 1.431c3.069 0 4.389-2.027 4.667-3.038-1.2.428-1.945.42-2.168.36a4.35 4.35 0 0 0 3.501-3.93 2.64 2.64 0 0 1-2.168 1.787c2.271-1.573 1.397-3.986.668-5.002.133 1.427-.501 2.143-.831 2.323.531-3.287-2.001-4.346-3.334-4.466 2.931 2.143 2.22 4.106 1.5 4.822 1.067 3-.557 4.106-1.5 4.286 1.328-.858 1.328-1.903 1.165-2.323-.133 1.144-1.165 1.431-1.667 1.431.536-1.286-.334-2.678-.831-3.214.128-.146.497-.06.664 0 0-.146-.441-.18-.664-.18.325-.104.674-.104.998 0a1.93 1.93 0 0 0-1.5-.356c.532-.146.887-.06.999 0a1.44 1.44 0 0 0-.999-.36c-.531 0-1.221.476-1.5.716l-.167-.18c.056.12.099.428-.167.716-.266.287-.334.83-.334 1.07 0-.286.334-.355.501-.355l-.167.176c.934-.429 1.277.42 1.333.896 0 .857-.557 1.187-.831 1.247-1.068-.142-1.668-1.132-1.835-1.607-.214 1.17.364 1.86.857 2.168-1.928-1.071-1.611-3.291-1.191-4.311m2.001.896c0-.12.133-.395.665-.536v.176z"
          />
          <path
            fill="currentColor"
            d="m14.267 13.766-.051.056c.33.18 1.23.535 2.164.535a3.43 3.43 0 0 0 2.002-.711c-1.2.428-1.946.415-2.17.355a4.29 4.29 0 0 0 3.04-2.297l.415-1.221.034-.232c-1.217 2.636-3.385 3.168-4.645 3.078-.257.214-.536.36-.789.437"
          />
          <path
            fill="currentColor"
            d="M15.142 13.252c1.74 0 3.44-.79 4.448-2.44q.1-.363.124-.74a2.64 2.64 0 0 1-2.168 1.787c2.057-1.423 1.53-3.54.874-4.676.244 1.539-.064 3.707-2.529 4.414a2.45 2.45 0 0 1-.75 1.655m-6.655-1.453C5.91 11.096 5.64 8.713 5.9 7.149c-1.22 2.545.125 4.191.978 4.71a3.45 3.45 0 0 1-2.045-1.56c.665 2.331 3.09 2.854 4.342 2.811a2.8 2.8 0 0 1-.69-1.311"
          />
          <path
            fill="currentColor"
            d="M9.193 13.127c-2.7.086-3.921-1.551-4.329-2.786a3 3 0 0 1-.15-.27c0 2.43 2.225 3.63 3.335 3.93-.802 0-1.779-.24-2.169-.36l.017.06a3.25 3.25 0 0 0 1.817.656c1.2 0 2.169-.355 2.499-.535 0 0-1.243-.742-.304-.155a3 3 0 0 1-.716-.54m.981-8.383C9.16 5.19 7.714 6.142 7.38 7.573a2.86 2.86 0 0 0 1.046 2.906 3.9 3.9 0 0 0 .056 1.315c-2.82-.822-2.898-3.291-2.47-4.868l.035-.069c0 .656.167 2.002.832 2.143-.33-1.191-.129-3.716 3.334-4.286l-.043.03z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VEX__a)"
            d="M8.712 9.356c-1.328-1.997.446-3.926 1.5-4.642C6.745 5.284 6.548 7.81 6.882 9c-.668-.141-.835-1.487-.835-2.143-1.466 2.713-.056 4.466.835 5.002a3.47 3.47 0 0 1-2.168-1.787c0 2.43 2.224 3.63 3.334 3.93-.801 0-1.778-.24-2.168-.36.402 1.714 3.171 2.742 4.5 3.038-.228-.124-.793-.771-1.158-1.217.378.39 1.115.836 1.492 1.037-.12 0-.244.142-.399.326-.27.317-.634.745-1.268.745-.802 0-1.556-.595-1.835-.89.335 1.246.669 1.782 1.5 1.962.669.141 1.389-.536 1.672-.892-.403 1.14-1.5 1.188-2.002 1.072.108.176.532.536 1.329.536.801 0 1.337-1.192 1.5-1.788a2.63 2.63 0 0 1-1.166 2.143h1.003c1.329-.287 1.222-1.787.999-2.498.668.998.385 1.843.167 2.143 1.2-.575.943-1.672.668-2.143.266.141.442.771.498 1.071.265-.857 0-1.431-.168-1.607.536-.146 1.445-1.011 1.835-1.431a4.5 4.5 0 0 1-1.333 1.431c3.068 0 4.388-2.027 4.667-3.038-1.2.428-1.946.42-2.169.36a4.35 4.35 0 0 0 3.502-3.93 2.64 2.64 0 0 1-2.169 1.787c2.272-1.573 1.397-3.986.669-5.002.133 1.427-.502 2.143-.832 2.323.532-3.287-2.001-4.346-3.334-4.466 2.932 2.143 2.22 4.106 1.5 4.822 1.067 3-.557 4.106-1.5 4.286 1.329-.858 1.329-1.903 1.166-2.323-.133 1.144-1.166 1.431-1.667 1.431.535-1.286-.335-2.678-.832-3.214.129-.146.497-.06.665 0 0-.146-.442-.18-.665-.18.325-.104.674-.104.999 0a1.93 1.93 0 0 0-1.5-.356c.531-.146.887-.06.998 0a1.44 1.44 0 0 0-.998-.36c-.532 0-1.222.476-1.5.716l-.167-.18c.055.12.098.428-.167.716-.266.287-.335.83-.335 1.07 0-.286.335-.355.502-.355l-.167.176c.934-.429 1.277.42 1.332.896 0 .857-.557 1.187-.831 1.247-1.067-.142-1.667-1.132-1.834-1.607-.215 1.17.364 1.86.857 2.168-1.929-1.071-1.612-3.291-1.192-4.311m2.002.896c0-.12.133-.395.664-.536v.176z"
          />
          <path
            fill="url(#VEX__b)"
            d="m14.267 13.766-.052.056c.33.18 1.23.535 2.165.535a3.43 3.43 0 0 0 2.001-.711c-1.2.428-1.946.415-2.169.355a4.29 4.29 0 0 0 3.039-2.297l.416-1.221.034-.232c-1.217 2.636-3.386 3.168-4.646 3.078a2.3 2.3 0 0 1-.788.437"
          />
          <path
            fill="url(#VEX__c)"
            d="M15.141 13.252c1.74 0 3.441-.79 4.449-2.44q.1-.363.124-.74a2.64 2.64 0 0 1-2.169 1.787c2.057-1.423 1.53-3.54.875-4.676.244 1.539-.065 3.707-2.529 4.414a2.45 2.45 0 0 1-.75 1.655"
          />
          <path
            fill="url(#VEX__d)"
            d="M8.485 11.799c-2.575-.703-2.845-3.086-2.584-4.65-1.221 2.545.124 4.191.977 4.71a3.45 3.45 0 0 1-2.044-1.56c.664 2.331 3.09 2.854 4.341 2.811a2.8 2.8 0 0 1-.69-1.311"
          />
          <path
            fill="url(#VEX__e)"
            d="M9.192 13.127c-2.7.086-3.921-1.551-4.328-2.786a3 3 0 0 1-.15-.27c0 2.43 2.224 3.63 3.334 3.93-.801 0-1.778-.24-2.168-.36l.017.06a3.25 3.25 0 0 0 1.817.656c1.2 0 2.168-.355 2.498-.535 0 0-1.242-.742-.304-.155a3 3 0 0 1-.716-.54"
          />
          <path
            fill="url(#VEX__f)"
            d="M10.174 4.744c-1.016.446-2.46 1.398-2.794 2.829a2.86 2.86 0 0 0 1.045 2.906 3.9 3.9 0 0 0 .056 1.315c-2.82-.822-2.897-3.291-2.469-4.868l.035-.069c0 .656.167 2.002.831 2.143-.33-1.191-.128-3.716 3.334-4.286l-.042.03z"
          />
          <defs>
            <linearGradient
              id="VEX__a"
              x1="12.214"
              x2="12.214"
              y1="4.714"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF680B" />
              <stop offset=".37" stopColor="#DF0B1B" />
              <stop offset=".5" stopColor="#F9580E" />
              <stop offset=".71" stopColor="#E51E18" />
              <stop offset="1" stopColor="#DB001D" />
            </linearGradient>
            <linearGradient
              id="VEX__b"
              x1="11.089"
              x2="12.832"
              y1="15.142"
              y2="19.379"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F34711" />
              <stop offset="1" stopColor="#FB5C0D" />
            </linearGradient>
            <linearGradient
              id="VEX__c"
              x1="12.066"
              x2="12.066"
              y1="13.178"
              y2="18.475"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ED3414" />
              <stop offset="1" stopColor="#F9560E" />
            </linearGradient>
            <linearGradient
              id="VEX__d"
              x1="12.932"
              x2="11.384"
              y1="15.213"
              y2="18.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EF3913" />
              <stop offset="1" stopColor="#FA580E" />
            </linearGradient>
            <linearGradient
              id="VEX__e"
              x1="13.354"
              x2="11.366"
              y1="14.719"
              y2="19.353"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F24311" />
              <stop offset="1" stopColor="#FB5C0D" />
            </linearGradient>
            <linearGradient
              id="VEX__f"
              x1="8.019"
              x2="8.019"
              y1="4.714"
              y2="11.794"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E21519" />
              <stop offset="1" stopColor="#F54A10" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenVEX.displayName = 'VEX'

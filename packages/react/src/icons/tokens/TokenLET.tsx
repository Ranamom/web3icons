import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLET = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.898 18.217a6.8 6.8 0 0 1-2.898.64 6.8 6.8 0 0 1-2.926-.653 9.6 9.6 0 0 0 1.524.07 11 11 0 0 0 1.497-.125c.764.125 1.837.156 2.803.068m.223-.11c-.923.106-1.98.095-2.778-.008 1.4-.322 3.484-1.365 4.83-3.435a.18.18 0 0 0 .195-.007.17.17 0 0 0 .071-.114.18.18 0 0 0-.081-.178c.52-.885.904-1.942 1.06-3.193.178.533.31 1.11.378 1.733h.002a6.86 6.86 0 0 1-3.677 5.203m-3.026-.045c1.38-.25 3.61-1.285 5.016-3.462a.175.175 0 0 1 .067-.239.2.2 0 0 1 .088-.023h.007c.543-.919.94-2.029 1.08-3.353a8 8 0 0 0-.391-.902.175.175 0 0 1-.144-.27c-1.165-2.093-3.047-3.28-4.19-3.678a.176.176 0 0 1-.294-.057c-1.385-.042-3.55.382-5.299 1.892a.176.176 0 0 1-.245.221c-.796.753-1.488 1.748-1.956 3.048a.175.175 0 0 1-.07.253c.263 1.682 1.384 4.353 3.945 5.757a.175.175 0 0 1 .301.155c.615.3 1.308.529 2.085.658M7.985 7.9a.176.176 0 0 0-.258.233c-.796.753-1.49 1.748-1.961 3.043a.2.2 0 0 0-.047-.015c-.053-.496-.088-1.344.038-2.001a6.88 6.88 0 0 1 3.596-3.489v.003a10.5 10.5 0 0 1 1.817-.04c.67.04 1.399.143 2.039.354-1.401-.012-3.51.435-5.224 1.911m-2.36 1.57c-.068.6-.036 1.272.008 1.695a.176.176 0 0 0 .02.341 13 13 0 0 0-.406 1.69 6.9 6.9 0 0 1 .377-3.726m4.043 7.853a.176.176 0 0 0 .305.158 7.6 7.6 0 0 0 1.86.62c-.315.04-.76.075-1.237.087-.615.014-1.28-.012-1.79-.119a6.87 6.87 0 0 1-3.511-4.627c.086-.583.245-1.278.407-1.805.302 1.701 1.441 4.302 3.966 5.686m9.168-4.777a6.85 6.85 0 0 0-.344-2.76q.008.595-.052 1.187c.175.487.31 1.011.395 1.573M18.4 9.534a6.9 6.9 0 0 0-2.125-2.896c-.396-.188-.956-.322-1.49-.411a12 12 0 0 0-.995-.124c1.163.445 2.96 1.626 4.092 3.649a.176.176 0 1 1 .166.31q.177.349.323.728.052-.6.03-1.256m-2.39-3.096a7.4 7.4 0 0 0-1.21-.296 12 12 0 0 0-1.125-.134.176.176 0 0 0-.337-.065c-.674-.238-1.454-.35-2.163-.393a11 11 0 0 0-1.535.01A6.8 6.8 0 0 1 12 5.143a6.82 6.82 0 0 1 4.01 1.295M17.143 12a5.143 5.143 0 1 1-10.286 0 5.143 5.143 0 0 1 10.286 0"
          />
          <path
            fill="currentColor"
            d="M12 14.572a2.57 2.57 0 1 0 0-5.141 2.57 2.57 0 0 0 0 5.14m-.643-3a.643.643 0 1 0 0-1.287.643.643 0 0 0 0 1.287"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#106BBE"
            d="M14.898 18.217a6.8 6.8 0 0 1-2.898.64 6.8 6.8 0 0 1-2.926-.653 9.6 9.6 0 0 0 1.524.07 11 11 0 0 0 1.497-.125c.764.125 1.837.156 2.803.068m.223-.11c-.923.106-1.98.095-2.778-.008 1.4-.322 3.484-1.365 4.83-3.435a.18.18 0 0 0 .195-.007.17.17 0 0 0 .071-.114.18.18 0 0 0-.081-.178c.52-.885.904-1.942 1.06-3.193.178.533.31 1.11.378 1.733h.002a6.86 6.86 0 0 1-3.677 5.203m-3.026-.045c1.38-.25 3.61-1.285 5.016-3.462a.175.175 0 0 1 .067-.239.2.2 0 0 1 .088-.023h.007c.543-.919.94-2.029 1.08-3.353a8 8 0 0 0-.391-.902.175.175 0 0 1-.144-.27c-1.165-2.093-3.047-3.28-4.19-3.678a.176.176 0 0 1-.294-.057c-1.385-.042-3.55.382-5.299 1.892a.176.176 0 0 1-.245.221c-.796.753-1.488 1.748-1.956 3.048a.175.175 0 0 1-.07.253c.263 1.682 1.384 4.353 3.945 5.757a.175.175 0 0 1 .301.155c.615.3 1.308.529 2.085.658M7.985 7.9a.176.176 0 0 0-.258.233c-.796.753-1.49 1.748-1.961 3.043a.2.2 0 0 0-.047-.015c-.053-.496-.088-1.344.038-2.001a6.88 6.88 0 0 1 3.596-3.489v.003a10.5 10.5 0 0 1 1.817-.04c.67.04 1.399.143 2.039.354-1.401-.012-3.51.435-5.224 1.911m-2.36 1.57c-.068.6-.036 1.272.008 1.695a.176.176 0 0 0 .02.341 13 13 0 0 0-.406 1.69 6.9 6.9 0 0 1 .377-3.726m4.043 7.853a.176.176 0 0 0 .305.158 7.6 7.6 0 0 0 1.86.62c-.315.04-.76.075-1.237.087-.615.014-1.28-.012-1.79-.119a6.87 6.87 0 0 1-3.511-4.627c.086-.583.245-1.278.407-1.805.302 1.701 1.441 4.302 3.966 5.686m9.168-4.777a6.85 6.85 0 0 0-.344-2.76q.008.595-.052 1.187c.175.487.31 1.011.395 1.573M18.4 9.534a6.9 6.9 0 0 0-2.125-2.896c-.396-.188-.956-.322-1.49-.411a12 12 0 0 0-.995-.124c1.163.445 2.96 1.626 4.092 3.649a.176.176 0 1 1 .166.31q.177.349.323.728.052-.6.03-1.256m-2.39-3.096a7.4 7.4 0 0 0-1.21-.296 12 12 0 0 0-1.125-.134.176.176 0 0 0-.337-.065c-.674-.238-1.454-.35-2.163-.393a11 11 0 0 0-1.535.01A6.8 6.8 0 0 1 12 5.143a6.82 6.82 0 0 1 4.01 1.295M17.143 12a5.143 5.143 0 1 1-10.286 0 5.143 5.143 0 0 1 10.286 0"
          />
          <path
            fill="#106BBE"
            d="M12 14.572a2.57 2.57 0 1 0 0-5.141 2.57 2.57 0 0 0 0 5.14m-.643-3a.643.643 0 1 0 0-1.287.643.643 0 0 0 0 1.287"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenLET.displayName = 'LET'

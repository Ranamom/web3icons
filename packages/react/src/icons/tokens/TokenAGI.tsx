import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenAGI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.274 8.087c.038-1.332-.616-2.37-1.533-3.27a.225.225 0 0 1-.062-.28.21.21 0 0 1 .238 0 4.04 4.04 0 0 1 1.785 1.438c.443.64.689 1.396.708 2.174l-.015.153c-.05.516-.178 1.85-.97 2.517a.53.53 0 0 1-.71-.144.505.505 0 0 1-.045-.563c.38-.609.588-1.308.604-2.025m-3.957 9.883q.46.659 1.037 1.219c.094.094.094.188.043.231-.043.05-.138.094-.188.05a4.19 4.19 0 0 1-2.355-2.625c-.333-1.157-.095-2.87.847-3.657a.53.53 0 0 1 .71.143.436.436 0 0 1 0 .563 3.99 3.99 0 0 0-.094 4.076m4.114-5.088c.576.689.92 1.542.986 2.438v.006a4.1 4.1 0 0 1-.616 2.488 5.9 5.9 0 0 1-1.79 1.637.182.182 0 0 1-.283-.043.167.167 0 0 1 .045-.238 4.7 4.7 0 0 0 1.369-1.688c.284-.63.365-1.334.232-2.012a2.8 2.8 0 0 0-.891-1.688 10 10 0 0 0-1.79-1.22 8.1 8.1 0 0 1-2.023-1.45 4.5 4.5 0 0 1-.753-1.125 4.1 4.1 0 0 1-.333-1.312 3.95 3.95 0 0 1 .665-2.532 4.23 4.23 0 0 1 1.835-1.594.19.19 0 0 1 .232-.013c.088.063.088.219 0 .294a5.2 5.2 0 0 0-1.32 1.732 3.36 3.36 0 0 0-.232 1.919 3.14 3.14 0 0 0 .898 1.637c.553.48 1.153.904 1.79 1.264.732.396 1.4.902 1.979 1.5"
          />
        </>
      ) : (
        <>
          <path
            fill="#3A2674"
            d="M14.273 8.087c.038-1.332-.615-2.37-1.532-3.27a.225.225 0 0 1-.063-.28.21.21 0 0 1 .239 0 4.04 4.04 0 0 1 1.785 1.438c.442.64.688 1.396.708 2.174l-.016.153c-.05.516-.177 1.85-.97 2.517a.53.53 0 0 1-.71-.144.505.505 0 0 1-.044-.563 4 4 0 0 0 .603-2.025m-3.956 9.883a8.4 8.4 0 0 0 1.036 1.219c.094.094.094.188.044.231-.044.05-.138.094-.189.05a4.19 4.19 0 0 1-2.355-2.625c-.333-1.157-.094-2.87.848-3.657a.53.53 0 0 1 .71.143.436.436 0 0 1 0 .563 3.99 3.99 0 0 0-.094 4.076m4.113-5.088c.576.689.921 1.542.986 2.438v.006a4.1 4.1 0 0 1-.615 2.488 5.9 5.9 0 0 1-1.79 1.637.183.183 0 0 1-.283-.043.17.17 0 0 1-.028-.128.17.17 0 0 1 .072-.11 4.7 4.7 0 0 0 1.37-1.688c.284-.63.365-1.334.232-2.012a2.8 2.8 0 0 0-.892-1.688 10 10 0 0 0-1.79-1.22 8.1 8.1 0 0 1-2.022-1.45 4.5 4.5 0 0 1-.754-1.125 4.1 4.1 0 0 1-.333-1.312 3.95 3.95 0 0 1 .666-2.532 4.23 4.23 0 0 1 1.834-1.594.19.19 0 0 1 .232-.013c.088.063.088.219 0 .294a5.2 5.2 0 0 0-1.319 1.732 3.36 3.36 0 0 0-.232 1.919 3.14 3.14 0 0 0 .898 1.637 11 11 0 0 0 1.79 1.264c.732.396 1.4.902 1.978 1.5"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenAGI.displayName = 'AGI'

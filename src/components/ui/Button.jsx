
import { motion } from 'framer-motion'
import { classNames } from '@/lib/utils'
import { buttonTap } from '@/lib/animations'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-md hover:shadow-lg',
    secondary: 'bg-neutral-50 text-primary-500 border-2 border-primary-500 hover:bg-primary-50 focus:ring-primary-500 shadow-md hover:shadow-lg',
    ghost: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-500 focus:ring-white',
    outline: 'bg-transparent text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-md hover:shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        baseClasses,
        variants[variant],
        sizes[size],
        widthClass,
        className
      )}
      whileTap={!disabled ? buttonTap : {}}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button

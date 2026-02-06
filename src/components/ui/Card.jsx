
import { motion } from 'framer-motion'
import { classNames } from '@/lib/utils'

const Card = ({
  children,
  className = '',
  hover = false,
  padding = true,
  shadow = true,
  rounded = true,
  variants,
  ...props
}) => {
  const baseClasses = 'bg-white'

  const paddingClass = padding ? 'p-6' : ''
  const shadowClass = shadow ? 'shadow-md' : ''
  const roundedClass = rounded ? 'rounded-xl' : ''
  const hoverClass = hover ? 'hover:-translate-y-2 hover:shadow-soft' : ''

  const CardComponent = hover ? motion.div : 'div'

  const motionProps = hover
    ? {
        initial: 'rest',
        whileHover: 'hover',
        transition: { duration: 0.3 },
      }
    : {}

  return (
    <CardComponent
      className={classNames(
        baseClasses,
        paddingClass,
        shadowClass,
        roundedClass,
        hoverClass,
        'transition-all duration-300',
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </CardComponent>
  )
}

export default Card


import { classNames } from '@/lib/utils'

const Input = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  required = false,
  disabled = false,
  className = '',
  icon,
  ...props
}) => {
  const baseInputClasses = 'input-field'
  const errorClass = error ? 'input-error' : ''
  const iconPaddingClass = icon ? 'pl-12' : ''

  return (
    <div className={classNames('w-full', className)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={classNames(
            baseInputClasses,
            errorClass,
            iconPaddingClass,
            disabled && 'bg-neutral-100 cursor-not-allowed'
          )}
          {...props}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default Input

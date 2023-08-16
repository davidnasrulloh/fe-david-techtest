import { CustomInputProps } from '../types'

const CustomInput = ({name, inputStyle, handleChange, inputType, placeholder, value, labelStyle, leadingIcon, isDisabled, color, iconStyle, label}:CustomInputProps) => {
    return (
        <div className={color}>
            <label htmlFor={name} className={`${labelStyle} block mb-0 text-xl font-medium dark:text-white`}>{label}</label>
            <div className="relative mb-6">
                <div className={`${iconStyle} absolute flex items-center`}>
                    {leadingIcon}
                </div>
                <input disabled={isDisabled} value={value} onChange={handleChange} type={inputType} name={name} id={name} className={`${inputStyle}`} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default CustomInput
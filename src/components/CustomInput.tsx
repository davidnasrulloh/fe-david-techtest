import { CustomInputProps } from '../types'

const CustomInput = ({name, inputStyle, handleChange, inputType, placeholder, value, labelStyle, leadingIcon, isDisabled, color, iconStyle, label, error, errorText}:CustomInputProps) => {
    return (
        <div className={`${color} mb-5`}>
            <label htmlFor={name} className={`${labelStyle} block mb-0 text-xl font-medium`}>{label}</label>
            <div className="relative mb-2">
                <div className={`${iconStyle} absolute flex items-center`}>
                    {leadingIcon}
                </div>
                <input disabled={isDisabled} value={value} onChange={handleChange} type={inputType} name={name} id={name} className={`${inputStyle}`} placeholder={placeholder} />
            </div>
            {
                !error && (
                    <p className='text-2xl text-red-600 font-normal'>
                        {errorText}
                    </p>
                )
            }
        </div>
    )
}

export default CustomInput
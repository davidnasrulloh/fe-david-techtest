import { CustomButtonProps } from '../types';
import { buttonStyle } from '../dist/style';

const CustomButton = ({title, containerStyle, handleClick, btnType, textStyle, rightIcon} : CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`${buttonStyle.customBtn} ${containerStyle}`}
            onClick={handleClick}>
            
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            
            {
                rightIcon && (
                    <div className='relative w-6 h-6'>
                        <img src={rightIcon} alt="right-icon" className='object-contain'/>
                    </div>
                )
            }

        </button>
    )
}

export default CustomButton
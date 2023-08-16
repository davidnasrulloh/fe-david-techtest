import { CustomButtonProps } from '../types';
import { buttonStyle } from '../dist/style';
import { motion } from 'framer-motion';

const CustomButton = ({title, containerStyle, handleClick, btnType, textStyle, rightIcon} : CustomButtonProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, x: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <button
                disabled={false}
                type={btnType || "button"}
                className={`${buttonStyle.customBtn} ${containerStyle} flex`}
                onClick={handleClick}>
                
                <span className={`flex-1 ${textStyle}`}>
                    {title}
                </span>
                
                {rightIcon && (
                    <div className={`${textStyle} my-auto ml-4`}>
                        {rightIcon}
                    </div>
                )}
            </button>
        </motion.div>
    )
}

export default CustomButton
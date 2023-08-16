// import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../types'
import { motion } from 'framer-motion';

const CardUser = ({id, email, first_name, last_name, avatar}: User) => {
    return (
        <Link to={`/users/${id}`}>
            <motion.div 
                animate={{
                    scale: [0.8, 1, 0.9, 1],
                    rotate: [0, 3, 10, 0],
                    borderRadius: ["4%", "0%", "5%", "4%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0.2, 0.4, 0.5, 0.3, 0.2],
                }}
                className="group w-[280px] h-[380px] sm:w-[260px] sm:h-[380px] 2xl:w-[310px] 2xl:h-[440px] pb-6 bg-white flex-col justify-start items-center gap-5 inline-flex shadow-lg hover:shadow-xl hover:p-6 hover:translate-y-4 transition-all">
                <img className="w-[310px] h-[480px] group-hover:rounded-xl" src={avatar} />
                <div className="flex-col justify-start items-center flex my-4">
                    <div className="text-center text-stone-700 text-3xl 2xl:text-4xl font-bold group-hover:text-blue-600 transition-all">{first_name} {last_name}</div>
                    <div className="text-center text-stone-400 text-2xl 2xl:text-3xl mt-2 font-medium group-hover:text-blue-600 transition-all">{email}</div>
                </div>
            </motion.div>
        </Link>
    )
}

export default CardUser
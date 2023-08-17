// import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../types'
import { motion } from 'framer-motion';
import { cardUserStyle } from './../styles/style';

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
                className={`${cardUserStyle.container}`}>
                <img className={`${cardUserStyle.imageContent}`} src={avatar} />
                <div className={`${cardUserStyle.infoContainer}`}>
                    <h2 className={`${cardUserStyle.heading}`}>{first_name} {last_name}</h2>
                    <p className={`${cardUserStyle.paragraph}`}>{email}</p>
                </div>
            </motion.div>
        </Link>
    )
}

export default CardUser
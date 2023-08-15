// import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../types'

const CardUser = ({id, email, first_name, last_name, avatar}: User) => {
    return (
        <Link to={`/users/${id}`}>
            <div className="w-[310px] h-[440px] pb-6 bg-white shadow flex-col justify-start items-center gap-5 inline-flex">
                <img className="w-[310px] h-[480px]" src={avatar} />
                <div className="flex-col justify-start items-center flex my-auto">
                    <div className="text-center text-stone-700 text-4xl font-bold">{first_name} {last_name}</div>
                    <div className="text-center text-stone-400 text-3xl mt-2 font-medium">{email}</div>
                </div>
            </div>
        </Link>
    )
}

export default CardUser
import React, { useState, useEffect } from 'react'
import { data } from 'react-router-dom'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/SouvikBuilds")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div className='text-center m-5 bg-gray-500 text-white p-4 text-3xl flex flex-col justify-center items-center gap-4'>
            Github Followers: {data.followers}

            <img src={data.avatar_url} alt="SouvikBuilds" className='text-center w-[300px] rounded-lg shadow-lg' />
        </div>
    )
}

export default Github

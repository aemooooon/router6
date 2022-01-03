import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <div>
            <h1>{id}</h1>
            <h2>{searchParams.get("name")}</h2>
        </div>
    )
}

export default User

// import React,{useState,useEffect} from 'react'
// const Card = (props) => {
//     const User = (props.match.params.user)
//     const UseEffect = () =>{
//         // eslint-disable-next-line
//         const [user, setUser] = useState('')
//         useEffect(()=>{
//             setUser(User)
//         },[])
//     }
//     return (
//         <>
//         {UseEffect()}
//             <div className="ui very raised padded text container segment">
//                 <h3 className="ui">{user}</h3>
//             </div>
//         </>
//     )
// }

// export default Card

import React from "react";
import { useParams,useRouteMatch} from "react-router-dom"

const Card = () => {
    const {user} = useParams()
    const {path} = useRouteMatch()
    return (
        <>
            <div className="ui very raised padded text container segment">
                <h2 className="ui segment">This is the path '{path}'</h2>
                <h3 className="ui">{user}</h3>
            </div>
        </>
    )
}

export default Card;


import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//NavLink Actually adds the 'active' class if that link is active, it is very useful in styling the the active tags/links/buttons
const Navbar = (props) => {
    // // console.log(props.mode);
    // let color = 'inverted'
    // const enableDarkMode = () => {
    //     if (color ==='light'){
    //         color = 'inverted'
    //         console.log(color);
    //     }
    //   }
    // //   let color = props.mode
      
    //   setTimeout(() => {
    // //     //   console.log('hello there');
    //     enableDarkMode()
    //   }, 2000);

    return (
        <>
            <nav className={`ui raised very padded segment ${props.mode}`}>
                <NavLink to='/' className={`ui teal inverted segment`}>Bingo</NavLink>
                <div className="ui right floated header">
                    <button className="ui animated button">
                        <div className="visible content">Dark mode</div>
                        <div className="hidden content">
                        <i className="moon icon"></i>
                        </div>
                        </button>
                    <button className="ui button"><Link to="/">Home</Link></button>
                    <button className="ui button"><Link to="/about">About</Link></button>
                    <button className="ui button"><NavLink to="/Contact">Contact</NavLink></button>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;



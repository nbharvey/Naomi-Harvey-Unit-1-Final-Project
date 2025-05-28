import './Header.css'
import Shimmer from './Shimmer'

function Header() {

    return (
        <>
            <Shimmer>
        <img src="/studying.png" className="profile-pic" alt="Animation of Naomi" />
            
            <div className='header'>
            <h1><span id="h1">Naomi's Digital Playground</span></h1>
                
                </div>
                </Shimmer>
    </>
    )
}

export default Header
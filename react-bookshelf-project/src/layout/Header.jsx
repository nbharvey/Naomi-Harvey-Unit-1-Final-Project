import './Header.css';
import Shimmer from '../components/Shimmer';

function Header() {

    return (
        <>
            <div className='header'>
                <div className="naomi">
                    <img src="/studying.png" className="profile-pic" alt="Animation of Naomi" />
                </div>
                <h1>
                    <Shimmer>
                        <span id="h1">Naomi's Digital Playground</span>
                    </Shimmer>
                </h1>
            </div>
        </>
    )
}

export default Header
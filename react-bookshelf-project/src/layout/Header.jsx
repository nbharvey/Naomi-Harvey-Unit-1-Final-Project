import './Header.css';
import Shimmer from '../components/Shimmer';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    let backgroundClass = 'headerMaroon';

    switch (location.pathname) {
        case '/home':
            backgroundClass = 'headerMaroon';
            break;
        case '/resume':
            backgroundClass = 'headerBlack';
            break;
        case '/aboutprojects':
            backgroundClass = 'headerPurple';
            break;
        case '/aboutnaomi':
            backgroundClass = 'headerBlue';
            break;
        case '/library':
            backgroundClass = 'headerGreen';
            break;
        default:
            backgroundClass = 'headerMaroon';
    }


    // Inside Header.jsx, before the return statement
    console.log("Current location.pathname:", location.pathname);
    console.log("Determined backgroundClass:", backgroundClass);

    return (
        <>
            <div className={`header header-background-common ${backgroundClass}`}>

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
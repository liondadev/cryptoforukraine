import "./navlinks.css"
import 'animate.css';

function NavLinks() {
    return (<div className="nav-links-body">
        <div className="nav-links-name-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="nav-links-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
            <p className="nav-links-name">CryptoForUkraine</p>
        </div>
        <div className="nav-links-links-container">
            <a href="https://www.coinbase.com/signup">Buy Crypto</a>
            <a href="https://twitter.com/ukraine/status/1497594592438497282">Twitter Post</a>
            <a href="https://twitter.com/ZelenskyyUa">President's Twitter</a>
        </div>
    </div>)
}

export default NavLinks;

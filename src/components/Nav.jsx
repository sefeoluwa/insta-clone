import instagramLogo from '../assets/instagramLogo.png'

const Nav = () => {
    return(
        <nav>
            <button className="logo">
                <img src={instagramLogo} alt="" />
            </button>
        </nav>
    )
}

export default Nav

import img from "./../images/airbnb1.png"

export default function NavBar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={img} />
        </nav>
    )
}
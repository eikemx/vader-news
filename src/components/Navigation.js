import Searchbar from "./Searchbar";

const Navigation = () => {
    return (
        <div className="navigation">
                <div className="nav-header">
                    <img className="nav-image" src="https://images.pexels.com/photos/4310574/pexels-photo-4310574.jpeg?cs=srgb&dl=pexels-lucas-ianiak-4310574.jpg&fm=jpg" alt="I am your father!"/>
                    <p  className="nav-title">VADER NEWS</p>
                </div>
                <nav className="topnav">
                    <p className="nav-new">new | </p>
                    <p  className="nav-past"> past | </p>
                    <p  className="nav-comments"> comments | </p>
                    <p  className="nav-ask"> ask | </p>
                    <p  className="nav-show"> show | </p>
                    <p  className="nav-jobs"> jobs | </p>
                    <p  className="nav-submit"> submit</p>
                </nav>
                <div className="nav-search">
                    {/* <Searchbar /> */}
                </div>
        </div>
    )
};

export default Navigation;
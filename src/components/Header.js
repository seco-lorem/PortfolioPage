import '../stylesheets/Header.css';


function Header() {
    // As the user scrolls down the screen, minimise the header.
    window.onscroll = function() {slideSideBar()};
    const slideSideBar = () => {
        document.documentElement.style.setProperty("--header-height-value",         // 60 vh is default height of header.
            (60 - document.documentElement.scrollTop * 100 / window.innerHeight) +  // this is how much user scrolled in terms of vh.
        "");
    }

    return (
        <div className="header">
            <span className="info-box">
                Yekta Seçkin Satır
            </span>
        </div>
    );
}

export default Header;

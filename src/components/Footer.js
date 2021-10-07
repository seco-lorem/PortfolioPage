import '../stylesheets/Pages.css';


/**
 * Not needed but why delete
 */
function Footer() {
    return (
        <div>
            <div className="footer"/>
            <div className="nav-bar">
                <span className="disabled-button"> Designed by industrial design student </span>
                <a className="button credit-button" target="_blank" href={"https://dogaozyurtid.wordpress.com/"}> Doğa </a>
                <span className="disabled-button"> , CSS and reactJS implemented by </span>
                <a className="button credit-button" target="_blank" href={"https://yektaseckinsatir.com/"}> Me </a>
            </div>
        </div>
    );
}

export default Footer;

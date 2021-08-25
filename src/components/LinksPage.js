import '../stylesheets/Pages.css';
import data from '../pageContents';


const links = data.links;

function LinksPage() {
    return (
        <div>
            <h1> Check out my </h1>
            {links.map((link) => {
                return (
                    <a className="link box" target="_blank" href={link.link}>{link.title}</a>
                )
            })}
        </div>
    );
}

export default LinksPage;

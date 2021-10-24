import '../stylesheets/Pages.css';
import data from '../pageContents';


const links = data.links;

function NotFound() {
    return (
        <div className="center">
            <h1> Page Not Found. </h1>
            <h3> It may have moved, or you may have mistyped the URL.</h3>
        </div>
    );
}

export default NotFound;

import '../stylesheets/Pages.css';
import data from '../pageContents';


const texts = data.aboutMe;
const pngLink = data.photoLink;

function HomePage() {
    return (
        <div>
            <div className="center">
                {pngLink === "" ?
                    <h1> About Me </h1>
                :
                    <img src={pngLink} className="image" alt="seckin"/>
                }
            </div>
            {texts.map((text) => {
                return (
                    <div>
                        {(text.isTitle) ?
                            <h2>{text.text}</h2>
                        :
                            <p>{text.text}</p>
                        }
                    </div>
                )
            })}
        </div>
    );
}

export default HomePage;

import '../stylesheets/Pages.css';
import data from '../pageContents';


const texts = data.aboutMe;
const pngLink = data.photoLink;

function HomePage() {
    return (
        <div>
            <div className="center">
                <h1> About Me </h1>
                {pngLink === "" ?
                    <span/>
                :
                    <img src={pngLink} width="250" height="278" alt="seckin"/>
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

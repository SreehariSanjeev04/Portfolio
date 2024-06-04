import logo from '../assets/avatar.jpg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
function Introduction() {
    return(
        <div className="intro">
            <img src={logo}></img>
            <div className='intro-text'>
                <p>Hi, I am Sreehari, a CS undergrad student with a passion for creating modern-day applications.</p>
                <div className="social">
                    <a href="https://github.com/SreehariSanjeev04" target="_blank"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/sreehari-sanjeev-a657551a9/" target="_blank"><img src={linkedin}></img></a>
                </div>
            </div>
        </div>
        
    );
}
export default Introduction
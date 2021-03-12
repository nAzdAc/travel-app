import './footer.css';
import images from '../../assets/images/index';

const Footer = () => 
    <footer className="footer">
        <div className="rs">
            <a 
                className="rs__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://rs.school/react/"
            >
                <img 
                    className="rs__link-img"
                    src={images.rs}
                    alt="rs"
                />
            </a>
            
        </div>
        <p className="year">
            2021
        </p>
        <div className="developers">
            <a 
                className="github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AGoravskiy"
            >
                AGoravskiy
            </a>
            <a
                className="github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nAzdAc"
            >
                nAzdAc
            </a>
            <a 
                className="github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Nicolay-kr"
            >
                Nickolay-Kr
            </a>
            <a
                className="github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ShvetsBy"
            >
                ShvetsBy
            </a>
        </div>
    </footer>

export default Footer;

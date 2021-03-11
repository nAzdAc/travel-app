import './footer.css';
import images from '../../assets/images/index';

const footer = () => {
  return (
    <footer className="footer">
        <div className="rs">
            <a className="rs__link" href="https://rs.school/react/" target="_blank">
                <img 
                    className="rs__link-img"
                    src={images.rs.default}
                    alt="rs"
                />
            </a>
            
        </div>
        <p className="year">
            2021
        </p>
        <div className="developers">
            <a className="github" href="https://github.com/AGoravskiy" target="_blank">AGoravskiy</a>
            <a className="github" href="https://github.com/nAzdAc" target="_blank">nAzdAc</a>
            <a className="github" href="https://github.com/Nicolay-kr" target="_blank">Nickolay-Kr</a>
            <a className="github" href="https://github.com/ShvetsBy" target="_blank">ShvetsBy</a>
        </div>
    </footer>
  );
}

export default footer;

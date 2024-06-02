import './ImgNews.css';
import OneSmallPict from './img/pic2 1 (1).png';
import TwoSmallPict from './img/pic2 2.png';
import ThreeSmallPict from './img/pic2 3.png'

function img(props) {
    return (
        <img src={props.img} alt='{props.alt}'></img>
    )
}
function ImgNews() {
    return (
        <div>
            <img
                src={OneSmallPict}
                alt='OneSmallPict' />

            <img
                src={TwoSmallPict}
                alt='TwoSmallPict' />

            <img
                src={ThreeSmallPict}
                alt='ThreeSmallPict' />
        </div>
    )
}

export default ImgNews;
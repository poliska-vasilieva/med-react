import './SmallNews.css';
import Img1 from './SmallNewsImg/img/pic2 1 (1).png';
import Img2 from './SmallNewsImg/img/pic2 2.png';
import Img3 from './SmallNewsImg/img/pic2 3.png';

function SmallNew(props) {
  return (
    <div className='MiniNew'>
      <img src={props.src} alt={props.alt}/>
      <div>
        <p>{props.date}</p>
        <p>{props.title}</p>
      </div>
    </div>

  )
}
function SmallNews() {
  return (
    <div className='SmallNews'>
      <SmallNew
        src={Img1}
        alt='Img1'
        date="26 сентября 2023"
        title="Международные студенческие обмены. Опыт и перспективы" />

      <SmallNew
        src={Img2}
        alt='Img2'
        date="16 сентября 2023"
        title="Встреча выпускников 1983 года" />

      <SmallNew
        src={Img3}
        alt='Img3'
        date="14 сентября 2023"
        title="Противодействие идеологии терроризма и профилактики экстремизма в социальных сетях." />
    </div>
  )
}

export default SmallNews;
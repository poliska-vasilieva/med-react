import './MainNews.css';
import MainImg from './Img/pic2 1.png'

function MainNew(props) {
    return (
        <div>
            <div><img src={MainImg} className="MainImg" alt="MainImg" /></div>
            <p>{props.date}</p>
            <p>{props.title}</p>
            <p>{props.about}</p>
        </div>

    )
}

function MainNews() {
    return (
        <div>
            <MainNew
                date="3 октября 2023"
                title="Второй этап конкурса на звание «Лучший врач педиатр участковый»" 
                about="3 октября 2023 года прошло тестирование практических навыков врачей педиатров участковых в обучающем ... " />
        </div>
    )
}

export default MainNews;
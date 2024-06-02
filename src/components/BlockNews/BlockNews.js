import './BlockNews.css';
// // import MainNewPicture from './img/pic2 1.png';

// const BlockNews = () => {
//   return (
//     <div className='MainBlock'>
//       <div className='FirstBlock'>
//         <img src={MainNewPicture} className="MainNewPicture" alt="MainNewPicture" />
//         <p>3 октября 2023</p>
//         <p>Второй этап конкурса на звание «Лучший врач педиатр участковый»</p>
//         <p>3 октября 2023 года прошло тестирование практических навыков врачей педиатров участковых в обучающем...</p>
//         <p>Все новости</p>
//       </div>

//       <div className='SecondBlock'>
//         <div className='ThreeNews'>
//           <div className='OneNew'>
//             <div><img src={OneSmallPict} className="OneSmallPict" alt="OneSmallPict" /></div>
//             <p>26 сентября 2023</p>
//             <p>Международные студенческие обмены. Опыт и перспективы</p>
//           </div>
//         </div>

//         <div className='ThreeNews'>
//           <div className='TwoNew'>
//             <div><img src={TwoSmallPict} className="TwoSmallPict" alt="TwoSmallPict" /></div>
//             <p>16 сентября 2023</p>
//             <p>Встреча выпускников 1983 года</p>
//           </div>
//         </div>

//         <div className='ThreeNews'>
//           <div className='ThreeNew'>
//             <div><img src={ThreeSmallPict} className="ThreeSmallPict" alt="ThreeSmallPict" /></div>
//             <p>14 сентября 2023</p>
//             <p>Противодействие идеологии терроризма и профилактики экстремизма в социальных сетях</p>
//           </div>
//         </div>
//       </div>

//       <div className='ThirdBlock'>
//         <p>здесь будет меню с подразделениями Университета</p>
//       </div>

//     </div>
//   )
// }


function News(props) {
  return (
    <div>
      <p>{props.date}</p>
      <p>{props.title}</p>
    </div>

  )
}
function BlockNews() {
  return (
    <div>
      <News
        date="26 сентября 2023"
        title="Международные студенческие обмены. Опыт и перспективы" />

      <News
        date="16 сентября 2023"
        title="Встреча выпускников 1983 года" />

      <News
        date="14 сентября 2023"
        title="Противодействие идеологии терроризма и профилактики экстремизма в социальных сетяхМеждународные студенческие обмены. Опыт и перспективы" />
    </div>
  )
}

export default BlockNews;
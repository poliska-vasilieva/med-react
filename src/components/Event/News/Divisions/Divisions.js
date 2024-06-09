import './Divisions.css';
import Book from './Img/book.svg';
import Klinika from './Img/Health_Care.svg';
import Instityt from './Img/instityt.svg';
import Center from './Img/center.svg';
import Vestnik from './Img/vestnik.svg';
import Museum from './Img/museum.svg'

function Division(props) {
    return (
        <div className='Division'>
            <img src={props.src} alt={props.alt} className='CardDivivsion' />
            <div>
                <p className='DivisionTitle'>{props.title}</p>
            </div>
        </div>

    )
}
function Divisions() {
    return (
        <div className='Divisions'>
            <Division
                src={Book}
                alt='Book'
                title="Библиотека ОрГМУ" />

            <Division
                src={Klinika}
                alt='Klinika'
                title="Клиника ОрГМУ" />

            <Division
                src={Instityt}
                alt='Instityt'
                title="Институт профессионального образования" />

            <Division
                src={Center}
                alt='Center'
                title="Научно-исследовательский центр" />

            <Division
                src={Vestnik}
                alt='Vestnik'
                title="Оренбургский медицинский вестник" />

            <Division
                src={Museum}
                alt='Museum'
                title="Музей истории ОрГМУ" />
        </div>
    )
}

export default Divisions;
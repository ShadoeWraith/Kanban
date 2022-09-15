import './Card.css';
import options from '../../assets/options.png';

export default function Card() {
  return (
    <div className='card'>
      <h3 className='card-title'>
        To-Do <img className='card-options' src={options} alt='options' />
      </h3>
      <div className='card-desc'>
        <span className='card-tag'>Planning</span>
        <p className='card-todo'>Gots to do this stuff</p>
      </div>
      <div className='card-desc'>
        <span className='card-tag'>Planning</span>
        <p className='card-todo'>Gots to do this stuff</p>
      </div>
      <div className='card-desc'>
        <span className='card-tag'>Planning</span>
        <p className='card-todo'>Gots to do this stuff</p>
      </div>
      <div className='card-desc'>
        <span className='card-tag'>Planning</span>
        <p className='card-todo'>Gots to do this stuff</p>
      </div>
    </div>
  );
}

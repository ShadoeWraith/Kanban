import './Board.css';
import Card from '../Card/Card';

export default function Board() {
  return (
    <div className='board-container'>
      <div className='card'>
        <div className='card-container'>
          <Card />
        </div>
        <div className='add-card'>+ Add a card</div>
      </div>
      <div className='card'>
        <div className='card-container'>
          <Card />
        </div>
        <div className='add-card'>+ Add a card</div>
      </div>
      <div className='card'>
        <div className='card-container'>
          <Card />
        </div>
        <div className='add-card'>+ Add a card</div>
      </div>
      <div className='card add-column'>+ Add a column</div>
    </div>
  );
}

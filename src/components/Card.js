import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);


  // Определяем, являемся ли мы владельцем текущей карточки
const isOwn = card.owner._id === currentUser._id; 
const cardDeleteButtonClassName = (
  `button ${isOwn ? 'element__trash-button' : 'element__button_hidden'}`
);
// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.likes.some(i => i._id === currentUser._id);
const cardLikeButtonClassName = `element__button ${isLiked ? 'element__button_active' : ''}`; 

    function handleClick() {
        onCardClick(card);
      } 

    function handleLikeClick() {
      onCardLike(card);
    }

    function handleDeleteClick() {
      onCardDelete(card);
    }

    return(
      
      <li className="element">
         <div style={{ backgroundImage: `url(${card.link})` }} 
         alt={card.name} className="element__image" onClick={handleClick}></div>
         <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
         <div className="element__block">
          <h2 className="element__title">{card.name}</h2>
          <div className="elemet__like-container">
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            <div className="element__counter">{card.likes.length}</div>
          </div>
        </div>
      </li>
    )
}

export default Card;

import React, { useState } from 'react';

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setinputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const handleCange = (e) => {
    setinputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="TaskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input className="TaskCardTitleInput"
          type="text" 
          onChange={handleCange} 
          onBlur={handleBlur} 
          value={inputCardTitle} 
          autoFocus
          maxLength="10"          
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  )
};

import React, { useCallback, useState } from 'react';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './TaskCardDeleteButton';
import { TaskAddInput } from './TaskAddInput';
import { Tasks } from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({ 
  taskCardsList, 
  setTaskCardsList, 
  taskCard, 
  index 
}) => {
  const [inputText, setInputText] = useState("")
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div 
        className='taskCard' 
        ref={provided.innerRef}
        {...provided.draggableProps}
        >
        <div 
          className='taskCardTitleAndTaskCardButtonArea'
          {...provided.dragHandleProps}
        >
          <TaskCardTitle />
          <TaskCardDeleteButton
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
            taskCard={taskCard}
          />
        </div>
        <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
        />
        <Tasks inputText={inputText} 
        taskList={taskList} 
        setTaskList={setTaskList}
        />
      </div>
      )}
    </Draggable>
  )
};
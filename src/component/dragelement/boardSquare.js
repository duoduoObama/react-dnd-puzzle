import React from 'react';
import Square from './square';
import { canMoveKnight, moveKnight } from './game';
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';

const squareTarget = {
  canDrop(props) {
    return canMoveKnight(props.x, props.y);
  },

  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function BoardSquare({ x, y, connectDropTarget, isOver, canDrop, children }) {
  const black = (x + y) % 2 === 1;

  function renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

  return connectDropTarget(
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <Square black={black}>
        {children}
      </Square>
      {isOver && !canDrop && this.renderOverlay('red')}
      {!isOver && canDrop && this.renderOverlay('yellow')}
      {isOver && canDrop && this.renderOverlay('green')}
    </div>
  );
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
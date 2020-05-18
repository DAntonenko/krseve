import * as React from 'react';
import './message.scss';

export interface IMessageProps {
 picture: string;
 text: string;
 additionalText?: string;
 className?: string;
}

export const Message = (props: IMessageProps)  => (
  <div className={`message ${props.className}`}>
    <div className={`message__picture message__picture--${props.picture}`} />
    <p className='message__text'>{props.text}</p>
    {props.additionalText &&
      <p className='message__additional-text subtitle'>{props.additionalText}</p>
    }
  </div>
)

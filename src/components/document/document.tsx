import * as React from 'react';
import './document.scss';

export interface IDocumentProps {
 name: string;
 type: string;
 size: string;
}

export const Document = (props: IDocumentProps)  => (
  <div className='document'>
    <div className={`document__icon document__icon--${props.type}`} />
    <div className='document__info'>
      <p className='document__info-name'>{props.name}</p>
      <p className='document__info-data subtitle'>
        {props.type}, {props.size}
      </p>
    </div>
  </div>
)

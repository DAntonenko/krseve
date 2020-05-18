import * as React from 'react';
import './document.scss';

export interface IDocumentProps {
  href: string;
  name: string;
  type: string;
  size: string;
}

export const Document = (props: IDocumentProps)  => (
  <a
    className='document'
    href={props.href}
  >
    <div className={`document__icon document__icon--${props.type}`} />
    <div className='document__info'>
      <p className='document__info-name'>{props.name}</p>
      <p className='document__info-data subtitle'>
        {props.type}, {props.size}
      </p>
    </div>
  </a>
)

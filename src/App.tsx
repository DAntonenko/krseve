import React from 'react';
import './App.css';
import { Document } from '../src/components/document/document';
import { Dropdown } from './components/dropdown/dropdown';
import { Message } from './components/message/message';

function App() {
  return (
    <div className='App'>
      <h2>Document</h2>
      <Document
        name='Схема павильона'
        type='pdf'
        size='3 МБ'
      />
      <h2>Dropdown</h2>
      <Dropdown
        options={[
          {name: 'Скачать документы'},
          {name: 'Согласовать субподрятчика', isDisabled: true},
          {name: 'Задать вопрос менеджеру'},
        ]}
        className='dropdown'
      />
      <h2>Message</h2>
      <Message
        picture='binoculars'
        text='Комерческое предложение отправлено'
        additionalText='О приеме заявок на участие в закупочной процедуре вам придет сообщение на почту.'
      />
    </div>
  );
}

export default App;

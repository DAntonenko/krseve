import React from 'react';
import './App.scss';
import { Document } from '../src/components/document/document';
import { Dropdown } from './components/dropdown/dropdown';
import { Message } from './components/message/message';
import { DropdownIcon } from './components/dropdown-icon/dropdown-icon';
import { Table } from './components/table/table';

function App() {
  return (
    <div className='App'>
      <h2>Document</h2>
      <Document
        href='#'
        name='Схема павильона'
        type='pdf'
        size='3 МБ'
      />
      <h2>Dropdown</h2>
      <Dropdown
        options={[
          {name: 'Скачать документы'},
          {name: 'Согласовать субподрядчика', isDisabled: true},
          {name: 'Задать вопрос менеджеру'},
        ]}
        className='dropdown'
      >
        <DropdownIcon/>
      </Dropdown>
      <h2>Message</h2>
      <Message
        className='width-50'
        picture='binoculars'
        text='Коммерческое предложение отправлено'
        additionalText='О приеме заявок на участие в закупочной процедуре вам придет сообщение на почту.'
      />
      <h2>Table</h2>
      <Table />
    </div>
  );
}

export default App;

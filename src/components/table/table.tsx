import * as React from 'react';
import './table.scss';

export interface ITableProps {
 
}

export const Table = (props: ITableProps)  => (
  <div className='table'>
    <table>
      {/* <colgroup>
      </colgroup> */}
      <thead>
        <tr  className='table__header'>
          <th className='table__header-cell'>Услуга</th>
          <th className='table__header-cell'>Объём</th>
          <th className='table__header-cell'>
            Общая стоимость, ₽
            <p className='table__header-note'>Без учета НДС</p>
          </th>
          <th className='table__header-cell'>
            Цена за единицу, ₽
            <p className='table__header-note'>Без учета НДС</p>
          </th>
          <th className='table__header-cell'>
            Сумма, которую оплачивает РЭЦ, ₽
            <p className='table__header-note'>Без учета НДС</p>
          </th>
          <th className='table__header-cell'>
            Экспоненты СМСП, ₽
            <p className='table__header-note'>Без учета НДС</p>
          </th>
          <th className='table__header-cell'>
            Экспоненты не СМСП, ₽
            <p className='table__header-note'>Без учета НДС</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='table__cell'>
            <p className='table__item-number'>2.1</p>
            <p className='table__item-name'>
              Услуги по разработке дизайн-проекта выставочного стенда, в соответвиии
              с противопожарными требованиями и техническими условиями участия,
              установленными организатором выставки
            </p>
          </td>
        </tr>
        <tr>
          <td className='table__cell'>
            <p className='table__item-number table__item-number--sublist-level-2'>2.1.1</p>
            <p className='table__item-name'>
              Пакет улуг для <a>Анастасия Романова</a>
            </p>
          </td>
        </tr>
        <tr>
          <td className='table__cell'>
            <p className='table__item-number table__item-number--sublist-level-2'>2.1.1.1</p>
            <p className='table__item-name'>
              Стеновые панели для стендов и декоративных элементов (пилоны) 2 кв м
            </p>
          </td>
          <td>104 компл</td>
          <td>какой-то инпут</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
        <tr>
          <td className='table__cell'>
            <p className='table__item-number'>2.1.1.2</p>
            <p className='table__item-name'>
              Подиум для стенда 2 кв м с напольным покрытием (ламинат и ковролин)
            </p>
          </td>
          <td>104 компл</td>
          <td>какой-то инпут</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
          <td>1000</td>
        </tr>
      </tbody>
    </table>
  </div>
)

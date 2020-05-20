import * as React from 'react';
import './table.scss';

export const Table = ()  => (
  <div className='outer'>
    <div className='table fixed'>
      <table>
        <colgroup>
          <col style={{width: '500px'}} />
        </colgroup>
        <thead className='casting-shadow'>
        <tr className='table__header'>
          <th className='table__header-cell'>Услуга</th>
        </tr>
        </thead>
        <tbody className='casting-shadow'>
        <tr>
          <td className='table__cell'>
            <ol className='list__level1'>
              <li>2.1 Услуги по разработке дизайн-проекта выставочного стенда, в соответвиие с противопожарными требованиями и техническими условиями участия, установленными организатором выставки</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td className='table__cell'>
            <ol className='list__level2'>
              <li>2.1.1 Подготовка файлов художественного оформления, вавода лекал и трафаретов</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td className='table__cell'>
            <ol className='list__level3'>
              <li>2.1.1.1 Подготовка файлов художественного оформления, вавода лекал и трафаретов</li>
            </ol>
          </td>
        </tr>
        <tr>
          <td className='table__cell'>
            <ol className='list__level3'>
              <li>2.1.1.2 Подготовка файлов художественного оформления, вавода лекал и трафаретов</li>
            </ol>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div className='table scrolled'>
      <table>
        <colgroup>
          {/* Чтобы таблица вписалась в экран, нужно оставить хотя бы одну колонку без размера.
          Если требуется прокрутка, то у всех колонок должен стоять размер по контенту */}
          <col style={{width: '500px'}} />
          <col style={{width: '100px'}} />
          <col style={{width: '209px'}} />
          <col style={{width: '221px'}} />
          <col style={{width: '349px'}} />
          <col style={{width: '210px'}} />
          <col style={{width: '234px'}} />
        </colgroup>
        <thead>
        <tr className='table__header'>
          <th className='table__header-cell'>Услуга</th>
          <th className='table__header-cell'>Объём</th>
          <th className='table__header-cell txt-right'>
            Общая стоимость, ₽
            <div className='subtitle table__header-note'>Без учета НДС</div>
          </th>
          <th className='table__header-cell txt-right'>
            Цена за единицу, ₽
            <div className='subtitle table__header-note'>Без учета НДС</div>
          </th>
          <th className='table__header-cell txt-right'>
            Сумма, которую оплачивает РЭЦ, ₽
            <div className='subtitle table__header-note'>Без учета НДС</div>
          </th>
          <th className='table__header-cell txt-right'>
            Экспоненты СМСП, ₽
            <div className='subtitle table__header-note'>Без учета НДС</div>
          </th>
          <th className='table__header-cell txt-right'>
            Экспоненты не СМСП, ₽
            <div className='subtitle table__header-note'>Без учета НДС</div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className='table__cell'>
            <ol className='list__level1'>
              <li>2.1 Услуги по разработке дизайн-проекта выставочного стенда, в соответвиие с противопожарными требованиями и техническими условиями участия, установленными организатором выставки</li>
            </ol>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='table__cell'>
            <ol className='list__level2'>
              <li>2.1.1 Подготовка файлов художественного оформления, вавода лекал и трафаретов</li>
            </ol>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className='table__cell'>
            <ol className='list__level3'>
              <li>2.1.1.1 Подготовка файлов художественного оформления, вавода лекал и трафаретов</li>
            </ol>
          </td>
          <td>104 компл</td>
          <td className='txt-right'>2 500 RUB</td>
          <td className='txt-right'>1000</td>
          <td className='txt-right'>1000</td>
          <td className='txt-right'>1000</td>
          <td className='txt-right'>1000</td>
        </tr>
        <tr>
          <td className='table__cell'>
            <ol className='list__level3'>
              <li>2.1.1.2 Подготовка файлов художественного оформления, вавода лекал и трафаретов</li>
            </ol>
          </td>
          <td>104 компл</td>
          <td className='txt-right'>2 500 RUB</td>
          <td className='txt-right'>1000</td>
          <td className='txt-right'>1000</td>
          <td className='txt-right'>1000</td>
          <td className='txt-right'>1000</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

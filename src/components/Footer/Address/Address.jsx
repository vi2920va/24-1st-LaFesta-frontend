import React from 'react';
import ADDRESS_DATA from './data/ADDRESS_DATA';
import './Address.scss';

function Address() {
  return (
    <section className="address">
      {ADDRESS_DATA.map(data => (
        <div key={data.id} className={`address__${data.name}`}>
          {data.description.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
      ))}
    </section>
  )
}
export default Address;
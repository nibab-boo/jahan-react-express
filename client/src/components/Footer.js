/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLanContext } from './LanguageProvider';

const Footer = () => {
  
  const json = useLanContext();
  const footer = json.footer;
  console.log(json);
  console.log(footer)

  return (
    <div className='main-footer' style={{background: "#8E3C1D"}}>
      <h4 className='nav-jahan'>{footer.name}</h4>
      <div className="footer-box d-flex justify-content-evenly">
        { footer.subList.map((list, index) => {
          
          return (

            <div className="footer-name" key={index}>
              <h5 className='nav-jahan'>{list.name}</h5>
              <ul>
                {list.items.map((item, i) => {
                  return <li key={i}><a href={`${item.link}`}>{item.item}</a></li>
                } )}
                {/* <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li> */}
              </ul>
            </div>
          )
          })
        }
        {/* <div className="footer-order">
          <h5 className='nav-jahan'>Order</h5>
          <ul>
            <li><a href="#tel:0489155644">Phone</a></li>
            <li><a href="#">Uber!</a></li>
            <li><a href="#">Demaekan</a></li>
          </ul>
        </div>
        <div className="footer-reserve">
          <h5 className='nav-jahan'>Reservations</h5>
          <ul>
            <li><a href="#tel:0489155644">Phone</a></li>
            <li><a href="#">Hotpepper!</a></li>
            <li><a href="#">Yahooooo!</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
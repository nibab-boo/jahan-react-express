/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLanContext } from './LanguageProvider';

const Footer = () => {
  const json = useLanContext();
  const footer = json.footer;
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
              </ul>
            </div>
          )
          })
        }
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const Sides = ({ sides }) => {
  return (
    <>
      <Tabs defaultActiveKey="Tandoori" id="menu-sub-tab" className="mb-3">
        {
          sides.map((sideType) => (
            <Tab eventKey={sideType.name} title={sideType.name}>
              <div className='food-box'>
                { 
                  sideType.items.map((side) => (

                    <div className="food-card">
                      <img src={side.image} alt={`${side.name}`} />
                      <div className="set-card">
                        <h4 className="food-name">{side.name}</h4>
                        <p className="food-info">{side.description}</p>
                        <p className="food-info price">{side.price}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </Tab>
          ))
        }
      </Tabs>
      {/* <Tabs defaultActiveKey="Tandoori" id="menu-sub-tab" className="mb-3">
        <Tab eventKey="Tandoori" title="Tandoori">
          <div className='food-box'>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Lorem, od doloremque nesciunt commodi numquam amet nihil. Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Salad" title="Salad">
          <div className='food-box'>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Lorem, od doloremque nesciunt commodi numquam amet nihil. Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Appetizer" title="Appetizer">
          <div className='food-box'>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <img src={cheeseNan} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Lorem, od doloremque nesciunt commodi numquam amet nihil. Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs> */}
    </>
  );
};

export default Sides;
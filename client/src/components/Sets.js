import React from 'react';

import { Tabs, Tab } from  'react-bootstrap'

const Sets = ({ sets }) => {
  return (
    <>
      <Tabs defaultActiveKey={sets[0].name} id="menu-sub-tab" className="mb-3">
        {sets.map( (setType) => (
          <Tab eventKey={setType.name} title={setType.name}>

            <div className="choice-curry">
              <h5>Choice Curries</h5>
              {setType.choices} 
            </div>
            <div className={`sets-section ${setType.name}`}>
              { setType.items.map((set) => (
                <div className="set-card shadow">
                  <h4 className="food-name">{set.name}</h4>
                  <p className="food-info">{set.description}</p>
                  <p className="food-info price">{set.price}</p>
                </div>
              ))}
            </div>
          
          </Tab>
          ))}
      </Tabs>
    {/* // <Tabs defaultActiveKey="Lunch" id="menu-sub-tab" className="mb-3">
    //   <Tab eventKey="Lunch" title="Lunch">
    //     <div className="choice-curry">
    //       <h5>Choice Curries</h5>
    //       Chicken, Sag Chicken, Mutton, Keema, Egg, Veg,Sag Alu, Dal. 
    //     </div>
    //     <div className="sets-section lunch">
    //       <div className="set-card shadow">
    //         <h4 className="food-name">A Set</h4>
    //         <p className="food-info">Salad, dal curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$680</p>
    //       </div>
    //         <div className="set-card shadow">
    //         <h4 className="food-name">B Set</h4>
    //         <p className="food-info">Salad, a choice curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$780</p>
    //       </div>
    //       <div className="set-card shadow">
    //         <h4 className="food-name">C Set</h4>
    //         <p className="food-info">Salad with chicken Tikka(2p), choice curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$890</p>
    //       </div>
    //       <div className="set-card shadow">
    //         <h4 className="food-name">D Set</h4>
    //         <p className="food-info">Salad with a Seekh-Kabab and malai Tikka, dal curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$1150</p>
    //       </div>
    //       <div className="set-card shadow">
    //         <h4 className="food-name">Jahan Lunch Set</h4>
    //         <p className="food-info">Salad with malai Tikka(2p), choice curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$920</p>
    //       </div>
    //       <div className="set-card shadow">
    //         <h4 className="food-name">2 curry Set</h4>
    //         <p className="food-info">Salad with chicken tikka and Tandori Prawn, today's special curry and choice curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$980</p>
    //       </div>
    //     </div>
    //   </Tab>
    //   <Tab eventKey="Dinner" title="Dinner">
    //     <div className="choice-curry">
    //       Chicken, Sag Chicken, Mutton, Keema, Egg, Veg,Sag Alu, Dal, Sag Egg. 
    //     </div>
    //     <div className="sets-section dinner">
    //       <div className="set-card shadow">
    //         <h4 className="food-name">Dinner Set</h4>
    //         <p className="food-info">Salad, choice curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$1130</p>
    //       </div><div className="set-card shadow">
    //         <h4 className="food-name">Veg Thali</h4>
    //         <p className="food-info">Salad,dal and sag panner curry, nan ,and rice and softdrink</p>
    //         <p className="food-info price">$1250</p>
    //       </div><div className="set-card shadow">
    //         <h4 className="food-name">Chicken Thali</h4>
    //         <p className="food-info">Salad, choice curry and chicken curry, nan and rice and softdrink</p>
    //         <p className="food-info price">$1450</p>
    //       </div><div className="set-card shadow">
    //         <h4 className="food-name">Jahan Set</h4>
    //         <p className="food-info">Salad with tandori chicken and Seekh-Kabab, choice curry, nan/rice and softdrink</p>
    //         <p className="food-info price">$1600</p>
    //       </div><div className="set-card shadow">
    //         <h4 className="food-name">Jodi Set</h4>
    //         <p className="food-info">Salad with 2(malai-tikka, Seekh-Kabab and tandori Prawn),2 choice curry, nan/rice/cheese-nan(1) and softdrink</p>
    //         <p className="food-info price">$3500</p>
    //       </div><div className="set-card shadow">
    //         <h4 className="food-name">Beer Set</h4>
    //         <p className="food-info">Beer with Tandori Chicken and papad</p>
    //         <p className="food-info price">$730</p>
    //       </div><div className="set-card shadow">
    //         <h4 className="food-name">Wine Set</h4>
    //         <p className="food-info">Glass of wine with chicken tikka, malai-tikka and Seekh-Kabab and papad</p>
    //         <p className="food-info price">$750</p>
    //       </div>
    //     </div>
    //   </Tab>
    // </Tabs> */}

    
    </>
  );
};

export default Sets;
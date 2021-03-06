import React from 'react';

const Drink = ({ drinks }) => {
  return (
    <div className="food-box drink">
      <div className="row w-100">
          {
            drinks.map((drinkList, index) => (
              <div className="col-md-6 col-12 px-5" key={index}>
                <h4>
                  {drinkList.name}
                </h4>
                {
                  drinkList.items.map((drink,i) => (
                    <div key={i} className="d-flex justify-content-between border-bottom  border-dark mb-3">
                      <span> {drink.name} </span>
                      <span>{drink.price}</span>
                    </div>
                  ))
                }
              </div>
            ))  
          }
      </div>
    </div>
  )
};

export default Drink;

import React from 'react';
import Food from './Food';

const FoodContainer = () => {
  const ginaList = [
    {
      id : 1,
      name :"햄버거"
    },
    {
      id : 2,
      name :"피자"
    },
    {
      id : 3,
      name :"만두"
    },
    {
      id : 4,
      name :"뼈해장국"
    },
    {
      id : 5,
      name :"삼겹살"
    }
  ]

  const foodList = ginaList.map(({id, name}, i) => <Food key={i} id={id} name={name}/>);
  
  return (
    <ul>
      {foodList}
    </ul>
  );
};

export default FoodContainer;
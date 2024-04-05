import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const MenuItem = ({ image, name, price }) => {
  return (
    <div className='menuItem'>
      <div className='menuItemBackground' style={{ backgroundImage: `url(${image})` }}></div> 
      <h1>{name}</h1>
      <p><CurrencyRupeeIcon/>{price}</p>
    </div>
  );
};

export default MenuItem;

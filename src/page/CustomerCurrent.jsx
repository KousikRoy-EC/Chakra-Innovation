import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerCurrent = () => {
  const { customerType } = useParams();
  return (
    <div>{customerType}</div>
  )
}

export default CustomerCurrent;
import React from 'react';
import { Card as CardMUI } from '@material-ui/core';
import './style.css';

const Card = ({ children }) => <CardMUI className='card'>{children}</CardMUI>;

export default Card;

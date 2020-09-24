import React from 'react';
import { Card as CardMUI } from '@material-ui/core';
import './style.css';

const Header = ({ children }) => <CardMUI className='header'>{children}</CardMUI>;

export default Header;

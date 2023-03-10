import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from '../pages/Home';

const container = document.getElementById('react-home-page');
const root = createRoot(container!);
root.render(<HomePage />);
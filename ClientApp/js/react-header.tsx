import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header'

const container = document.getElementById('react-header');
const root = createRoot(container!);
root.render(<Header />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createClient } from '@supabase/supabase-js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const supabase = createClient('https://rlfjoylsgblvanhvfcdm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsZmpveWxzZ2JsdmFuaHZmY2RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MjEzNzAsImV4cCI6MTk5NDE5NzM3MH0.n1MKOGPb2ZJqUrUA2UPb2bvdWgCByKV3y-moXL1z1Q0')

async function getCountries() {
  const countries = await supabase.from('countries').select()
  console.log(countries)
}

getCountries()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

window.onload = () => {
  'use strick';
  
  if('serviceWorker' in navigator)  {
    navigator.serviceWorker.register('/sw.js');
    }
   }

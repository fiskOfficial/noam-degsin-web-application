import React from 'react';
import noamsLogo from './noamsLogo.png'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='navigation'>
      <div className='leftNav'>
          <div className='shoppingBagIconC'><img alt='shopping bag icon' className='shoppingBagIcon' src='https://static.vecteezy.com/system/resources/previews/010/576/761/original/shopping-bag-icon-logo-illustration-grocery-bag-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg'/></div>
          <div>קצת עליי</div>
          <div>אני אחלה חמודה</div>
          <div>אוהבת עיצוב</div>
          <div>את אחלה</div>
          <div>ואת חמודה</div>
          <div>יאללה יאלהה</div>
          </div>
        <img className='mainLogoHomeBtn' src={noamsLogo} alt='Main Logo'/>
      </div>
    </div>
  );
}

export default App;


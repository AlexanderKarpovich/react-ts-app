import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card width='200px' height='200px' variant={CardVariant.outlined} 
        onClick={(number, action) => 
          { 
            alert('click' + number); 
            action(++number);
          }}>
        <button>Кнопка</button>
      </Card>
    </div>
  );
}

export default App;


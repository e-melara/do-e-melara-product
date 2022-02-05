import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ProductCard } from '../src';

const App = () => {
  const product = {
    id: '1',
    title: 'Product Card',
  };
  return (
    <>
      <ProductCard product={product} initialValue={{ count: 4, maxCount: 10 }}>
        {({ reset, counter, isMaxCountedReached, incrementBy }) => (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

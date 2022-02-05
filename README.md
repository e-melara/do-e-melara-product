# Modulo de prueba para NPM

## Este es ejemplo de como subir mis propios paquetes a npm

para poder llamar el component

```js
import ProductCard from 'do-e-melara-product'; // forma uno
import ProductCard, {
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'do-e-melara-component'; // forma dos
```

Para poder utilizar el component

```js
<ProductCard
  product={product}
  initialValue={{ count: 4, maxCount: 10 }}
>
  {({ reset, counter, isMaxCountedReached, incrementBy }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```

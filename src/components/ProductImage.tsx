import React, { useContext } from 'react'

import noImage from 'src/assets/no-image.jpg'
import styles from 'src/styles/styles.module.css'

import { ProductContext } from '../interfaces/interfaces'

export interface Props {
  img?: string
  className?: string
}

export const ProductImage = ({ img, className }: Props) => {
  const { product } = useContext(ProductContext)
  let imgToShow: string = noImage

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt='imgs product'
    />
  )
}

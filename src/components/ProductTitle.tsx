import React, { useContext } from 'react'

import styles from 'src/styles/styles.module.css'
import { ProductContext } from '../interfaces/interfaces'

export interface Props {
  className?: string
  title?: string
}

export const ProductTitle = ({ title, className }: Props) => {
  let titleToProps: string = 'No Title'
  const { product } = useContext(ProductContext)

  if (title) {
    titleToProps = title
  } else if (product.title) {
    titleToProps = product.title
  }

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {titleToProps}
    </span>
  )
}

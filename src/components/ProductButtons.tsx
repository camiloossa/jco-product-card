import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}


export const ProductButtons = ( { className, style }: Props ) => {

  const { increaseBy, counter, maxCount } = useContext( ProductContext );

  const inMaxReach = useCallback( () => {
    if ( !maxCount ) return false;

    return ( counter === maxCount );

    //  Forma resumida de este callback seria esta
    // return !!maxCount && counter === maxCount;

  }, [ counter, maxCount ] );

  // TODO: inMaxReach = useCallback [count, maxCount] true si el count = maxCount y un false si no lo es

  return (
    <div className={ `${ styles.buttonsContainer } ${ className }` } style={ style }>
      <button className={ styles.buttonMinus } onClick={ () => increaseBy( -1 ) }> - </button>

      <div className={ styles.countLabel }>{ counter }</div>

      <button className={ `${styles.buttonAdd} ${ (inMaxReach()) ? styles.disabled : '' }` } onClick={ () => increaseBy( +1 ) } disabled={ inMaxReach() }>+</button>
    </div>
  );
};
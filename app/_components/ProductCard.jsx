import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiExpander } from 'react-icons/gi';
import { CgUnavailable } from 'react-icons/cg';

const ProductCard = ({ product, handleSelectFilter }) => {
  const { id, image, name, category, active } = product;

  return (
    <div className={`shop-item h-100 ${active === 0 ? 'no-touch' : ''}`}>
      <div className={`product-thumb h-75 ${active === 0 ? 'low-opacity' : ''}`}>
        <Image src={image} alt={`${name} img`} width={400} height={400} objectFit="cover"  />
        {active === 1 ? (
          <Link href={`/product/${id}`} passHref>
              <button className="add-to-cart btn"><GiExpander />Quick Look</button>
          </Link>
        ) : (
          <button className="add-to-cart btn"><CgUnavailable />Not Available</button>
        )}
      </div>
      <div className="shop-item-bottom justify-content-between align-items-center">
        <div className={`content ${active === 0 ? 'low-opacity' : ''}`}>
          <h4 className='mb-0'>
            <Link href={`/product/${id}`} passHref>
              {name}
            </Link>
          </h4>
        </div>
        <div className="price cat" onClick={() => handleSelectFilter(category, -1)}>{category}</div>
      </div>
    </div>
  );
};

export default ProductCard;

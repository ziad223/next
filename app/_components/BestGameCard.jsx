import React from 'react'
import Link from 'next/link'
import { IoIosStar } from "react-icons/io";
import { formatPrice } from '../../utils/formatPrice';
import Image from 'next/image';

const BestGameCard = ({ img, name, price }) => {
  return (
    <div className="best-game-item h-100">
      <div className="best-game-thumb">
        <Link href="">
          <Image src={img} alt={name} width={200} height={100} />
        </Link>
      </div>
      <div className="best-game-content">
        <h6><Link href=''>{name}</Link></h6>
        <div className="rating">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <span className="price">${formatPrice(price)}</span>
      </div>
    </div>
  );
};

export default BestGameCard;

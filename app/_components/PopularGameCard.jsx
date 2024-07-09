'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useAuth from '../../Hooks/useAuth'
import { MdOutlineStar } from "react-icons/md"
import { GiChargedArrow } from "react-icons/gi"
import { CgUnavailable } from "react-icons/cg"
import { RxOpenInNewWindow } from "react-icons/rx"
import { PiHandDepositLight } from "react-icons/pi"
import { formatPrice } from '../../utils/formatPrice'
import GatewayModal from './GatewayModal'

const PopularGameCard = ({ cartData, payment = false, modalId, chargeGame = false, image = null, marginB = true }) => {
    const { id, location, img, image: imag, photo, name, title, number, fee, price, active, quantity } = cartData
    const nameParts = (name || title)?.split(' ')
    const firstName = nameParts?.slice(0, -1).join(' ')
    const lastName = nameParts?.slice(nameParts.length - 1).join(' ')
    const { setChargeTitle, setUnitId, setUnitQty } = useAuth()

    const handleClick = () => {
        if (active === 0) {
            return
        }
        setUnitId(id)
        setUnitQty(quantity)
        setChargeTitle(title)
    }

    return (
        <>
            <div className={`popular-game-item cursor ${marginB === false ? 'mb-0' : ''} ${active === 0 ? 'no-touch' : ''}`}>
                <div className="popular-game-thumb h-100">
                    {chargeGame ?
                        <Image className='opacity-50' src={image } alt={name} width={200} height={180} />
                        :
                        <Link href={location || '#'}>
                            <Image src={img || photo || imag } width={200} height={180} alt={name} />
                        </Link>
                    }
                </div>
                <div className="popular-game-content">
                    <h5><MdOutlineStar className='me-1' />{firstName} <span>{lastName}</span></h5>
                </div>
                <div className="popular-game-overlay">
                    {chargeGame ?
                        <h6 className='text-center'>{title} <span>{formatPrice(price)}</span></h6>
                        : null
                    }
                    {payment ?
                        <span className="cart" data-bs-target={`#${modalId}`} data-bs-toggle="modal"><PiHandDepositLight /></span>
                        : chargeGame ?
                            <span
                                className={`cart custom-rotate ${active === 0 ? 'disabled' : 'cursor'}`}
                                data-bs-toggle={active !== 0 ? 'modal' : ''}
                                data-bs-target={active !== 0 ? '#playerDetailsModal' : ''}
                                onClick={handleClick}
                            >
                                {active === 0 ? <CgUnavailable /> : <GiChargedArrow />}
                            </span>
                            :
                            active === 1 ?
                                <Link href={`/product/${id}`} className='cart cursor'><RxOpenInNewWindow /></Link>
                                :
                                <span className='cart cursor'><CgUnavailable /></span>
                    }
                </div>
            </div>
            <GatewayModal gateway_id={id} modalId={modalId} name={name} number={number} fee={fee} />
        </>
    )
}

export default PopularGameCard

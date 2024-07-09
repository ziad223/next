'use client'
import React, { useRef, useState } from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoMdClose } from "react-icons/io";
import { AiOutlineCopy } from "react-icons/ai";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { formatPrice } from '../../utils/formatPrice';
// import useMutationData from '../../Hooks/useMutationData';
import BASE_URL from '../../utils/apiConfig';
import { GiSpinningBlades } from 'react-icons/gi';
import useAuth from '../../Hooks/useAuth';

const GatewayModal = ({ gateway_id, modalId, name, number, fee }) => {
    const [isLoading , setIsLoading] = useState(false);
    const {setChargeDone, setChargeFail} = useAuth()
    const [copied, setCopied] = useState(false);
    const [invoiceLabel, setInvoiceLabel] = useState('Attach your Transfer receipt');
    const fileInput = useRef(null);

    // const handleSuccess = (data) => {
    //     console.log(data)
    //     formik.resetForm();
    //     setInvoiceLabel('Attach your Transfer receipt');
    //     if (fileInput.current) {
    //         fileInput.current.value = null;
    //     }
    //     setChargeDone(true)
    // };
    // const handleError = (error) => {
    //     console.error(error);
    //     formik.resetForm();
    //     setInvoiceLabel('Attach your Transfer receipt');
    //     if (fileInput.current) {
    //         fileInput.current.value = null;
    //     }
    //     setChargeFail(true)
    // };

    // const { mutate: rechargeBalance, isLoading } = useMutationData(
    //     `${BASE_URL}/payment/orders/store`,
    //     'POST',
    //     handleSuccess,
    //     handleError,
    // );

    const handleRecharge = (values) => {
        const { balance} = values;
        const formData = new FormData();
        formData.append('gateway_id', gateway_id);
        formData.append('balance', balance);
        formData.append('invoice', fileInput.current.files[0]);
        rechargeBalance(formData);
    }

    const formik = useFormik({
        initialValues: {
            balance: '',
            invoice: '',
        },
        validationSchema: Yup.object({
            balance: Yup.number()
                .required('Amount is required')
                .min(1, 'Amount must be at least 1'),
            invoice: Yup.mixed()
                .required('Transfer receipt is required')
                .test('fileSize', 'File too large', value => value && value.size <= 5 * 1024 * 1024)
                .test('fileFormat', 'Unsupported Format', value => value && ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'].includes(value.type)),
        }),
        onSubmit: handleRecharge
    });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        formik.setFieldValue('invoice', file);
        setInvoiceLabel(file?.name || 'Attach your Transfer receipt');
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(number);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy number:', err);
        } finally {
            setTimeout(() => setCopied(false), 5000);
        }
    };

    return (
        <div className='modal fade accountModal gatewayModal' id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <button type="button" className="btn-close account-btn" data-bs-dismiss="modal" aria-label="Close">
                        <IoMdClose />
                    </button>
                    <div className="modal-body p-0">
                        <div className="account-form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title">
                                        <h3 className='title'>{name} <span>.</span></h3>
                                    </div>
                                </div>
                                <div className="col-12 inPut row ">
                                    <div className="details col-6 d-flex align-items-center justify-content-between">
                                        <div>
                                            {number}
                                        </div>
                                        <div className='icon' onClick={handleCopy}>
                                            {copied ? <RiCheckboxMultipleLine /> : <AiOutlineCopy />}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 inPut">
                                    <div className="details">
                                        Please transfer the amount to be transferred to the wallet
                                        Make a report on the amount and download the full image of the notice. <br />
                                        Estimated time to add balance: 1-15 minutes
                                    </div>
                                </div>
                                <div className="col-12 inPut">
                                    <strong className='details fw-semibold'>Transfer fee: {fee}%</strong>
                                </div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="col-12 inPut">
                                        <input
                                            type="number"
                                            className='num-input'
                                            placeholder='The Amount you desire to add'
                                            name="balance"
                                            value={formik.values.balance}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            autoFocus
                                        />
                                        {formik.touched.balance && formik.errors.balance ?
                                            <div className="error">{formik.errors.balance}</div>
                                            :
                                            null
                                        }
                                    </div>
                                    <div className="col-12 inPut">
                                        <input
                                            type="number"
                                            className='num-input'
                                            placeholder='The Amount that will be added to your wallet'
                                            value={formik.values.balance ? formatPrice(formik.values.balance - (formik.values.balance * fee / 100)) : 'The Amount that will be added to your wallet'}
                                            readOnly
                                        />
                                    </div>
                                    <div className='col-12 inPut d-flex align-items-center'>
                                        <div>
                                            <label htmlFor={`invoice-${modalId}`} className='icon fs-6 details'>
                                                <IoDocumentAttachOutline className='me-3' />
                                                <span>
                                                    {invoiceLabel}
                                                </span>
                                            </label>
                                            <input
                                                type="file"
                                                ref={fileInput}
                                                name="invoice"
                                                id={`invoice-${modalId}`}
                                                className='d-none'
                                                onChange={(e) => {
                                                    handleFileChange(e);
                                                }}
                                            />
                                            {formik.touched.invoice || formik.errors.invoice ?
                                                <div className="error mt-1">{formik.errors.invoice}</div>
                                                :
                                                null
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        {isLoading? 
                                            <button className='btn w-100'>
                                                <GiSpinningBlades className='spin'/>
                                            </button> 
                                            : 
                                            <button 
                                                type="submit" 
                                                className="btn w-100" 
                                                disabled={!(formik.isValid && formik.dirty)}
                                            >
                                                Add Balance
                                            </button>
                                
                            }  
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GatewayModal

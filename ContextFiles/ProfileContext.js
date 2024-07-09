
'use client'
import React, { createContext, useEffect, useState } from 'react';
export const ProfileContext = createContext();
export const ProfileProvider = ({ children }) => {
    const [name, setName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [country, setCountry] = useState(null)
    const [dialCode, setDialCode] = useState(null);
    const [email, setEmail] = useState(null);
    const [img, setImg] = useState(null);
    const [navigateTo, setNavigateTo] = useState(null);
    const [sessionId, setSessionId] = useState(null);
    const [token, setToken] = useState(null);
    const [rememberAcc, setRememberAcc] = useState(false);
    const [newMail, setNewMail] = useState('')
    const [oldMail, setOldMail] = useState('')
    const [userData, setUserData] = useState({});
    const [showSecondModal, setShowSecondModal] = useState(false)
    const [showResend, setShowResend] = useState(true)
    const [successMsg, setSuccessMsg] = useState(false)
    const [chargeDone, setChargeDone] = useState(false)
    const [chargeFail, setChargeFail] = useState(false)
    const [chargeTitle, setChargeTitle] = useState(null)
    const [unitId, setUnitId] = useState(false)
    const [unitQty, setUnitQty] = useState(null)
    const [relatedData, setRelatedData] = useState([])
    const updateUserData = (data) => {
        setUserData(data);
        setToken(data?.access_token);
        setImg(data?.user?.avatar);
        setName(data?.user?.name);
        setEmail(data?.user?.email);
        setPhone(data?.user?.phone);
        setUserName(data?.user?.username);
        setCountry(data?.user?.country);
    };
    const checkRemember = (data) => {
        if (rememberAcc) {
            localStorage.setItem('userData', JSON.stringify(data)); 
        }else {
            sessionStorage.setItem('userData', JSON.stringify(data));
        }
    }
    const logIn = (userInfo) => {
        updateUserData(userInfo);
        checkRemember(userInfo)
    };
    const updateProfile = (key, value) => {
        const storedUser = rememberAcc
            ? localStorage.getItem('userData')
            : sessionStorage.getItem('userData');
        const userData = JSON.parse(storedUser);
        userData.user[key] = value;
        checkRemember(userData)
        updateUserData(userData);
    };
    const logOut = () => {
        localStorage.removeItem('userData');
        sessionStorage.removeItem('userData');
        setToken(null);
        setImg(null);
        setName(null);
        setEmail(null);
        setPhone(null);
        setUserName(null);
        setCountry(null)
    };
    useEffect(() => {
        const storedData = localStorage.getItem('userData') || sessionStorage.getItem('userData');
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                updateUserData(parsedData);
            } catch (error) {
                console.error('Error parsing stored user data:', error);
            }
        }
    }, []);
    useEffect(() => {
        if (rememberAcc) {
            localStorage.setItem('userData', JSON.stringify(userData));
        }       
    }, [userData, rememberAcc]);

    return (
        <ProfileContext.Provider
            value={{
                name,
                setName,
                userName,
                setUserName,
                phone,
                setPhone,
                dialCode,
                setDialCode,
                country,
                setCountry,
                email,
                setEmail,
                img,
                setImg,
                navigateTo,
                setNavigateTo,
                logIn,
                logOut,
                sessionId,
                setSessionId,
                token,
                setToken,
                rememberAcc,
                setRememberAcc,
                updateProfile,
                updateUserData,
                newMail,
                setNewMail,
                oldMail,
                setOldMail,
                showSecondModal,
                setShowSecondModal,
                showResend, 
                setShowResend,
                successMsg, 
                setSuccessMsg,
                chargeDone, 
                setChargeDone,
                chargeFail, 
                setChargeFail,
                chargeTitle, 
                setChargeTitle,
                unitId, 
                setUnitId,
                unitQty, 
                setUnitQty,
                relatedData, 
                setRelatedData
            }}
        >
                {children}
        </ProfileContext.Provider>
)};

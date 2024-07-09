import { ProfileContext } from '@/ContextFiles/ProfileContext';
import { useContext } from 'react';
// import { ProfileContext } from '../ContextFiles/ProfileContext';
const useAuth = () => {
    return useContext(ProfileContext)
}
export default useAuth;
import axios from 'axios'
import { useQuery } from 'react-query'
import useAuth from './useAuth'

const useQueryData = (url, method, key, options = {}) => {
    const  token =useAuth()
    const getData = async () => {
        const headers = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        try {
            const response = await axios({
                url: url,
                method: method,
                headers: headers
            });
            return response?.data?.data;
        } catch (error) {
            throw new Error(error?.response?.data || 'An error occurred');
        }
    };
    const {isLoading, isError, data, isFetching, refetch} = useQuery(key, getData, options)
    return {isLoading, isError, isFetching, data, refetch};
}
export default useQueryData

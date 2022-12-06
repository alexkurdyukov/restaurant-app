import react,{useState,useEffect} from 'react'
import { hotelDataTypes } from '../types/types';

function useDebounce(value: any, delay: number){
    const [debouncedValue,setDebouncedValue]  = useState(value);   
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    },[value,delay])

    return debouncedValue;
}


export default useDebounce
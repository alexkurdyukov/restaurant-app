import react,{useState,useEffect} from 'react'
//функция по сути переприсваивает тоже самое значение, 
//но с заданной задержкой при изменении значения value

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
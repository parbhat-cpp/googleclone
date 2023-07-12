import { useEffect, useState } from "react";
import API_KEY from "./keys"

const CONTEXT_KEY = "011f43775251441c3";

function useGoogleSearch(term) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(res => res.json())
                .then(result => {
                    setData(result);
                })
        }
        fetchData();
    }, [term]);

    return { data };

    //     return (


    //     //   <div className="gcse-search"></div>
    //   )
}

export default useGoogleSearch
import fetchData from "../api";
import * as React from "react";
import useAsyncFetch from "./useAsyncFetch";

const useData = () => {

    const{data, status, error, run} = useAsyncFetch({status: "pending"});
    const refetch = () => run(fetchData());

    React.useEffect(() => {
       run(fetchData())
    }, [run]);

    return {
        data,
        status,
        error,
        refetch
    }
}

export default useData;
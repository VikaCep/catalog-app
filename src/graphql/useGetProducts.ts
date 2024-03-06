import { useMemo } from "react";
import { GET_PRODUCTS } from "./queries";
import { useQuery } from "@apollo/client";

interface ProductListOptions {
    take: number
}

const useGetProducts = (options: ProductListOptions) => {
    const { data, loading, error } = useQuery(GET_PRODUCTS, {
        variables: { options },
    });

    const products = useMemo(() => data?.products?.items ?? [], [data]);

    return { loading, error, products };
};

export default useGetProducts;
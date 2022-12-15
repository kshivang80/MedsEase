import { Grid, Box, Center, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Redux-Product/action";
import { store } from "../../Redux/store";
import Filter from "./filterComp/Filter";
import ProductCard from "./ProductCard";


export default function ProductPage() {
    const { data, loading } = useSelector((store) => {
        return {
            data: store.reducer.Productdata,
            loading: store.reducer.isLoading,
        };
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, []);

    console.log(loading)

    return (
        <>
            <Center border="1px solid red">
                <Box display={"flex"} gap="200px">
                    <Filter/>
                    <Grid templateColumns="repeat(3,1fr)" gridGap={20}>
                        {data.products &&
                            data.products.map((elm) => {
                                return (
                                        <div key={elm.productId}>
                   <ProductCard key={elm.id} item={elm}  loading={loading} />
                                        </div>
                                )
                            })}
                    </Grid>
                </Box>
            </Center>
            {/* <Skeleton/> */}
        </>
    );
}

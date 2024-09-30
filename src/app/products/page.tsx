import React from 'react';
import Products from "@/app/products/Products";
import getConfig from "next/config";
import { unstable_noStore as noStore } from 'next/cache';

function Page() {
    noStore();
    const {publicRuntimeConfig} = getConfig();
    const apiUrl = publicRuntimeConfig.NEXT_PUBLIC_API_URL;


    return (
        <>
            <div>Products page</div>
            <h1>Client Environment Variable</h1>
            <p>API URL (Client): {apiUrl}</p>
            <Products/>
        </>
    )
        ;
}

export default Page;

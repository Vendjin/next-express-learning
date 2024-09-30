'use client'
import React from 'react';
import styles from './Products.module.scss'
import Image from "next/image";
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import getConfig from "next/config";

const Products = () => {
    // replace - редирект без возможности вернуться назад
    // push - редирект на другую страницу, но можно вернуться назад
    // const {replace, push} = useRouter()
    // const pathName = usePathname()
    // const queryParams = useSearchParams() // получить данные из query запроса,
    //а если хотим из url к примеру получить просто id так называемый [slug]
    const paramsSlug = useParams<{ slug: string }>()
    console.log('16',paramsSlug.slug)

    // const {publicRuntimeConfig} = getConfig();
    // const apiUrl = publicRuntimeConfig.NEXT_PUBLIC_API_URL;
    //
    // console.log('СЮДА', apiUrl)
    console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);


    return (

        <div className={styles.products}>
            {/*<p>API URL CLIENT: {apiUrl}</p>*/}
            components inside page
            <Image src={'/next.svg'} alt='next logo' width={200} height={50}/>
        </div>
    )
        ;
};

export default Products;
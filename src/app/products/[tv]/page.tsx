import React from 'react';
import {notFound} from "next/navigation";
import {Metadata} from "next";
import getConfig from "next/config";

//статические данные для SEO
const metadata: Metadata = {
    title: 'Products'
}

//генерируемы данные для SEO
// export async function generateMetadata({params}: {params: { slug }}): Promise<Metadata> {
//     const product = await getData(slug)
//     return {title: product.title}
// }


// Это классический вариант SSR и он не оптимизирован
// const fetchData = async () => {
//     //фетч классического SSR
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//         cache: 'no-cache' // SSR
//     });
//
//     return await response.json()
// }

//это уже вариант SSG
// const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//         cache: 'force-cache',
//     });
//
//     return await response.json()
// }

//Это вариант ISR
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        cache: 'force-cache',
        next: {revalidate: 200} // revalidate - перезагрузка данных через секунды
    });

    return await response.json()
}


//серверный компонент переделываем в асинхронный компонент
const Page = async () => {
    const data = await fetchData()
    const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();
    console.log(data)

    const apiUrlServer = serverRuntimeConfig.ROOT_ENV_SERVER;
    console.log('SERVER_VALUE', apiUrlServer)
    const apiUrl = publicRuntimeConfig.NEXT_PUBLIC_API_URL;

    console.log('СЮДА', apiUrl)

    if (!data) notFound()

    return (
        <div>
            Это страница tv Серверным компонентом
            {data ? data.title : ''}

            <p>API URL (Client): {apiUrl}</p>
        </div>
    );
};

export default Page;

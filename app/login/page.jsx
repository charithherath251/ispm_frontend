'use client';

import { useState } from "react";
import { useRouter } from 'next/router';
import ButtonJ from "@/src/component/ButtonJ";

export default function Login(){
    const router = useRouter()
    const name = "ravindu"
    let clickTimes  = 0;

    const [click , setClick] = useState(2);

    const Hclick = () => {
        // setClick(click + 1);
        router.push('/registration')
    }
    return (
        <div className="flex flex-row ">
            <h1 className="text-blue-500 m-2">Login</h1>
            <p className="m-2">{name}</p>
            <ButtonJ/>
        </div>
    )

}
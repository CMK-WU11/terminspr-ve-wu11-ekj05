"use client"

import Image from "next/image";
import background from "../../../public/splash-image.jpg"
import VariableButton from "@/components/VariableButton/VariableButton";
import loginAction from "@/actions/login.js"
import { useActionState, useEffect } from "react";

export default function login(){
    const [formState, fromAction, isPending] = useActionState(loginAction, null)

    useEffect(()=>{
        console.log("Formstate", formState)
    }, [formState])

    return (
        <>
            <Image className="login-background" src={background} height={1000} width={1000} alt="background image"/>
            <div className="login-container">
                <div className="background-decoration"></div>
                <h1>Log ind</h1>
                <form noValidate action={fromAction}>
                    <input type="text" name="username" placeholder="Brugernavn" defaultValue={formState?.formData?.username}/>
                    <span>{formState?.errors?.username?._errors[0]}</span>

                    <input type="password" name="password" placeholder="Adgangskode" defaultValue={formState?.formData?.password}/>
                    <span>{formState?.errors?.password?._errors[0]}</span>

                    <label>
                        <input type="checkbox" name="checkbox"/>
                        <p>Husk mig</p>
                    </label>

                    <VariableButton text={isPending ? "Logger ind..." : "Log ind"} disabled={isPending} type="submit"/>
                    <span>{formState?.error}</span>
                </form>
            </div>
        </>
    )
}
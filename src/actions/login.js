"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

export default async function Login(prevState, formData){
    const username = formData.get("username")
    const password = formData.get("password")
    const checkbox = formData.get("checkbox")
    const schema = z.object({
        username: z.string().min(1, { message: "Du skal angive et brugernavn" }),
        password: z.string().min(1, { message: "Du skal angive et password" }),
    })

    const validate = schema.safeParse({
        username,
        password
    })

    if(!validate.success){
        return {
            formData: {
                username,
                password
            },
            errors: validate?.error?.format()
        }
    }

    try {
        const res = await fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        
        if(res.status === 401){
            return {
                formData: {
                    username,
                    password
                },
                error: "Forkert brugernavn eller password"
            }
        }
        
        const data = await res.json()
        console.log(data)
        const cookieStore = await cookies()
        cookieStore.set("userData", JSON.stringify({
            userId: data.userId,
            userToken: data.token,
            userRole: data.role
        }), { maxAge: checkbox === "on" ? 60 * 60 * 24 : undefined})
    } catch (error) {
        throw new Error(error)
    }
    redirect("/calendar")
}
"use client"

import { useState } from "react"

export default function VariableButton({ text, activityData, userData, clickFunction=false, className="", id="", disabled=false, type="button", token}){
    const [errorMsg, setErrorMsg] = useState("")
    const [statusMsg, setStatusMsg] = useState("")
    const [buttonText, setButtonText] = useState("")
    const [newUserData, setNewUserData] = useState(userData)
    
    async function refreshUserData(){
        const res = await fetch("http://localhost:4000/api/v1/users/" + userData.id, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token
            }
        })
        const updatedUserData = await res.json()
        setNewUserData(updatedUserData)
    }

    async function fetchHandler(){
        if(newUserData.activities.find(activity => activity.id === activityData.id)){
            const res = await fetch("http://localhost:4000/api/v1/users/" + userData.id + "/activities/" + activityData.id, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token
                }
            })

            setErrorMsg("")
            setStatusMsg("Fjernet fra " + activityData.name)
            setButtonText("Tilmeld")
            if(res.ok){
                refreshUserData()
            }
        } else if(newUserData.activities.find(activity => activity.weekday === activityData.weekday)){
            setErrorMsg("Allerede tilmeldt en aktivitet på " + activityData.weekday)
        } else{
            const res = await fetch("http://localhost:4000/api/v1/users/" + userData.id + "/activities/" + activityData.id, {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            
            setErrorMsg("")
            setStatusMsg("Tilmeldt til " + activityData.name)
            setButtonText("Forlad")
            if(res.ok){
                refreshUserData()
            }
        }
    }

    async function clickHandler(){
        if(newUserData.role === "default"){
            if(newUserData.age < activityData.minAge || newUserData.age > activityData.maxAge){
                setErrorMsg("Ikke indenfor aldersgrænsen")
            } else{
                fetchHandler()
            }
        } else{
            fetchHandler()
        }
    }

    return (
        <>
            <button className={"variable-button " + className} type={type} disabled={disabled} id={id} onClick={clickFunction ? clickHandler : null}>
                <p>{buttonText || text}</p>
                <span>{errorMsg || statusMsg}</span>
            </button>
        </>
    )
}
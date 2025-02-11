"use client"

import ActivityCard from "@/components/ActivityCard/ActivityCard"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi"

export default function search(){
    const [activities, setActivities] = useState()
    const [filteredActivities, setFilteredActivities] = useState()
    const [inputValue, setInputValue] = useState("")
    const [noResults, setNoResults] = useState(false)

    useEffect(()=>{
        async function fetchActivities(){
            const res = await fetch("http://localhost:4000/api/v1/activities", {method: "GET"})
            const activitiesData = await res.json()
            console.log(activitiesData)
            setActivities(activitiesData)
        }
        fetchActivities()
    }, [])

    function handleChange(e){
        const value = e.target.value.toString()
        setInputValue(value)

        if(value.trim().length === 0){
            setFilteredActivities()
        } else (
            setFilteredActivities(
                activities.filter((activity)=>(
                    activity.name.toLowerCase().includes(value.toLowerCase().trim())
                ))
            )
        )
        console.log("value", value)
        console.log("filtered activites", filteredActivities)
    }

    useEffect(()=>{
        if(filteredActivities?.length === 0){
            setNoResults(true)
        } else{
            setNoResults(false)
        }
    }, [filteredActivities])

    return (
        <>
            <h1 className="search-heading">Søg</h1>
            <form className="search-form" onSubmit={(e)=>(e.preventDefault())}>
                <FiSearch/>
                <input type="search" onChange={handleChange} value={inputValue}/>
            </form>
            <div className="search-div">
                {filteredActivities?.map((activity)=>(
                    <Link href={"/activities/"+activity.id} key={activity.id}>
                        <ActivityCard activityData={activity}/>
                    </Link>
                ))}
                <span>{noResults ? "Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet." : ""}</span>
            </div>
        </>
    )
}
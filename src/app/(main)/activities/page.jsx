import ActivityCard from "@/components/ActivityCard/ActivityCard"
import Link from "next/link"

export default async function activites(){
    let activitiesData
    
    try {
        const res = await fetch("http://localhost:4000/api/v1/activities", {method: "GET"})
        activitiesData = await res.json()
    } catch (error) {
        throw new Error(error)
    }
    
    return (
        <>
            <h1 className="activites-heading">Aktiviteter</h1>
            <div className="activities-container">
                {activitiesData.map((activity)=>(
                    <Link key={activity.id} href={"/activities/"+activity.id}>
                        <ActivityCard activityData={activity}/>
                    </Link>
                ))}
            </div>
        </>
    )
}
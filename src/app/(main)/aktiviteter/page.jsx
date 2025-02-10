import ActivityCard from "@/components/ActivityCard/ActivityCard"

export default async function aktiviteter(){

    const res = await fetch("http://localhost:4000/api/v1/activities", {method: "GET"})
    const activitiesData = await res.json()

    return (
        <>
            <h1 className="activites-heading">Aktiviteter</h1>
            <div className="activities-container">
                {activitiesData.map((activity)=>(
                    <ActivityCard activityData={activity}/>
                ))}
            </div>
        </>
    )
}
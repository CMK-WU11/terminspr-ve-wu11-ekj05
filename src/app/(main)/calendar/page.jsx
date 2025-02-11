import CalendarCard from "@/components/CalendarCard/CalendarCard"
import { cookies } from "next/headers"

export default async function calendar(){
    const cookieStore = await cookies()
    const userToken = cookieStore.get("userToken")
    const userId = cookieStore.get("userId")

    const res = await fetch("http://localhost:4000/api/v1/users/" + userId.value, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + userToken.value
        }
    })
    const userData = await res.json()

    return (
        <>
            <h1 className="calendar-heading">Kalender</h1>
            <div className="calendar-container">
                {userData.activities.map((activity)=>(
                    <CalendarCard activityData={activity}/>
                ))}
            </div>
        </>
    )
}
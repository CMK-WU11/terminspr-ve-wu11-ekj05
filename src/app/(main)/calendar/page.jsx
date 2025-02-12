import CalendarCard from "@/components/CalendarCard/CalendarCard"
import { cookies } from "next/headers"
import Link from "next/link"

export default async function calendar(){
    const cookieStore = await cookies()
    const userCookieData = JSON.parse(cookieStore.get("userData").value)
    
    const res = await fetch("http://localhost:4000/api/v1/users/" + userCookieData.userId, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + userCookieData.userToken
        }
    })
    const userData = await res.json()

    return (
        <>
            <h1 className="calendar-heading">Kalender</h1>
            <div className="calendar-container">
                {userData.activities.map((activity)=>(
                    <Link key={activity.id} href={"/activities/" + activity.id}>
                        <CalendarCard activityData={activity}/>
                    </Link>
                ))}
            </div>
        </>
    )
}
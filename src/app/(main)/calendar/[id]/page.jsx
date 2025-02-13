export default async function calendarDetails({ params }){
    const { id } = await params

    const res = await fetch("http://localhost:4000/api/v1/activities/" + id, { method: "GET" })
    const activityData = await res.json()
    
    return(
        <>
            <h1 className="calendarDetails-heading">{activityData.name}</h1>
            <div className="calendarDetails-container">
                {activityData.users.map((user)=>(
                    <p>{user.firstname + " " + user.lastname}</p>
                ))}
            </div>
        </>
    )
}
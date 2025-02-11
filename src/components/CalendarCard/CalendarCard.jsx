export default function CalendarCard({ activityData }){
    return (
        <div className="calendar-card">
            <h2>{activityData.name}</h2>
            <p>{activityData.weekday} {activityData.time}</p>
        </div>
    )
}
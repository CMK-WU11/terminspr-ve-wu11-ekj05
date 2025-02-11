export default function CalendarCard({ activityData }){
    return (
        <div key={activityData.id} className="calendar-card">
            <h2>{activityData.name}</h2>
            <p>{activityData.weekday} {activityData.time}</p>
        </div>
    )
}
import Image from "next/image";

export default function ActivityCard({ activityData }){
    return (
        <>
            <div id={activityData.id} className="activity-card-div">
                <Image height={500} width={500} src={activityData.asset.url} priority unoptimized alt="image of activity"/>
                <div>
                    <p>{activityData.name}</p>
                    <p>{activityData.minAge}-{activityData.maxAge} år</p>
                </div>
            </div>
        </>
    )
}
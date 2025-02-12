import VariableButton from "@/components/VariableButton/VariableButton"
import { cookies } from "next/headers"
import Image from "next/image"

export default async function activitiesDetails({ params }){
    const { id } = await params
    const cookieStore = await cookies()
    const token = JSON.parse(cookieStore.get("userData").value).userToken
    const userId = JSON.parse(cookieStore.get("userData").value).userId
    let activityData
    let userData

    try {
        const res = await fetch("http://localhost:4000/api/v1/activities/" + id)
        activityData = await res.json()

        const res2 = await fetch("http://localhost:4000/api/v1/users/" + userId, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token
            }   
        })
        userData = await res2.json()
    } catch (error) {
        throw new Error(error)
    }

    const alreadyAssigned = userData.activities.find(activity => activity.id === activityData.id)
    
    return (
        <>
            <div className="details-image-container">
                <Image className="details-image" height={1000} width={500} src={activityData.asset.url} priority unoptimized alt="image of activity"/>
                <VariableButton 
                    text={alreadyAssigned ? "Afmeld" : "Tilmeld"}
                    className="detailsButton" 
                    clickFunction={true}
                    userData={userData} 
                    activityData={activityData} 
                    token={token}
                />
            </div>
            <article className="details-article">
                <h1>{activityData.name}</h1>
                <p>{activityData.minAge}-{activityData.maxAge} år</p>
                <p>{activityData.description}</p>
            </article>
        </>
    )
}
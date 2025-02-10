import VariableButton from "@/components/VariableButton/VariableButton"
import Image from "next/image"

export default async function activitiesDetails({ params }){
    const { id } = await params
    let activityData

    try {
        const res = await fetch("http://localhost:4000/api/v1/activities/"+id)
        activityData = await res.json()
    } catch (error) {
        throw new Error(error)
    }
    

    return (
        <>
            <div className="details-image-container">
                <Image className="details-image" height={1000} width={500} src={activityData.asset.url} priority unoptimized alt="image of activity"/>
                <VariableButton text={"Tilmeld"} id="detailsButton"/>
            </div>
            <article className="details-article">
                <h1>{activityData.name}</h1>
                <p>{activityData.minAge}-{activityData.maxAge} år</p>
                <p>{activityData.description}</p>
            </article>
        </>
    )
}
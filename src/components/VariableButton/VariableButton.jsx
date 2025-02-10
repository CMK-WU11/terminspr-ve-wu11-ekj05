"use client"

export default function VariableButton({ text, clickFunction, id="" }){
    return (
        <>
            <button className={"variable-button "} id={id} onClick={clickFunction}>
                <p>{text}</p>
            </button>
        </>
    )
}
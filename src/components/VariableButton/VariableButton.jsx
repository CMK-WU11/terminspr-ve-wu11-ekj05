"use client"

export default function VariableButton({ text, clickFunction, className="" }){
    return (
        <>
            <button className={"variable-button " + className} onClick={clickFunction}>
                <p>{text}</p>
            </button>
        </>
    )
}
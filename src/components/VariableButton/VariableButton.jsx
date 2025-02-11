"use client"

export default function VariableButton({ text, clickFunction, id="", disabled=false, type="button"}){
    return (
        <>
            <button className={"variable-button "} type={type} disabled={disabled} id={id} onClick={clickFunction}>
                <p>{text}</p>
            </button>
        </>
    )
}
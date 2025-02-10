import { FiSearch } from "react-icons/fi"

export default function search(){
    return (
        <>
            <h1 className="search-heading">Søg</h1>
            <form className="search-form">
                <FiSearch/>
                <input type="search"/>
            </form>
        </>
    )
}
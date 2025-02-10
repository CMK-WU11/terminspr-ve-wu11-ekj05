import Link from "next/link"
import { FiHome } from "react-icons/fi"
import { FiSearch } from "react-icons/fi"
import { FiCalendar } from "react-icons/fi"

export default function DrawerMenu(){
    return (
        <>
            <div className="drawermenu-div">
                <Link href={"/aktiviteter"}>
                    <FiHome/>
                </Link>

                <Link href={"/aktivitetsDetaljer"}>
                    <FiSearch/>
                </Link>

                <Link href={"/kalender"}>
                    <FiCalendar/>
                </Link>
            </div>
        </>
    )
}
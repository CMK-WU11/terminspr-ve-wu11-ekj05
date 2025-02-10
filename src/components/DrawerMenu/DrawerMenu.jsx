import Link from "next/link"
import { FiHome } from "react-icons/fi"
import { FiSearch } from "react-icons/fi"
import { FiCalendar } from "react-icons/fi"

export default function DrawerMenu(){
    return (
        <>
            <div className="drawermenu-div">
                <Link href={"/activities"}>
                    <FiHome/>
                </Link>

                <Link href={"/search"}>
                    <FiSearch/>
                </Link>

                <Link href={"/calendar"}>
                    <FiCalendar/>
                </Link>
            </div>
        </>
    )
}
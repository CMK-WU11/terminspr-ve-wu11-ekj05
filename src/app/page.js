import VariableButton from "@/components/VariableButton/VariableButton";
import background from "../../public/splash-image.jpg"
import logo from "../../public/logo.jpg"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Image className="startpage-background fade-animation" src={background} height={500} width={500} alt="background image" priority/>
      <Image className="startpage-logo fade-animation" src={logo} height={153} width={341} alt="logo image"/>
      <Link href={"/aktiviteter"} className="startpage-button-container button-appear">
        <VariableButton text={"Kom i gang"} className="startpage-button"/>
      </Link>
    </>
  )
}
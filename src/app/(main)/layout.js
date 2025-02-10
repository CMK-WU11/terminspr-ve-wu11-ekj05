import DrawerMenu from "@/components/DrawerMenu/DrawerMenu";

export default function MainLayout({ children }){
    return (
        <>
            <div className="main-layout-div">
                {children}
            </div>
            <DrawerMenu/>
        </>
    )
}
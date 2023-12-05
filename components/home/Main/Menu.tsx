"use client"
import Button from "@/components/common/Button"
import {LuPanelLeft} from "react-icons/lu"
import { useAppContext } from "@/components/AppContext"

export default function Menu(){
    const {
        state:{displayNavigation}, 
        setState
    } = useAppContext()
    return (
    <Button 
        icon={LuPanelLeft}
        className={`${
            displayNavigation ? "hidden": ""
        } fixed left-2 top-2`}
        variant="outline"
        onClick={()=>{
            setState((v) => {
                return {...v,displayNavigation:true}
            })
        }}
    />)
}
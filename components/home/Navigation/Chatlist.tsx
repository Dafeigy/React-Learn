import { Chat } from "@/types/chat";
import { useState } from "react";

import { AiOutlineEdit } from "react-icons/ai"
import { MdCheck, MdClose, MdDeleteOutline } from "react-icons/md"
import { PiChatBold, PiTrashBold } from "react-icons/pi"

export default function Chatlist(){
    const [chatList, setChatList] = useState<Chat []>([
        {
            id: "1",
            title: "React入门实战教程",
            updateTime: Date.now()
        },
        {
            id: "2",
            title: "如何使用Next.js创建React项目",
            updateTime: Date.now() + 1
        },
        {
            id: "3",
            title: "知行小课",
            updateTime: Date.now() + 2
        }
    ])
    const [selectedChat, setSelectedChat] = useState<Chat>()
    
    return <div className="flex-1 mt-2 flex flex-col">
        <ul>
            {
                chatList.map((item)=>{
                    const isSelected = selectedChat?.id === item.id 
                    return <li onClick = {()=>{
                        setSelectedChat(item)
                    }}
                    key = {item.id} 
                    className={`flex items-center p-3 spacae-x-3 cursor-pointer rounded-md hover: bg-gray-800${
                        isSelected
                        ? "bg-gray-800" 
                        : ""
                    }`}>
                        
                        <div>
                            <PiChatBold />
                        </div>
                        <div className="flex-1 whitespace-nowrap overflow-hidden">
                        {item.title}
                        <span className={`${
                            isSelected
                            ?""
                            :"from-gray-900"
                        } absolute right-0 inset-y-0 w-8 from-gray-900-gradient-to-l`}></span>
                        </div>
                    </li>
            }
            )}
        </ul>
    </div>
}
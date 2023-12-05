import Menu from "./Menu"

type Props = {
    counter: number
}
export default function Main(){
    return <main className="relative flex-1 h-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300">
        <Menu />
    </main>
}
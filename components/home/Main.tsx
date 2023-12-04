type Props = {
    counter: number
}
export default function Main(props: Props){
    return <main>主题内容:{props.counter}</main>
}
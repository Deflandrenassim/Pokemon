import { useCountPoint } from "../../context/Point"

export function PlayerPoint() {
    const { point } = useCountPoint();

    return (
        <>
            <div> {point.playerPointOne} </div>
            <div>  {point.playerPointTwo} </div>
        </>
    )
}
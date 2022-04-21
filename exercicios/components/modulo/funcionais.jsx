export default function() {
    return <h2>Comp1</h2>
}

export function Comp2() {
    return <h2>Comp2</h2>
}

export const Comp3 = function()  {
    return <h2>Comp3</h2>
}

const Comp4 = () => {
    return <h2>Comp4</h2>
}

const Comp5 = () => <h2>Comp5</h2>

const Comp6 = () => (
                <div>
                    <h2>Comp6</h2>
                </div>
            )
const Comp7 = props => (
                <div>
                    <h2>Comp7 - {props.msg}</h2>
                </div>
            )

export {
    Comp4, Comp5, Comp6, Comp7
}

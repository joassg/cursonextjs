import C1, {Comp2 as C2, Comp3, Comp4, Comp5, Comp6, Comp7} from "../../components/modulo/funcionais"

export default function teste() {

    return  (

        <div>
            <C1   />
            <C2   />
            <Comp3/>
            <Comp4/>
            <Comp5/>
            <Comp6/>
            <Comp7 msg = "Olá tudo bem!!!"/>
        </div>
    )
}
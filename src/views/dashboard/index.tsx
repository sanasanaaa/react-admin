import { observer } from "mobx-react";
import { useStore } from "@/store/index";

function DashBoard(props: any) { 
    let { system } = useStore();

    return (<>
       DashBoard
    </>)
}

export default observer(DashBoard)

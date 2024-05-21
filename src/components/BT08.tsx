import { useMemo } from "react";
import BT08Detail from "./BT08Detail";
export default function BT08() {
    const Person: any[] = useMemo(
        () => [
          {
            id: 1,
            name: "Person 1",
            email: "xuannhat",
            address: "10",
          },
          {
            id: 2,
            name: "Person 2",
            email: "xuannhat",
            address: "10",
          },
          {
            id: 3,
            name: "Person 3",
            email: "xuannhat",
            address: "10",
          },
        ],
        []
      );
  return (
    <div>BT08
        <BT08Detail person = {Person}/>
    </div>
  )
}

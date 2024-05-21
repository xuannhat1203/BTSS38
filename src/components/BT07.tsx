import BT07Detail from "./BT07Detail"
import { useMemo } from "react";
export default function BT07() {
    const Product: any[] = useMemo(
        () => [
          {
            id: 1,
            name: "SP 1",
            price: 5000,
            quantity: 10,
          },
          {
            id: 2,
            name: "SP 2",
            price: 5000,
            quantity: 10,
          },
          {
            id: 3,
            name: "SP 3",
            price: 5000,
            quantity: 10,
          },
        ],
        []
      );
  return (
    <div>BT07
        <BT07Detail product= {Product} />
    </div>
  )
}

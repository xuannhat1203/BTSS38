interface Props{
    product: any[];
}
export default function BT07Detail({product}: Props) {
  return (
    <div>
        <ul>
            {product.map((item)=>{
               return <li key={item.id}>{item.id},{item.name},{item.price},{item.quantity}</li>
            })}
        </ul>
    </div>
  )
}

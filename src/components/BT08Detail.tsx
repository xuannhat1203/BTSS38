interface Person {
    person:any[],
}
export default function BT08Detail({person}:Person) {
  return (
    <div>BT08Detail
        <ul>
            {person.map((item)=>{
               return <li>{item.id},{item.name},{item.email},{item.address}</li>
            })}
        </ul>
    </div>
  )
}

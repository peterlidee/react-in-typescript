type Person = {
  name: string;
  age: number;
  hasSomething: boolean;
}

type BasicPropsType = {
  name: string;
  age: number;
  hasSomething: boolean;
  person: Person;
  list: Person[];
}

function RenderPerson({ name, age, hasSomething }: Person){
  return <div>{name} {age} {hasSomething ? 1 : 0}</div>
}

export default function BasicProps({ name, age, hasSomething, person, list }: BasicPropsType){
  return <div>
    <h3>Primitives</h3>
    <RenderPerson name={name} age={age} hasSomething={hasSomething} />
    <h3>Object props</h3>
    <RenderPerson {...person} />
    <h3>Array props</h3>
    {list.map((item, index) => (
      <RenderPerson key={index} {...item} />
    ))}
  </div>
}
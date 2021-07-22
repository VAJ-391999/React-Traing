import React, { useRef, FC, ReactNode, ReactElement, useEffect } from 'react';
import ContainterInterface from './Interfaces-all/containerInterface';
import Input from './component/Input';
import UseStateExample from './component/useStateExample';

import './App.css';

const Heading = ({ title }: { title: string }) => {
  return (
    <div>
      {title}
    </div>
  );
};

const initState = {
  first: 'Harry',
  last: {
    l: 'pal',
    n: 'chal'
  }
} ;

export const UseContext = React.createContext<typeof initState>(initState);



const Container = ({ heading, children }: ContainterInterface): ReactElement => {
  return <h1>{heading} {children}</h1>
}

const TextWithNumer = ({ heading, children }: { heading: string, children: (num: number) => ReactNode }): ReactElement => {

  const [count, setCount] = React.useState<number>(1);

  return (
    <div>
      {children(count)}
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    </div>
  );
}

//List
function List<ListItem>({ items, render }: { items: ListItem[], render: (item: ListItem) => ReactNode }): ReactElement {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {render(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};




const App: FC = () => {

  const inputRef = useRef<Element | null>(null);

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <Heading title="Hello world"></Heading>
      <Container heading="My App">Best Try</Container>
      <TextWithNumer heading="title foo">{(num: number) => <div>Today's number is: {num}</div>}</TextWithNumer>
      <List items={["hi", "hello"]} render={(item: string) => <div>{item}</div>}></List>
      <Input label="FirstName" type="text" placeholder="Enter Your First Name" />
      <UseContext.Provider value={initState}>
        <UseStateExample />
      </UseContext.Provider>
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
/* import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip'; */
/* import Tabs from './state/Tabs'; */
import Accordian from './state-drills/Accordian';

/* const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
) */

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return (
    <main className='App'>
      {/* <Split className='left' flexBasis='2'>
        <Messages name="Pixel" unread="32"/>
        <TheDate />
        {firstTooltip}
      </Split>
      <Split className='right'>
        <Counter step='1' />
        ;dsafkjsda;flkjdsa;lfsadjvlakjnjvfjfddfjkgvhfdnvgkf
        {secondTooltip}
        <Tooltip color='blue' message={<Counter count={123} step={1}/>}>sddkjfhdkfljsdhfkjsdhfsdkdsjfh</Tooltip>  
      </Split> */}
      <Accordian sections={sectionsProp} />
    </main>
  )
}

export default App;
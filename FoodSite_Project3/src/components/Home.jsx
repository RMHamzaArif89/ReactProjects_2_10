import { useEffect, useState } from 'react'
import Heading from './Heading'
import Menu from './Menu'
import Card from './Card'
import Data from '../File'



function Home() {
  let [state, setState] = useState(Data)

  const filterFunc = (p) => {
    const selectData = Data.filter((currentItem) => {
      return currentItem.category === p;
    })
    setState(selectData)
  }

  return (
    <>
      <Heading />
    <Menu filterFunc={filterFunc}/>

      <div className="menu">
        {state.map((item) => {
          let { heading, price, img, txt, id } = item;
          return (
            <>
              <Card heading={heading} price={price} img={img} txt={txt} key={id} />
            </>
          )
        })}
      </div>
    </>
  )
}

export default Home

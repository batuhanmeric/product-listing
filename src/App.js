import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Item from './Item';

function App() {

   const [items, setİtems] = useState([])
   
   useEffect(async () => {
     const data = await fetch('https://fakestoreapi.com/products');
     const result = await data.json();
     console.log(result);
     setİtems(result);
   }, [])

  return (
    <div>
      <Header>
        <input placeholder= "Search item..."/>
        <button>Search</button>
      </Header>

      <Items>
        {items.map(item => (<Item key= {item.id} image= {item.image}
                             title= {item.title} price= {item.price}
                             description= {item.description} category= {item.category}
                             >



        </Item>))}
      </Items>
      
    </div>
  );
}

export default App;

const Header = styled.header`
display: flex;
min-height: 10vh;
border-bottom: 1px solid rgba(0,0,0,0.2);
align-items: center;
justify-content: center;
font-size: 1rem;

input{
padding: 1rem;
font-size: 20px;
margin-right: 5px;
outline: none;
border: none;
width: 300px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

}

button{
  padding: 1rem 2rem;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  margin-left: 5px;
}
button:hover{
  background: green;
  color: white;
  
}
`

const Items = styled.div`
 margin-top: 20px;
 display: grid;
 grid-template-columns : repeat(auto-fit, 400px);
 gap: 10px;
 min-height: 80vh;
 width: 90vw;
 margin: 30px auto;
`

import styled  from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;  
  gap: 10px;
  :hover{
    box-shadow:
    0px 0px 4px rgba(0, 0, 0, 0.2), /* Sombra fraca em todas as direções */
    8px 0px 8px -4px rgba(0, 0, 0, 0.2); /* Sombra mais forte na direita */

  }
`

const Image = styled.img`
  width: 220px;
  height: 250px;
`

interface Props{
  src: string;
}

function ItemCard ({src}:Props){
  return(
    <Card>
      <Image src={src}/>
      <h2>R$ 200</h2>
      <p>A vista no pix</p>
    </Card>
  )
}

export default ItemCard;
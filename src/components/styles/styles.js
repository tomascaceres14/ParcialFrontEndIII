import styled, { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    `;


/*Body*/

export const Body = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-position: center;
  background-repeat: repeat; 
`;

/*Header*/

export const Header = styled.header`
  background-color: #FFBF00;
  padding: 20px 40px;
`;
export const HeaderH1 = styled.h1`
  margin-bottom: 10px;
`;
export const HeaderSpan = styled.span`
  background-color: #002896;
  color: white;
  padding: 3px 5px;
  border-radius: 5px;
`;

/*Listado*/

export const ListadoDiv = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

/*Item*/

export const Producto = styled.div`
  border: 0.5px solid #ddd;
  padding: 20px;
  width: 33%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  color: white;
  background-color: #002896;
  border: 2px solid black;
`;
export const ProdImg = styled.img`
width: 45%;
height: auto;
border-radius: 20%;
border: 5px solid #FFBF00;
position: relative;
left: 25%;
`;
export const ProdH5 = styled.h5`
  text-align: center;
  color: #FFBF00;
`;
export const ProdButton = styled.button`
  padding: 5px;
  text-transform: uppercase;
  background-color: white;
  border: 2px solid black;
`;

/*Switch Stock*/

export const Stock = styled.span`
  padding: 3px;
  border-radius: 3px;
  color: black;
  background-color: #FFBF00;
`;
export const NoStock = styled(Stock)`
  background-color: rgb(255, 178, 178);
  font-weight: lighter;
  color: rgb(155, 0, 0);
`;

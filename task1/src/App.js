import logo from './images/suitelogoOnly.png';
import './App.css';

/* Header with buttons to be allocated in future*/
const header = (
  <div>
    <header>
      <div className="gridHeader" >
        <div className="headerH3">
          <h2> BEST MENS CLOTHING </h2>
        </div>
        <div className="gridHeaderLogoButtons">
          <img src={logo} className="headerLogo" alt="logo" /> <button>TIES</button> <button>SUITS</button> <button className="rightButtonHeader">BELTS</button>
        </div>
        
      </div>
    </header>
  </div>
)

/*About section */
const about = (
  <div>
    <h3>INTRODUCING THE BEST MENS CLOTHING</h3>
    <p>Best Mens clothing is a clothing line for the elite gentleman. All our clothes are from the highest standard</p>
    <p>At Best Mens clothing we believe in Uniquely Designed Ranges that Compliments our Clients Personal and Business Lives.</p>
    <p>Our Mission is to give the Best Retail Experience in the World… Looking forward to introducing you to the World of Best Mens clothing.</p>
  </div>
)

/*Welcome the user back message */
function UserIsLoggedIn(){
  return <div className="welcomeBackDiv">
    <h2>Welcome back</h2>
  </div>
}

/*Button for user to login */
function UserIsNotLoggedIn(){
  return <div className="loginButtonDiv">
    <button className="loginButton">Click here to Login or Signup</button>
  </div>
}

/* Greeting, based on logged in true or false which item to display using props */
function Greeting(props){ 
  const login = props.login;
  if(login === true){
    return <UserIsLoggedIn/>;
  } else{
    return <UserIsNotLoggedIn/>;
  } 
}

/*Display products*/
function ProductDisplay(props){
  const products = props.products

  return(
  <div className="allProductDisplay">
    {products.map((products, index) => (
      <div id = {products.id} className="productDisplay" key={index}>
        <img src = {products.photo} alt = "Product" className ="productPhoto"/>
      <h4>{products.item}</h4>
      <p>R{products.price}.00</p>   
    </div>
    ))}
  </div>
  );
}

/* App to return functions and variables */
const App = (props) => {
  const login = props.login;
  const products = props.products

  return(
    <div>
      {header}
    <Greeting login = {login}/>
    {about}
    <ProductDisplay products = {products}/>
    </div>
  );
}

export default App;

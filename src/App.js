import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css'
import {Header,Loader,Register,MainBanner,SideBar,Featured, Footer, AdvertLong, ItemList,Liquor, SingleProduct, Activate,ForgetPw,ResetPassword,AdminDashboard, AddProduct} from './Components'
import {Switch,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authenticate, isAuth } from './Components/helpers/auth';
class App extends React.Component {
  state={
    loginState:false,
    userState:false,
}
  login=(a)=>{ 
    if(a=="On"){
      this.setState({loginState:true})
    }
    else{
      this.setState({loginState:false})
    }
   
  }
  render(){
  return (
    <div className={styles.container}>
    <Switch>
      <Route exact path="/" render={(props)=><div>
        
    {this.state.loginState?<Loader login={this.login} {...props}/>:<div></div> }
     
      <Header login={this.login} {...props} />
     <MainBanner/>
     <SideBar/>
     <Featured id="Featured"/>
     <AdvertLong/>
     <Featured id="category"/>
     <Featured id="Flash Sale"/>

     <Featured id="Top Sellers"/>
     <ItemList id="Popular"/>
     <Footer/>
     </div>
      }/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/liquor' component={Liquor}/>
    <Route exact path='/product/:id' component={SingleProduct}/>
    <Route exact path='/users/activate/:token' component={Activate}/>
    <Route path='/users/password/forget' exact render={props => <ForgetPw {...props} />} />
    <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
    <Route path='/admin'exact render={props=><AdminDashboard {...props}/>}/>  
    <Route path='/admin/product/add'exact render={props=><AddProduct {...props}/>}/>  
      </Switch>
    </div> );
  }}

export default App;

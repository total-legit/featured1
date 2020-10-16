import React, { useEffect, useState } from 'react'
import style from './SingleProduct.module.css'
import Select from 'react-select'
import {FiPlus,FiMinus,FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import {Header,Footer,Loader} from '../';
import {AiOutlineShoppingCart,AiOutlineStar,AiFillStar} from 'react-icons/ai'
import Rating from 'react-rating'
import Featured from '../Featured/Featured';

const SingleProduct=(demo)=>{
    const [handle,setHandle]=useState()
    const[value,setValue]=useState(0)
    const[maxValue,setMaxValue]=useState(0)
    const [item,setItem]=useState([{"name":"MacBook Pro 2017","displayImg":"https://static-01.daraz.com.np/p/15dd8c579a2ee7175f3227748b422dac.jpg_720x720q75.jpg_.webp","image":[{"img":"https://static-01.daraz.com.np/p/a54d1ce1fb4a9f5699d958e4fe92d99e.jpg_720x720q75.jpg_.webp"},{"img":"https://static-01.daraz.com.np/p/15dd8c579a2ee7175f3227748b422dac.jpg_720x720q75.jpg_.webp"}],"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugit, velit, dolores vero, et at voluptatum assumenda dolorem pariatur eaque quam vel! Porro facere, placeat labore asperiores explicabo eligendi ducimust amet consectetur adipisicing elit. Atque fugit, velit, dolores vero, et at voluptatum assumenda dolorem pariatur eaque quam vel! Porro facere, ","detailedDescription":"Lorehgvjb;oabsdjanbsdjasdnas.d,amsdmskdamaksdmksmdkmsksd, a,s ma blba jbiab iub jna ooeb oiheioeh ioanskn","price":"222500","color":[{"color":"red"},{"color":"black",}],"size":[{"size":"M","color":"red","stock":"12",},{"size":"Xl","color":'black',"stock":"12"},{"size":"L","color":'black',"stock":"2",}],"discount":"100","brand":"MI",'category':'Fashion','subcategory':'Shoes','rating':"4","view":[{"name":"Name","review":'Ramro lagyo Too Satisfied',"rating":'4',"date":"2020/10/1","img":''}] }])
    const [message,setMessage]=useState()
   const [review,setReview]=useState(0)
   const [selectedOption,setSelectedOption]=useState()
   const[loginState,setLoginState]=useState()
   const [selectedOption2,setSelectedOption2]=useState()

  const login=(a)=>{ 
    if(a=="On"){
      setLoginState(true)
    }
    else{
      setLoginState(false)
    }
   
  }

    useEffect(()=>{
        setHandle(demo.match.params.id)
        console.log(handle)
        window.scrollTo(0, 0);
 
   },[])
   const handleChangeState=a=>{
       
    setSelectedOption2(a)
       setSelectedOption(a.value)
        console.log(selectedOption)
    }
    const increment=()=>{
        if(maxValue>value){
        setValue(value+1)
    } 
    else if(maxValue=="0"){
        setMessage(`*Select Size` )
        
    }
    else{
        setMessage(`Only ${maxValue} Available` )
    }
}
    const setQuantity=(a,b)=>{
        var i
        setMaxValue(a)
        setMessage()
        setValue(0)
        const x= document.getElementById(`Select${b}`);
        const y= document.getElementsByClassName("ItemSizeSelector");
        

        for (i = 0; i < y.length; i++) {
                     y[i].style.border = "none";  
          }
        x.style.border="1px solid black"
        setMessage(`${a} Available`)
    }

    const descriptionHandler=(a,b)=>{
        setReview(a);
       const x= document.getElementById(b)
       document.getElementById("Desc1").style.borderBottom="none"
       document.getElementById("Review1").style.borderBottom="none"
       x.style.borderBottom="3px solid teal"
    }

    const decrement=()=>{
       
       if(value>0){
        setValue(value-1)
       }
    }
    const mouseHandler=(a,b)=>{
        let activeImages = document.getElementsByClassName('SingleProduct_thumbnail__3bkgX')
        var i    
        console.log(activeImages)
        for(i=0;i<activeImages.length;i++){
                activeImages[i].style.border="2px solid black"
                activeImages[i].style.opacity="0.5"

         }
        
                document.getElementById('mainImage').src = a
                document.getElementById('demoimg').style.backgroundImage=`url(${a})`
                document.getElementById(b).style.border="2px solid teal"
                document.getElementById(b).style.opacity="1"
                
                
    }
    
        const rightSlider=()=>{
            document.getElementById('slider').scrollLeft += 180
        }

        const leftSlider=()=>{
            document.getElementById('slider').scrollLeft -= 180
        }

        const handleMouseMove = e => {
            const { left, top, width, height } = e.target.getBoundingClientRect()
            const x = (e.pageX - left) / width * 100
            const y = (e.pageY - top) / height * 100
            const z=document.getElementById("demoimg")
            z.style.backgroundPosition= `${x}% ${y}%` 
            console.log(z)
          }
          const hoverImage=()=>{
            document.getElementById('demoimg').style.display="flex"
            document.getElementById('titleLeft').style.display="none"
            document.getElementById('descLeft').style.display="none"
            
          }
          const hoverLeaveImage=()=>{
            document.getElementById('demoimg').style.display="none"
            document.getElementById('titleLeft').style.display="flex"
            document.getElementById('descLeft').style.display="flex"
              
          }
   return(<div className={style.container} >
    <Header login={login}/>
    {loginState?<Loader login={login}/>:<div></div> }
     
    {item.map((itm)=>(<div className={style.body}>
        <div className={style.productMain}>
            <div className={style.productLeft}>
                 {/* Demo Image Hidden */}
                 <div className={style.figure} id="demoimg" style={{backgroundImage:`url(${itm.displayImg})`,backgroundPosition: "0% 0%"}}/>
               
                <div id="titleLeft" className={style.productName}>
                    {itm.name}
                </div>
                <div id="descLeft" className={style.productDetail}>
                    {itm.description}
                </div>
            
            </div>
            <div className={style.productCenter}>
        
		    <div className={style.column}>
{/* Main Image ie DISPLAY IMAGE*/}
			<img onMouseMove={handleMouseMove}  onMouseEnter={hoverImage} onMouseLeave={hoverLeaveImage} className={style.featured} id="mainImage"src={itm.displayImg}/>

			<div className={style.slidewrapper}  >
				<FiChevronLeft  className={style.FiLeft} id="slideLeft" class="arrow" onClick={leftSlider} />

				<div className={style.slider} id="slider">
                <img className={style.thumbnail} active id="mainThumb" onMouseEnter={()=>mouseHandler(itm.displayImg,"mainThumb")}  src={itm.displayImg}/>
                    {       
                itm.image.map((im,index)=>(<img className={style.thumbnail} active id={`mainThumb${index}`} onMouseEnter={()=>mouseHandler(im.img,`mainThumb${index}`)} src={im.img}/>))	
}

                    </div>

				<FiChevronRight className={style.FiRight} id="slideRight" class="arrow" onClick={rightSlider} />
			</div>
		</div>

            </div>
            <div className={style.productRight}>
               

            <div className={style.productName}>
                    {itm.name}
                </div>
              
               <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'50%',marginTop:'4%'}}>
                <div className={style.price}>
                Rs.{(itm.price-itm.discount).toLocaleString()}
              
                </div>
                <div className={style.prevPrice}>
                Rs.{(itm.price-0).toLocaleString()}
                    
                </div>    
               </div>
                <div className={style.itemColor}>
               <div style={{flex:4}}> Select Color:</div><div style={{flex:8}}><Select value={selectedOption2}
        onChange={handleChangeState} options={itm.color.map((col)=>({"value":`${col.color}`,"label":`${col.color}`}))}/>
                </div>
                </div>
                
                <div className={style.itemSize}>
               <div style={{flex:4}}> Select Size:</div><div style={{flex:8,display:'flex',flexDirection:'row'}}>{itm.size.filter((a)=>(a.color===selectedOption)).map((siz,index)=>(<div class="ItemSizeSelector" id={`Select${index}`} style={{width:'30px',fontWeight:'700',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'}}  onClick={()=>setQuantity(siz.stock,index)}>
                  
                    {siz.size}
                  
                   </div>))}
              
                </div>
                </div>
                <div className={style.itemQuantity}>
               <div style={{flex:4}}>Quantity:</div><div style={{flex:6,display:'flex',flexDirection:'row'}}>
                  <div style={{flex:4,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                   <div style={{cursor:'pointer'}} onClick={decrement}>
                      <FiMinus></FiMinus>  
                   </div>
                   <div style={{width:'30px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                     {value}  
                   </div>
                   
                   <div style={{cursor:'pointer'}} onClick={increment}>
                      <FiPlus></FiPlus>  
                   </div>
                   </div>
                   <div style={{flex:8,display:'flex',flexDirection:'row',marginLeft:'3%',color:"red"}}>
                       {message}
                   </div>
                </div>
                </div>
                <div className={style.bottomItem}>
                    <div className={style.cart}>
                    <AiOutlineShoppingCart/>    Add To Cart
                    </div>
                    <div className={style.buyNow}>
                        Buy Now
                    </div>
                   
                </div>   
                <div className={style.star} style={{marginTop:"5%"}}>
                <Rating
             emptySymbol={<AiOutlineStar />}
             fullSymbol={<AiFillStar  color="yellow"/>}
              fractions={2} 
              initialRating={itm.rating} 
              readonly/>  
                </div>
            </div>
        </div>
        <div className={style.productDescription}>
            <div className={style.descriptionHeader}>
                <div className={style.descriptionTitle} id="Desc1" style={{borderBottom:"3px solid teal",cursor:'pointer'}}onClick={()=>descriptionHandler(0,"Desc1")}>Product Description</div>
                <div className={style.descriptionTitle} id="Review1" style={{cursor:'pointer'}} onClick={()=>descriptionHandler(1,"Review1")}>Review</div>
            
            </div>
            <div>
               {review? <div style={{width:'100%'}}>
                    {itm.view.map((rw)=><div><div className={style.detailedDesc}><div>{rw.name} </div>
                    <div> 
                    {rw.rating}
                    
                    </div></div>
                    <div className={style.emptyplace}>
                    
                    </div>
                        </div> )}
                </div>:<div className={style.detailedDesc}>
                   <div className={style.dtlelft} style={{flex:8}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, consequuntur perferendis atque, vitae iure dolores in labore earum asperiores hic porro est ipsam magnam possimus amet laudantium, ut pariatur obcaecati?
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam aliquid praesentium nisi eligendi odio sint reiciendis? Distinctio a id similique assumenda hic, voluptas nulla harum quasi tempora enim labore.
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quasi dolorem culpa autem quas, nostrum, error officiis ratione odit eos suscipit iure! Placeat nostrum necessitatibus minus ad reprehenderit modi fuga!
                   <br/>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui obcaecati, fugiat modi neque nesciunt tempora perspiciatis. Amet necessitatibus ex, laborum veniam iusto beatae, quos molestiae, harum quasi sunt cupiditate dolores.
                   <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse saepe porro assumenda velit possimus tenetur voluptate ullam, mollitia quis earum deserunt qui fugiat, veritatis provident, magni ut quo hic!
                    </div>
                    <div className={style.dtlright} style={{flex:4}}>
                       
                    </div>    
                </div>
}
            </div>
        </div>   
    </div>))}
    <Featured id="More Products"/>
<Footer/>
    </div>)
}

export default SingleProduct
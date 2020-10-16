import React,{useState,useEffect} from 'react';
import style from './MainBanner.module.css'
const MainBanner=()=>{
const [image,setimage]=useState([{"src":"https://laz-img-cdn.alicdn.com/images/ims-web/TB1PnQ0VBr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp"},{"src":"https://d3nuqriibqh3vw.cloudfront.net/styles/aotw_detail_ir/s3/images/audi_a7_paint.jpg?itok=bblNVv9r"},{"src":"https://pmcvariety.files.wordpress.com/2019/12/cheezit_teaser1_still.png"},{"src":"https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-145694-spotify_party_people--2x1--940.jpg"}])
const [image2,setimage2]=useState([{"src":"https://laughingsquid.com/wp-content/uploads/2014/02/the-reader-south-african-bells-w.jpg"}])

var myIndex=0; 

var myIndex2=0;  
useEffect(()=>{
        carosal()
        banner2();
        const timer = setInterval(() => {
            carosal();
            banner2();
        }, 4000); 
        return () => clearTimeout(timer);
    },[])   
          const carosal=()=>{
            var i;
            const x = document.getElementsByClassName("slides");
            const z =document.getElementsByClassName('slidesid')
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";  
              z[i].style.backgroundColor="white"
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";  
            z[myIndex-1].style.backgroundColor="black"
            
          
        }
        const carosalsider=(a)=>{
          myIndex=a;
          var i;
          const x = document.getElementsByClassName("slides");
          const z =document.getElementsByClassName('slidesid')
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
            z[i].style.backgroundColor="white"
          
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          z[myIndex-1].style.backgroundColor="black"
          
        }

        
        const banner2=()=>{
           
            var i;
            const x = document.getElementsByClassName("banner2");
            
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";  
            }
            myIndex2++;
            if (myIndex2 > x.length) {myIndex2 = 1}    
            x[myIndex2-1].style.display = "block";  
        
          
        }  
        const currentDiv=(a)=>{
           return(<div class='slidesid' style={{width:"100px",height:"5px",backgroundColor:"white",marginRight:'2px'}} id={a} onClick={()=>{carosalsider(a)}}/>)
        }
 
return(
    <div className={style.container}>
   <div class="w3-content w3-section" style={{height:'320px',width:'80%',marginTop:'0.8%',marginLeft:'1%',position:'relative'}}>
  {
 image.map((imgsrc)=> <img class ="slides"  src={imgsrc.src} style={{height:'100%',width:'100%', display:"none",objectFit: "cover"
}}/>
 )}
<div className={style.slider}>
{image.map((imgsrc,index)=>( currentDiv(index) 
))}
</div>
    </div>

    <div class="w3-content w3-section" style={{height:'330px',width:'38%',marginTop:'0.8%',marginLeft:'1%'}}>
  {
 image2.map((imgsrc)=> <img class ="banner2"  src={imgsrc.src} style={{height:'100%',width:'95%', display:"none",objectFit: "cover"}}/>
 )}
 <button className={style.clickhere}>Click Here to Buy</button>
    </div>

 
 </div>
)

}
export default MainBanner;
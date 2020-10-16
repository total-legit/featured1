import React, { useState } from 'react'
import Select from 'react-select'
import {Admin} from '../'
import style from './AddProduct.module.css'
import {IoIosAddCircleOutline} from 'react-icons/io'
import {MdDelete} from'react-icons/md'
const initialList = [
   {
     size: '',
     innerColor: '',
     stock:'',
     innerPrice:''
   },
   
 ];
const AdminDashboard=()=>{
   const [list,setList]=useState(initialList)
   const[image,setImage]=useState([])
   const[imageFile,setFile]=useState([])
   const [formDatas, setFormData] = useState({
      category: '',
      subcategory:'',
      subcategory2: '',
      subcategory3: '',
      subcategory4: '',
      name: '',
      brand: '',
      price:'',
      discount:'',
      description:'',
      detailedDescription:'',
    });
    const [isDisabled,setIsDisabled]=useState(true)
    const[subCategoryOptions,setSubCategoryOptions]=useState([])
    const [categoryOptions,setCategoryOptions] = useState([
      { value: 'Fashion', label: 'Fashion' },
      { value: 'Electronics', label: 'Electronics' },
      { value: 'Groceries', label: 'Groceries' },
      { value: 'Furniture', label: 'Home Decor' },
    ])
    const [fashionCategory,setFashionCategory]=useState([
      { value: 'Mens', label: 'Mens Fashion' },
      { value: 'Womens', label: 'Womens Fashion' },
      { value: 'Sports', label: 'Sports' },
      { value: 'Shoes', label: 'Shoes' },
      
       
    ])
    const [electronicsCategory,setElecronicsCategory]=useState([
      { value: 'Electronic Device', label: 'Electronic Device' },
      { value: 'Electronic Accessories', label: 'Electronic Accessories' },
      { value: 'Home Appliances', label: 'Home Appliances' },
      
       
    ])

   const [electronicDevice,setElectronicDevice]=useState([
      { value: 'Mobile', label: 'Mobile' },
      { value: 'Tablet', label: 'Tablet' },
      { value: 'Laptop', label: 'Laptop' },
      { value: 'Desktop', label: 'Desktop' },
      { value: 'Gaming', label: 'Gaming' },
      { value: 'Camera', label: 'Camera' },
      { value: 'Printer', label: 'Printer' },
   ])
   const [electronicAccessories,setElectronicAccessories]=useState([
      { value: 'Mobile Accessories', label: 'Mobile Accessories' },
      { value: 'Computer Accessories', label: 'Computer Accessories' },
      { value: 'Storage', label: 'Storage' },
      { value: 'Camera Accessories', label: 'Camera Accessories' },
   ])
   
   const [homeAppliances,setHomeAppliances]=useState([
      { value: 'Fridge', label: 'Fridge' },
      { value: 'Microwave', label: 'Microwave' },
      { value: 'Washing Machine', label: 'Washing Machine' },
      { value: 'Mixer', label: 'Mixer' },
   ])
   
   const [groceries,setGroceries]=useState([
      { value: 'Rice', label: 'Rice' },
      { value: 'Home Essentials', label: 'Home Essentials' },
      { value: 'Snacks', label: 'Snacks' },
      { value: 'Dairy / Meat Products', label: 'Dairy / Meat Products' },
      { value: 'Pulses', label: 'Pulses' },
      {value:'Cooking Ingredients',label:'Cooking Ingredients'}
   ])
   

    const [mensCategory,setMensCategory]=useState([
      { value: 'Pants', label: 'Pants' },
      { value: 'Shirts', label: 'Shirts' },
      { value: 'Under Garments', label: 'Under Garments' },
      { value: 'Accessories', label: 'Accessories' },
    ])
    
    const [womensCategory,setWomensCategory]=useState([
      { value: 'Tops & Tshirt', label: 'Tops & Tshirt' },
      { value: 'Kurthi/Sari', label: 'Kurthi/Sari' },
      { value: 'Under Garments', label: 'Under Garments' },
      { value: 'Accessories', label: 'Accessories' },
      { value: 'Pants Leggings', label: 'PantsLeggings' },
 
   ])

   const [homeDecor,setHomeDemo]=useState([
      { value: 'Rooms', label: 'Rooms' },
      {value:'Plants & Pottery',label:'Plants & Pottery'},
      { value: 'Kitchen', label: 'Kitchen' },
      { value: 'Furniture', label: 'Furniture' },
      { value: 'Stationary & Craft', label: 'Stationary & Craft' },
      { value: 'Media,Books & Musical', label: 'Media,Books & Musical' },
      
      
   ])
   const [liquor,setLiquor]=useState([
      { value: 'Whiskey', label: 'Whiskey' },
      {value:'Vodka',label:'Vodka'},
      { value: 'Gin', label: 'Gin' },
      { value: 'Rum', label: 'Rum' },
      { value: 'Brandy', label: 'Tequila' },
      { value: 'Wine', label: 'Wine' },
      { value: 'Beer', label: 'Beer' },
      { value: 'Tobacco', label: 'Tobacco' },
      
      
      
   ])
   

   const [sportsCategory,setSportsCategory]=useState([
      { value: 'Sports Wear', label: 'Sports Wear' },
      { value: 'Sports Acessories', label: 'Sports Acessories' },
    
   ])
   
   const [shoesCategory,setShoesCategory]=useState([
      { value: 'Mens', label: 'Mens' },
      { value: 'Womens', label: 'Womens' },
      { value: 'Kids', label: 'Kids' },
      { value: 'Sports', label: 'Sports' },
    
   ])
  
   
    const { category,subcategory, subcategory2, subcategory3, subcategory4, name, brand,price,discount,description,detailedDescription } = formDatas;
    var formData= new FormData()
   
    const handleInputChange = text => e => {
      setFormData({ ...formDatas, [text]: e.target.value });
      console.log(process.env)
    };

    
  
   const handleAdd=()=>{
      const newlist=list.concat({
         size: '',
         innerColor: '',
         stock:'',
         innerPrice:''
       })
       setList(newlist) 
   }
   const handleChange= (text,index)=> e=>{
     let newArray=[...list]
     if(text=="size"){
     newArray[index].size=e.target.value 
     }
     else if(text=="innerColor"){
      newArray[index].innerColor=e.target.value 
        
     }
     else if(text=="stock"){  
      newArray[index].stock=e.target.value 
        
     }
     
     else if(text=="innerPrice"){
      newArray[index].innerPrice=e.target.value 
        
     }
     
     setList(newArray)
    
   }
  const removeArray = (ind)=>{
     let newArray=[...list]
     if(newArray.length>1){
      newArray.splice(ind,1)
      setList(newArray)
    
   } }

   const handleFile=e=>{
      e.preventDefault();

            let reader = new FileReader();
         
         
            let file = e.target.files;
            let tempFile=[...imageFile].concat(file[0])
            setFile(tempFile)
         console.log(file)
         reader.onloadend = () => {
            let tempImg=[...image].concat({'img':reader.result});
            setImage(tempImg);
          }
   if(file[0]){
         reader.readAsDataURL(file[0]);
 } }
   const deleteImage=index=>e=>{
      let newArray=[...image]
      let newFile=[...imageFile]
      
      newArray.splice(index,1)
      newFile.splice(index,1)
       setImage(newArray)
      setFile(newFile)

      
   }
      const handleCategory=e=>{
         formData.set('category',e.value)
         setSubCategoryOptions()
         setIsDisabled(false)


      }



      const handleSubmit=e=>{
         if(imageFile[0]){
         formData.set('displayImage',imageFile[0],`display.png`)
         for(var i=1;i<imageFile.length;i++){
            formData.set(`displayImage${i}`,imageFile[i],`display${i}.png`)
         }
      }
         formData.set('size',[list])
         formData.set('name',name)
         formData.set('category',category)
         formData.set('price',price)
         formData.set('discount',discount)
         formData.set('detailedDescription',detailedDescription)
         formData.set('description',description)
         formData.set('brand',brand)
         
         console.log(...formData)
      }
    return(<div className={style.container}>
        <div>
            <Admin/>
        </div>
        <div className={style.rightContainer}>
          <div className={style.title}> Add Product</div>
          <div className={style.subTitle}>The field labels marked with * are required input fields.</div>
         <div className={style.rowCategory}>
          <div className={style.individualRowCategory} >
             <div className={style.category}>Category*</div>
             <div className={style.categoryField}  ><Select options={categoryOptions}/> </div>        
          </div>
          <div className={style.individualRowCategory}>
             <div className={style.category}>Sub-Category*</div>
             <div className={style.categoryField}><Select  isDisabled={isDisabled}/> </div>        
          </div>
          
          <div className={style.individualRowCategory}>
             <div className={style.category}>Sub-Category 2*</div>
             <div className={style.categoryField}><Select  isDisabled={isDisabled}/> </div>        
          </div>
          <div className={style.individualRowCategory}>
             <div className={style.category}>Sub-Category 3*</div>
             <div className={style.categoryField}><Select  isDisabled={isDisabled}/> </div>        
          </div>
          <div className={style.individualRowCategory}>
             <div className={style.category}>Sub-Category 4*</div>
             <div className={style.categoryField}><Select  isDisabled={isDisabled}/> </div>        
          </div>
          

          </div>
          <div className={style.rowCategory}>
          <div className={style.individualRow} >
       
             <div className={style.category}>Product Name*</div>
             <input className={style.input} onChange={handleInputChange('name')} placeholder="Product Name"></input>    
       </div> 
      
          <div className={style.individualRow} >
             <div className={style.category}>Brand</div>
                    <input className={style.input} onChange={handleInputChange('brand')} placeholder="Brand"></input>    
   </div>
            {/* <div className={style.individualRow} >
         
               <div className={style.category}>Product SKU*</div>
               <input className={style.input} placeholder="Product Name"></input>    
         </div> 
          */}
          </div>
          <div className={style.rowCategory}>
          <div className={style.individualRow} >
       
             <div className={style.category}>Sale Price*</div>
             <input className={style.input} onChange={handleInputChange('price')} placeholder="Sale Price"></input>    
       </div> 
      
          <div className={style.individualRow} >
       
             <div className={style.category}>Discount</div>
             <input onChange={handleInputChange('discount')} className={style.input} placeholder="Discount"></input>    
       </div> 
        
          </div> 
          <div className={style.rowCategory}>

      
          <div className={style.individualRow} >
       
             <div className={style.category}>Display Images (Max 5)</div>
             <input type="file"  onChange={handleFile} className={style.input}  placeholder="Display"></input>    
            <div className={style.categoryImage}>{image.map((img,index)=><img onClick={deleteImage(index)} src={img.img} width="100px"></img>)}</div>
           
   
       </div> 
  
          </div>  
          <div className={style.rowCategory}>
         
          <div className={style.individualRow} >
       
             <div className={style.category}>Product Details (Highlight)</div>
             <textarea className={style.inputDesc} onChange={handleInputChange('description')} placeholder="Details"></textarea>    
       </div> 
        
          </div>  
          <div className={style.rowCategory}>
         
         <div className={style.individualRow} >
      
            <div className={style.category}>Detailed Description</div>
            <textarea className={style.inputDesc} onChange={handleInputChange('detailedDescription')}  placeholder="Details"></textarea>    
      </div> 
       
         </div>  
         <div className={style.rowCategory}>
            <div className={style.individualRowTable}>
               <div className={style.category}>Size</div>
               

            </div>
            <div className={style.individualRowTable}>
               <div className={style.category}>Color</div>
               

            </div>
         
            <div className={style.individualRowTable}>
               <div className={style.category}>Stock</div>
               

            </div>
            
            <div className={style.individualRowTable}>
               <div className={style.category}>Additional Price</div>
               

            </div>
            <div className={style.individualRowTable}>
               <div className={style.category}></div>
               

            </div>
        
         </div>
         {list.map((itm,index)=>
         <div className={style.rowCategoryTable2}>
            <div className={style.individualRowTable}>
            <div className={style.inputBox}>
            <input value={itm.size} onChange={handleChange("size",index)} className={style.input}></input>        
            </div>
            </div>
            <div className={style.individualRowTable}>
            <div className={style.inputBox}>
            <input value={itm.innerColor} onChange={handleChange("innerColor",index)} className={style.input}></input>        
            </div>        

            </div>
         
            <div className={style.individualRowTable}>
            <div className={style.inputBox}>
            <input value={itm.stock} className={style.input} onChange={handleChange("stock",index)}></input>        
            </div>    
            </div>
            
            <div className={style.individualRowTable}>
            <div className={style.inputBox}>
            <input className={style.input} value={itm.innerColor} value={itm.innerPrice} onChange={handleChange("innerPrice",index)}></input>        
            </div>   

            </div>
            <div className={style.individualRowTable}>
            <div className={style.inputBox2} style={{marginTop:'12px'}}>
           
            <MdDelete color="red" size="28"onClick={()=>removeArray(index)}/>      
           </div>
            </div>
        
         </div>)}

         <div style={{marginTop:'15px'}} onClick={handleAdd}><IoIosAddCircleOutline size="28" color="teal"/></div>
         <div style={{marginTop:'35px'}} className={style.submitbtn} onClick={handleSubmit} >Submit</div>
       
        </div>
    </div>)
}   

export default AdminDashboard;
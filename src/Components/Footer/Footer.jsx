import React from 'react';
import style from './Footer.module.css'
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa'
const Footer=()=>{
    return(<div className={style.container}>
        <div className={style.mobileContainer}>
            <div className={style.mobileTextContainer}>
               <div className={style.mobileText}> Comming Soon</div>
               <div className={style.lorem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum minus unde dignissimos. Ipsa ducimus similique deleniti cupiditate excepturi quam distinctio laudantium atque voluptas minus. Enim reiciendis commodi itaque natus ratione. </div>
                <div className={style.download}>
                <img src="https://blockduo.com/wp-content/uploads/2019/12/app-download-buttons-1.png" width="300px" >
                
                </img>
                </div>
            </div>
            <img src="https://techcrunch.com/wp-content/uploads/2018/09/things-ios12-siri-suggestions.png?w=730&crop=1" className={style.mobileImage}/>
        </div>
        <div id="colouredFooter" className={style.footerContainer}>
           
            <div className={style.watermark}>
                <div>
                    <img height="40px" width="50px" src="https://pngimg.com/uploads/infinity_symbol/infinity_symblo_PNG40.png"/>
                    </div>
                <div className={style.title}>Limitless International Private Limited</div>
                <div className={style.description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, consequatur repellat quasi dolore possimus tenetur non tempora ipsam, iste quas ad, natus eos optio reiciendis! Nulla earum alias aliquam minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptas illo eum quaerat quia iure blanditiis exercitationem corrupti, quidem libero, culpa fugit autem eius? Ad repellat illo quas molestiae dignissimos.</div>
                <div className={style.socialMedia}>
                    <FaFacebookF size="18" style={{marginRight:"20px"}}/>
                    <FaTwitter size="18" style={{marginRight:"20px"}}/>
                    <FaInstagram size="18" style={{marginRight:"20px"}}/>
                    <FaYoutube size="18" style={{marginRight:"20px"}}/>
                 </div>
            </div>
            <div className={style.partners}>
                <img className={style.esewa}src="https://1.bp.blogspot.com/-cOpncwOZ2sM/VdbAtf3pxlI/AAAAAAAAAKE/FX2nWmG1ZWo/s1600/esewa.png" style={{marginRight:"20px"}} height="30px"width="80px"/>
                <img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Khalti_Digital_Wallet_Logo.png" style={{marginRight:"20px"}} height="30px" width="80px"/>
                <img src="https://lh3.googleusercontent.com/proxy/xaGbAZd-NATg2Gwg_-O6SK9QUQcL3y2Cg6a8AKu3j7xgZNbhZXO5WOTimhPVt01k2HZCKWDo_gEfp2d_fDAEcwFJ5li4MheXNw"
            style={{marginRight:"20px"}}  width="80px"/>
                <img src="https://bi-jingo.com/wp-content/uploads/2002/03/visa-5-logo-png-transparent.png"
            style={{marginRight:"20px"}}  width="80px"/>
                
            </div>
            <div className={style.copyright}>
            Copyright 2020 @ Limitless Pvt Ltd.
            </div>
    </div></div>)
}
export default Footer
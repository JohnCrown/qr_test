// import { QrCodeGenerator } from "./Generate/QrCodeGenerator";
import { GENERATE_DATA } from "../constans";
import {QRCodeSVG} from 'qrcode.react';
import s from './gen_history.module.css'
export const GenerateHistory = () => {


  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
console.log(data);


  return(
    <div className={s.gen_history}>
        {data.map((text) => (
        <p key={text}
        className={s.gen_names}
        >
          {text}
          <QRCodeSVG
              size={100}
              style={{marginLeft: 20, marginTop: 10}}
              value={text}


              /> 
          </p>
      
      ))}
    
   
  </div>
  );
};
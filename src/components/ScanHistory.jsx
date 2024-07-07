import { SCAN_DATA } from "../constans";
import {QRCodeSVG} from 'qrcode.react';

export const ScanHistory = () => {

const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
console.log(data);

  return(
    <div>
        {data.map((text) => (
        <p key={text}>
          {text}
          <QRCodeSVG
              size={100}
              
              value={text}


              /> 
          </p>
      
      ))}
    
   
  </div>
  );
};
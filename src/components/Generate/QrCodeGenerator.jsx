import {QRCodeSVG} from 'qrcode.react';
import { useState } from 'react';
import s from './qrCodeStyle.module.css';
import {GENERATE_DATA} from '../../constans.js' ;



export const QrCodeGenerator = () => {

 

  const [value , setValue] = useState('');
  const [result , setResult] = useState('');

 
  
  
  const onClickHandler = () => {
    const prevData = JSON.parse( localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData , value]));


    // console.log('prev_scand :', prevData);
  

      // console.log('clicked');
      setResult(value);
      setValue('');
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult('');
  };

  // console.log( 'result :' ,result);


  return (
    <div className={s.container}>
          {/* {isShowQrCode === true ? <QRCodeSVG value={value}/> : null}  */}
          {/* {isShowQrCode   ? <QRCodeSVG value={value}/> : null}  */}
          {result != '' && ( 
          <div className={s.qrCode}>
              <QRCodeSVG
              size={230}
              
              value={result}


              /> 
           </div>
          )} 
          
          <input
           type='text' 
           placeholder='Type text...'
           value={value} 
           onChange={onChangeHandler} 
           className={s.result}/>
         
          <button type='button' className={s.button} onClick={onClickHandler}>
                Generate QR
          </button>
         
    </div>
  );
};


// event.target.value - достать значение поля ввода
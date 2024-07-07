import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import {SCAN_DATA} from '../../constans.js' ;

export const QrCodeScanner = () => {
  

  
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
    const prevData = JSON.parse( localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData , result[0].rawValue]));


    // console.log('prev_scand :', prevData);
  };

  // console.log('qweqwe', scanned);
  // console.log(SCAN_DATA);
  

  return (
    
    <div>
      <p>{scanned}</p>
      <Scanner 
        // allowMultiple 
        onScan={scanHandler} 
        components={{
          audio : false,
          finder : false,
        }}
        styles={{
          container : {width: 350}
        }}
      />
    </div>
  )
}
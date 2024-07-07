import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { Navigation } from "./components/Navigation/Navigation";
import { GenerateHistory } from "./components/GenerateHistrory";
import { ScanHistory } from "./components/ScanHistory";
import { Routes, Route} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navigation />

      {/* <QrCodeGenerator/> */}
      {/* <QrCodeScanner /> */}

      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />}/>
        <Route path="/scan" element={<QrCodeScanner />}/>
        <Route path="/gen_history" element={<GenerateHistory />}/>
        <Route path="/scan_history" element={<ScanHistory />}/>

          
          
        
      </Routes>

    </div>
  );

};

export default Layout ;

// export {Layout}
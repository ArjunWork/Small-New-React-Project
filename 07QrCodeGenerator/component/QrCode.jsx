import {useState} from 'react'
import QRcode from 'react-qr-code'
import './QrCode.css'
function QrCode (){
    const [info,setInfo] = useState('');
    const [data,setData] = useState('');
    return(
    <div>
        <div>
            <label>
                <input type="text" placeholder=' Enter Value' onChange={(e)=>{setInfo(e.target.value)}}/>
                <button onClick={()=>{setData(info)}}>Generate Code</button>
            </label>
        </div>
        {data
        ?   <div>
                <QRcode value={data} size={400} bgColor='#fff' id='qr-code-generator'/>
            </div>
        :   null}
    </div>
    )
}

export default QrCode;

//import { BellRing } from 'lucide-react';
import { XCircle } from 'lucide-react';
import  './index.scss'
import { ReactNode } from 'react';
import { AlertsType } from '../../types/type';

interface IProps 
{
   type : AlertsType ;
   icon : ReactNode;
   title : string;
   description ? : string;
   children ? : ReactNode
}

const alert = ({type , icon , title , description , children}:IProps) => {
    return (
        <div className={type}>
           <div className='alert_header'> 
             <div className='alert_title'>
              {icon}
                <h4>{title}</h4>
             </div>
                 <XCircle  size={30}/>
           </div>
           {children? children : <p>{description}</p> }
        </div>
    )
    }

    export default alert; 
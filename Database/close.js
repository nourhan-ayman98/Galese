import official_Store from '../ReduxStores/Store';
import {writeData} from './Data_base';


export default function write_data(tablename,array)
{
    writeData(tablename,array);
}
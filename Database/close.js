import official_Store from '../ReduxStores/Store';
import {writeData} from './Data_base';


export default function write_data()
{
    writeData("/Employee/",official_Store.getState().Employee_reducer.Employees);
}
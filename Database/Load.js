import official_Store from '../ReduxStores/Store';
import { getData } from './Data_base';


export default function load_data(tablename, type_) {
    getData(tablename,type_).then(state => {
        
        official_Store.dispatch({
            type: type_,
            state_:state,
        
        })
    } );


}
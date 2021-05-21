//Reducers
import Employee_reducer from '../Reducers/Employee';
import Admin_reducer from '../Reducers/Admin';
import CustomerServices_reducer from '../Reducers/CustomerServices';
import ManageRate_reducer from '../Reducers/ManageRate';
import Rate_reducer from '../Reducers/Rate';
import Comments_reducer from '../Reducers/Comments';
import UserRate_reducer from '../Reducers/UserRate';

import LocAdress_reducer from '../Reducers/LocAddress';
import TrackLocation_reducer from '../Reducers/TrackLocation';
import User_reducer from '../Reducers/User';
import UAdress_reducer from '../Reducers/UAdress';
import UPhone_reducer from '../Reducers/UPhone';
import Patient_reducer from '../Reducers/Patient';
import HealthStatus_reducer from '../Reducers/HealthStatus';

import Nurse_reducer from '../Reducers/Nurse';
import NurseCertificates_reducer from '../Reducers/NurseCertificates';
import HospitalAddress_reducer from '../Reducers/HospitalAddress';
import Sitter_reducer from '../Reducers/Sitter';
import SitterCertificates_reducer from '../Reducers/SitterCertificates';
import Payment_reducer from '../Reducers/Payment';
import CreditCard_reducer from '../Reducers/CreditCard';
import Fawry_reducer from '../Reducers/Fawry';

import Reservation_reducer from '../Reducers/Reservation';
import TrackReservation_reducer from '../Reducers/TrackReservation';
import Disease_reducer from '../Reducers/Disease';
import DiseaseConditions_reducer from '../Reducers/DiseaseConditions';
import DiseaseName_reducer from '../Reducers/DiseaseName';
import DiseaseSymptoms_reducer from '../Reducers/DiseaseSymptoms';
import SetDisease_reducer from '../Reducers/SetDisease';
import PaymentMethodUser_reducer from '../Reducers/PaymentMethodUser';
import TrackPayment_reducer from '../Reducers/TrackPayment';
//Store create
import { combineReducers } from 'redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';



const reducers = combineReducers({
    Employee_reducer,
    Admin_reducer,
    CustomerServices_reducer,
    ManageRate_reducer,
    Rate_reducer,
    Comments_reducer,
    UserRate_reducer,
    LocAdress_reducer,
    TrackLocation_reducer,
    User_reducer,
    UAdress_reducer,
    UPhone_reducer,
    Patient_reducer,
    HealthStatus_reducer,
    Nurse_reducer,
    NurseCertificates_reducer,
    HospitalAddress_reducer,
    Sitter_reducer,
    SitterCertificates_reducer,
    Payment_reducer,
    CreditCard_reducer,
    Fawry_reducer,
    Reservation_reducer,
    TrackReservation_reducer,
    Disease_reducer,
    DiseaseConditions_reducer,
    DiseaseName_reducer,
    DiseaseSymptoms_reducer,
    SetDisease_reducer,
    PaymentMethodUser_reducer,
    TrackPayment_reducer,

});

const official_Store=createStore(User_reducer,applyMiddleware(thunk));


export default official_Store;

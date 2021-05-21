
//users database
export const get_User_Data=(state)=>{
    return {
        type:'DATABASEREAD',
        data:{
            users:state.users,
            //last_index:state.Lastindex
        }
    }
}
export const write_user_Data=()=>{
    return {
        type:'DATABASEWRITE',
    }
}









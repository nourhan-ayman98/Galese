
//users database
export const get_User_Data=(state)=>{
    console.log(state.arraykey)
    console.log(state.Lastindex)
    return {
        type:'DATABASEREAD',
        data:{
            users:state.arraykey,
            last_index:state.Lastindex
        }
    }
}
export const write_user_Data=()=>{
    return {
        type:'DATABASEWRITE',
    }
}









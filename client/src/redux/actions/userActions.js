import axios from 'axios'
import {message} from 'antd';


export const registerUser=(values)=>async dispatch=>{

    dispatch({type:'LOADING',payload:true})

    try{
       await axios.post('/api/users/register',values);
       message.success('User registered Successfully')
       setTimeout(()=>{
       window.location.href='/login'
       },1000)  
        dispatch({type:'LOADING',payload:false})

    }catch(error){
     message.error('Something went wrong,please enter your credentials again')
        dispatch({type:'LOADING',payload:false})
    }
}

export const loginUser=(values)=>async dispatch=>{

    dispatch({type:'LOADING',payload:true})

    try{
       const user=await axios.post('/api/users/login',values);
       message.success('Login Success')
       localStorage.setItem('user',JSON.stringify(user.data))
       setTimeout(()=>{
       window.location.href='/'
       },1000)  
         dispatch({type:'LOADING',payload:false})
    }catch(error){
     message.error('Something went wrong,please enter your credentials again')
       dispatch({type:'LOADING',payload:false})
    }
}

export const updateUser=(values)=>async dispatch=>{
    
    const userid=JSON.parse(localStorage.getItem('user'));
    values._id=userid;
    dispatch({type:'LOADING',payload:true})

    try{
       const user=await axios.post('/api/users/update',values);
       message.success('User Updated Successfully')
       localStorage.setItem('user',JSON.stringify(user.data))
       setTimeout(()=>{
       window.location.reload()
       },1000)  
         dispatch({type:'LOADING',payload:false})
    }catch(error){
     message.error('Something went wrong,please try again later')
       dispatch({type:'LOADING',payload:false})
    }
}

export const getAllUsers=()=>async dispatch=>{

  dispatch({type:'LOADING',payload:true})

  try{
    const response = await axios.get('/api/users/getallusers')
    dispatch({type:'GET_ALL_USERS',payload:response.data})
    dispatch({type:'LOADING',payload:false})
  }catch(error){
      console.log(error)
      dispatch({type:'LOADING',payload:false})
  }
}
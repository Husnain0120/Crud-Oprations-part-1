import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {
    const[data,setData]=useState([])
    const getData=()=>{
        axios.get("https://65e61745d7f0758a76e8184e.mockapi.io/crudapp")
        .then((res)=>{
            console.log(res);
            setData(res.data);
        })
    }
  useEffect(()=>{
    getData()
  },[])

  const handleid=(id)=>{
    axios.delete(`https://65e61745d7f0758a76e8184e.mockapi.io/crudapp/${id}`)
    .then(()=>{
        getData()
    })
  }

  const settoLocalStorage=(id ,name,email,age)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("age",age)
  }
  return (
    <>
    <Link to='/'>
    <button className=' m-5 border p-2 rounded-md bg-green-700 text-white font-bold active:bg-green-950'>Create New <span>&#10133;</span></button></Link>
    <div>
     <table className="table">
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
 {
    data.map((eachData)=>{
        return(
            <>
                <tbody>
                <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.age}</td>
                <td>
                    <Link to='/update'>
                    <button className=' bg-green-600 p-1 rounded-md px-2 text-white active:bg-green-900'
                    onClick={()=>settoLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email,
                        eachData.age
                    )}> Edit</button>
                    </Link>
                </td>
                <td><button className=' bg-red-700 text-white p-1 rounded-md  active:bg-red-900' onClick={()=>handleid(eachData.id)}>Delete</button></td>
                </tr>
            </tbody>
            </>
        )
        })
  }
</table>
</div>
    </>
  )
}

export default Read

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Update() {
    const [id,setId]=useState()
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()

    useEffect(()=>{
       setId( localStorage.getItem("id"))
       setName( localStorage.getItem("name"))
       setEmail( localStorage.getItem("email"))
       setAge( localStorage.getItem("age"))
    },[])
    
    const navigate = useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://65e61745d7f0758a76e8184e.mockapi.io/crudapp/${id}`,{
            name:name,
            email:email,
            age:age,
        }).then(()=>{
            navigate("/read")
        });
    };
  return (
    <>
     <Link to='/read'>
    <button className=' m-5 border p-2 rounded-md bg-green-700 text-white font-bold active:bg-green-950'>Go read page <span>&#10133;</span></button></Link>
   <form className="space-y-5"   >
            <div>
              <label  className="block text-sm font-medium text-left leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                 name='text'
                 onChange={(e)=>{setName(e.target.value)}}
                  value={name}
                  type="text"
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label  className="block text-sm font-medium text-left leading-6 text-gray-900">
                Age
              </label>
              <div className="mt-2">
                <input
                 name='number'
                onChange={(e)=>{setAge(e.target.value)}}
                  value={age}
                  type="number"
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

    
            <div>
              <label  className="block text-sm font-medium text-left leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                 onChange={(e)=>{setEmail(e.target.value)}}
                name='email'
                 value={email}
               
                  type='email'
                  className="block px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
              onClick={handleUpdate}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>
    </>
  )
}

export default Update

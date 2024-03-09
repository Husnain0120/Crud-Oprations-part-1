import React,{ useState } from 'react'
import axios from 'axios'
import { Link ,useNavigate } from 'react-router-dom'
function Post() {
const[name,setName]=useState()
const[email,setEmail]=useState()
const[age,setAge]=useState(18)

const history = useNavigate();
const header = {'acces-Control-allow-Origin':"*"}
const handleSubmit=(e)=>{
  
  e.preventDefault()
  console.log("click");
  axios.post("https://65e61745d7f0758a76e8184e.mockapi.io/crudapp",{
    name:name,
    email:email,
    age:age,
    header,
  })
  .then(()=>{
    history("/read")
  })
};

  return (
    <>
     <Link to='/read'>
    <button className=' m-5 border p-2 rounded-md bg-green-700 text-white font-bold active:bg-green-950'>Read data</button></Link>
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
                  required
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
                 required
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
                 required
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
              onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
    </>
  )
}

export default Post

'use client'
import React,{useState} from 'react'
import { contactFormInterface } from '@/utils/interfaces'
import axios from 'axios'

function WantUsToCallYou() {

  const [form, setForm]=useState<contactFormInterface>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >)=>{
    e.preventDefault()
    const {name, value}=e.target
    setForm(prev=>({
        ...prev,
        [name]:value
    }))

  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post('/api/mail', form, {
      headers: { 'Content-Type': 'application/json' }
    });
    alert(res.data.success || 'Message sent successfully.')
    setForm({ name: '', company: '', email: '',phone:'',message:'' })
    console.log(res.data);
  } catch (error) {
    alert(data.error || 'Failed to send message.');
    console.error(error);
  } finally {
    setLoading(false);
  }
};



  return (
    <div className='z-9 grid grid-cols-1 md:grid-cols-2 py-15 bg-red-50 '>
        <div className='text-4xl md:text-7xl text-center  md:text-left  text-gray-700 md:max-w-[100px] m-auto'>
             WANT US TO 
             <span className='text-red-500 inline-block '> CALL </span>
             YOU?
        </div>
       
        <form action=""
            onSubmit={handleSubmit}
        >
           <div className='mt-10  w-full flex flex-col items-center justify-center text-gray-500 m-auto'>
                <input 
                type="text"
                placeholder='Name'
                name='name'
                value={form.name}
                onChange={handleChange}
                className=' my-2 px-5  py-5 border-2 border-gray-500 w-[90%]'
                    />
                    <input 
                type="text"
                placeholder='Company'
                name='company'
                value={form.company}
                onChange={handleChange}
                className=' my-2 px-5 py-5 border-2 border-gray-500 w-[90%]'
                    />
                    <input 
                type="email"
                placeholder='Email'
                name='email'
                 value={form.email}
                onChange={handleChange}
                className='my-2 px-5 py-5 border-2 border-gray-500 w-[90%]'
                    />
                
                <input 
                type="text"
                placeholder='Phone'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                className=' my-2 px-5 py-5 border-2 border-gray-500 w-[90%]'
                    />
                <textarea
                rows={5}
                placeholder='Write Us A Message....'
                name='message'
                value={form.message}
                onChange={handleChange}
                className=' my-2 px-5 py-5 border-2 border-gray-500 w-[90%]'
                    />
                <button
                type='submit'
                 className='mt-5 ml-5 md:ml-9 self-start px-10 py-5 bg-red-500 text-2xl text-white hover:bg-red-700 '>
                     { loading? "Sending..." : "Send"}
                </button>
           </div>
        </form>
        
    </div>
  )
}

export default WantUsToCallYou
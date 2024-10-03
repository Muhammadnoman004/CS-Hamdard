import React from 'react'
import hamdard from "../../assets/hamdard.jpg"

export default function Footer() {
    return (
        <section>
            <div>
                <div className='absolute w-full'>
                    <img src={hamdard} className='w-full h-96 object-cover opacity-20' alt="#" />
                </div>
                <div className='bg-black w-full h-96 flex justify-between p-5'>
                    <div>
                        <h5 className='text-white'>Hamdard University</h5>
                    </div>
                    <div>
                        <h5 className='text-white'>Admissions</h5>
                        <div className='bg-yellow-500 h-56 w-1.5 relative bottom-8 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-white'>USEFUL LINKS</h5>
                        <div className='bg-yellow-500 h-56 w-1.5 relative bottom-8 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-white'>Faculties</h5>
                        <div className='bg-yellow-500 h-56 w-1.5 relative bottom-8 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-white'>Find Us</h5>
                        <div className='bg-yellow-500 h-56 w-1.5 relative bottom-8 right-5'></div>

                    </div>
                </div>
                <div className='bg-yellow-500 w-full h-28'>

                </div>
            </div>
        </section>
    )
}

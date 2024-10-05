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
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>Hamdard University</h5>
                        <div className='text-white'>
                            <p>021 -111-102-030</p>
                            <p>info@hamdard.edu.pk</p>
                            <p>Monday - Thursday: 08:00 AM - 04:00 PM</p>
                            <p>Friday: 08:00 AM - 04:00 PM</p>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>Admissions</h5>
                        <div className='text-white'>
                            <p>How to Apply</p>
                            <p>Apply</p>
                        </div>
                        <div className='bg-yellow-500 h-[262px] w-1 relative bottom-28 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>USEFUL LINKS</h5>
                        <div className='text-white'>
                            <p>Who We Are</p>
                            <p>Student Feedback Form</p>
                        </div>
                        <div className='bg-yellow-500 h-[262px] w-1 relative bottom-28 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>Faculties</h5>
                        <div className='text-white'>
                            <p>Computer Sciences</p>
                            <p>Languages</p>
                            <p> Social Sciences</p>
                            <p> Basic Sciences</p>
                        </div>
                        <div className='bg-yellow-500 h-[262px] w-1 relative bottom-48 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>Find Us</h5>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13612.753178458779!2d74.4426299!3d31.4640061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6cc469044e1fbc1!2sLahore%20Garrison%20University.!5e0!3m2!1sen!2s!4v1614869774555!5m2!1sen!2s" width={'210px'} height={'230px'} allowFullScreen loading='lazy'></iframe>
                        </div>
                        <div className='bg-yellow-500 h-[262px] w-1 relative bottom-[262px] right-5'></div>
                    </div>
                </div>
                <div className='bg-yellow-500 w-full h-28'>

                </div>
            </div>
        </section>
    )
}

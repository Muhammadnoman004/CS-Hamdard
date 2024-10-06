import React from 'react'
import hamdard from "../../assets/hamdard.jpg"
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

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
                        <div className='text-white pt-3 font-semibold'>
                            <div className='flex gap-2'>
                                <FaPhone className='bg-green-800 rounded-full p-1 w-6 h-6' />
                                <p>021 -111-102-030</p>
                            </div>
                            <div className='flex gap-2'>
                                <IoMdMail className='bg-green-800 rounded-full p-1 w-6 h-6' />
                                <p>info@hamdard.edu.pk</p>
                            </div>
                            <div className='flex gap-2'>
                                <FaClock className='bg-green-800 rounded-full p-1 w-6 h-6' />
                                <p>Monday - Thursday: 08:00 AM - 04:00 PM</p>
                            </div>
                            <div className='flex gap-2'>
                                <FaClock className='bg-green-800 rounded-full p-1 w-6 h-6' />
                                <p>Friday: 08:00 AM - 04:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>Admissions</h5>
                        <div className='text-white pt-3 font-semibold'>
                            <p>How to Apply</p>
                            <p>Apply</p>
                        </div>
                        <div className='bg-yellow-500 h-[277px] w-1 relative bottom-32 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>USEFUL LINKS</h5>
                        <div className='text-white pt-3 font-semibold'>
                            <p>Who We Are</p>
                            <p>Student Feedback Form</p>
                        </div>
                        <div className='bg-yellow-500 h-[277px] w-1 relative bottom-32 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>Faculties</h5>
                        <div className='text-white pt-3 font-semibold'>
                            <p>Computer Sciences</p>
                            <p>Languages</p>
                            <p> Social Sciences</p>
                            <p> Basic Sciences</p>
                        </div>
                        <div className='bg-yellow-500 h-[277px] w-1 relative bottom-52 right-5'></div>
                    </div>
                    <div>
                        <h5 className='text-yellow-400 font-bold uppercase text-base tracking-widest'>Find Us</h5>
                        <div className='pt-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13612.753178458779!2d74.4426299!3d31.4640061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6cc469044e1fbc1!2sLahore%20Garrison%20University.!5e0!3m2!1sen!2s!4v1614869774555!5m2!1sen!2s" width={'210px'} height={'230px'} allowFullScreen loading='lazy'></iframe>
                        </div>
                        <div className='bg-yellow-500 h-[277px] w-1 relative bottom-[277px] right-5'></div>
                    </div>
                </div>
                <div className='bg-yellow-500 w-full h-28'>
                    <div className='flex justify-center gap-2 font-semibold pt-2'>
                        <p>Copyright 2012 - 2024 |</p>
                        <p>Hamdard University by HU |</p>
                        <p>All Rights Reserved</p>
                    </div>
                    <div className='flex gap-3 justify-center text-white'>
                        <p className='bg-green-900 rounded-full p-1 hover:cursor-pointer'><RiFacebookFill className='w-6 h-6' /></p>
                        <p className='bg-green-900 rounded-full p-1 hover:cursor-pointer'><FaInstagram className='w-6 h-6' /></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

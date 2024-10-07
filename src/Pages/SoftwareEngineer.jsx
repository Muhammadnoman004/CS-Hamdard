import React from 'react'
import Header from '../Components/Header/Header'
import Navbars from '../Components/Navbars/Navbars'
import { Dropdown } from 'antd';
import { FaAngleRight } from "react-icons/fa";


const items = [
    {
        key: '1',
        label: "Overview"
    },
    {
        key: '2',
        label: "BS Mapping of PEOs to PLOs"
    },
    {
        key: '3',
        label: "Structure of BS SE Programme"
    },
    {
        key: '4',
        label: "BS SE Roadmap"
    },
    {
        key: '5',
        label: "BS SE Fee Structure"
    },
];


const items2 = [
    {
        key: '1',
        label: "Overview"
    },
    {
        key: '2',
        label: "Structure of MS Data Science"
    },
    {
        key: '3',
        label: "MS Data Science Road Map"
    },
    {
        key: '4',
        label: "MS Data Science Fee Structure"
    },
];

const items3 = [
    {
        key: '1',
        label: "Dean's Message"
    },
    {
        key: '2',
        label: "HOD's Message"
    },
    {
        key: '3',
        label: "Program Offered"
    },
    {
        key: '4',
        label: "Program Educational Objectives (PEO's)"
    },
    {
        key: '5',
        label: "Program Learning Objectives (PLO's)"
    },
    {
        key: '6',
        label: "Faculty"
    },
    {
        key: '7',
        label: "News and Events"
    },
    {
        key: '8',
        label: "ESSE Societies"
    },
    {
        key: '9',
        label: "Publications"
    },
];


export default function SoftwareEngineer() {
    return (
        <>
            <Header />
            <Navbars />

            <section className='p-3'>
                <div className='text-center mt-4 pb-10'>
                    <h1 className='text-4xl uppercase text-green-900 font-bold'>Department of Software Engineering</h1>
                </div>

                <div className='flex gap-4'>
                    <div>
                        <div>
                            <button className='bg-green-900 text-white w-56 text-start px-3 mb-2 h-10 hover:bg-yellow-500 font-semibold focus:bg-yellow-500'>Home</button>
                        </div>
                        <div>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottomLeft"
                                arrow={{
                                    pointAtCenter: true,
                                }}
                            >
                                <button className='p-2 w-56 bg-green-900 text-white text-start mb-2 px-3 hover:bg-yellow-500 font-semibold focus:bg-yellow-500'>BS Software Engineering <FaAngleRight /></button>


                            </Dropdown>
                        </div>
                        <div>
                            <button className='p-2 w-56 bg-green-900 text-white text-start mb-2 px-3 hover:bg-yellow-500 font-semibold focus:bg-yellow-500'>ADP Software Engineering Roadmap</button>
                        </div>
                        <div>
                            <Dropdown
                                menu={{
                                    items: items2
                                }}
                                placement="bottomLeft"
                                arrow={{
                                    pointAtCenter: true,
                                }}
                            >
                                <button className='p-2 w-56 bg-green-900 text-white text-start mb-2 px-3 hover:bg-yellow-500 font-semibold focus:bg-yellow-500'>MS Data Science <FaAngleRight /></button>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown
                                menu={{
                                    items: items3
                                }}
                                placement="bottomLeft"
                                arrow={{
                                    pointAtCenter: true,
                                }}
                            >
                                <button className='p-2 w-56 bg-green-900 text-white text-start mb-2 px-3 hover:bg-yellow-500 font-semibold focus:bg-yellow-500'>About <FaAngleRight /></button>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-bold text-3xl'>University's Vision</h3>
                        <p className='pt-3 pb-2 text-lg'>To be a renowned University in Teaching, Research, Innovation, and Commercialization, providing a conducive environment for the acquisition of latest knowledge so that students may contribute to community support, technical and socioeconomic development.</p>
                        <h3 className='font-bold text-3xl'>University's Mission</h3>
                        <p className='pt-3 pb-2 text-lg'>To play a leading role in technical and socioeconomic development through academic and research excellence while adhering to international quality standards. The University would develop leaders who are multi-disciplinary, value-oriented, creative, and entrepreneurial.</p>
                        <h3 className='font-bold text-3xl'>Department Vision</h3>
                        <p className='pt-3 pb-2 text-lg'>To be one of the premier Computer Science departments in the region benefitting humanity with its excellence in research, innovation, and entrepreneurship.</p>
                        <h3 className='font-bold text-3xl'>Department Mission</h3>
                        <p className='pt-3 pb-2 text-lg'>To create and impart the latest Computer Science and interdisciplinary knowledge in a way that inspires its students to be ethical lifelong learners, researchers and innovative problem solvers who strive to improve others' lives both locally and globally.</p>
                        <h3 className='font-bold text-3xl'>Core Values</h3>
                        <p className='pt-3 pb-2 text-lg'>The core values guiding the department are:</p>
                    </div>
                </div>

            </section>
        </>
    )
}

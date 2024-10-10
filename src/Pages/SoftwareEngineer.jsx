import React from 'react'
import Header from '../Components/Header/Header'
import Navbars from '../Components/Navbars/Navbars'
import { Dropdown } from 'antd';
import { FaAngleRight } from "react-icons/fa";
import Footer from '../Components/Footer/Footer';


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
                        <h3 className='font-bold text-3xl underline text-green-800'>Overview</h3>
                        <p className='pt-3 pb-2 text-lg'>Software Engineering at LGU is the second-largest department of the university. It is the discipline of creating high-quality software systems in a systematic, controlled, and efficient manner. It involves the application of engineering concepts, techniques, and methods to the design, development, deployment, and maintenance of software systems. In our software engineering program, we groom professionals who have a mastery of principles, theory, practices, and processes necessary to produce quality software systems. The department has highly qualified faculty members with solid academic backgrounds and rich industry experience who are not only best in teaching but actively promote research culture among the youth of the country.</p>
                        <h3 className='font-bold text-3xl underline text-green-800'>Vision:</h3>
                        <p className='pt-3 pb-2 text-lg'>To be a distinguished learning center of software engineering in the region, driving innovation and excellence through collaborative solutions that empower individuals to thrive in an ever-changing digital ecosystem.</p>
                        <h3 className='font-bold text-3xl underline text-green-800'>Mission:</h3>
                        <p className='pt-3 pb-2 text-lg'>To provide dynamic learning environment, instill creative thinking, and cultivate entrepreneurial skills so that graduates would be well-rounded professionals to serve the global community.</p>
                        <h3 className='font-bold text-3xl underline text-green-800'>Our History:</h3>
                        <p className='pt-3 pb-2 text-lg'>Our department is committed to offering high-tech courses with research-based teaching. We believe that our prudent and responsible course of action during the study in these programs enables the students to improve their skills and to place them for competitive positions in the market. The Department focuses on imparting the knowledge and training which should enable students to harmonize theory with practice, the concept with the application, and the problem with the solution.</p>
                        <h3 className='font-bold text-3xl underline text-green-800'>Our Societies:</h3>
                        <p className='pt-3 pb-2 text-lg hover:text-green-800 cursor-pointer'>Event Society of Software Engineering (ESSE)</p>
                    </div>
                </div>

            </section>

            <Footer />
        </>
    )
}

import React from 'react'
import { Dropdown } from 'antd';


const items = [
    {
        key: '1',
        label: "Overview"
    },
    {
        key: '2',
        label: "Structure of BSCS Programme"
    },
    {
        key: '3',
        label: "BSCS Road Map"
    },
    {
        key: '4',
        label: "BSCS (Biology Group) Road Map"
    },
    {
        key: '5',
        label: "BSCS Fee Structure"
    },
];


const items2 = [
    {
        key: '1',
        label: "Overview"
    },
    {
        key: '2',
        label: "Structure of MSCS Programme"
    },
    {
        key: '3',
        label: "MSCS Road Map"
    },
    {
        key: '4',
        label: "MSCS Fee Structure"
    },
];

const items3 = [
    {
        key: '1',
        label: "Overview"
    },
    {
        key: '4',
        label: "MSCS Fee Structure"
    },
];

export default function HeroSection() {
    return (
        <section className='p-3'>
            <div className='text-center mt-2'>
                <h1 className='text-6xl uppercase text-green-900 font-bold'>Department of computer science</h1>
            </div>

            <div className='flex gap-3'>
                <div>
                    <div>
                        <button className='bg-green-900 text-white w-52 text-start px-3 mb-2 h-10 hover:bg-yellow-500 font-semibold'>Home</button>
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
                            <button className='p-2 w-52 bg-green-900 text-white text-start mb-2 px-3 hover:bg-yellow-500 font-semibold'>BS Computer Science (Hons) 4 Years</button>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown
                            menu={{
                                items: items2,
                            }}
                            placement="bottomLeft"
                            arrow={{
                                pointAtCenter: true,
                            }}
                        >
                            <button className='p-2 w-52 bg-green-900 text-white text-start mb-2 px-3 hover:bg-yellow-500 font-semibold'>MS Computer Science Weekend 2 Years</button>
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
                            <button className='p-2 w-52 bg-green-900 text-white text-start mb-2 px-3 hover:bg-yellow-500 font-semibold'>MS Artificial Intelligence</button>
                        </Dropdown>
                    </div>
                </div>
                <div>
                    <h3>University's Vision</h3>
                    <p>To be a renowned University in Teaching, Research, Innovation, and Commercialization, providing a conducive environment for the acquisition of latest knowledge so that students may contribute to community support, technical and socioeconomic development.</p>
                    <h3>University's Mission</h3>
                    <p>To play a leading role in technical and socioeconomic development through academic and research excellence while adhering to international quality standards. The University would develop leaders who are multi-disciplinary, value-oriented, creative, and entrepreneurial.</p>
                    <h3>Department Vision</h3>
                    <p>To be one of the premier Computer Science departments in the region benefitting humanity with its excellence in research, innovation, and entrepreneurship.</p>
                    <h3>Department Mission</h3>
                    <p>To create and impart the latest Computer Science and interdisciplinary knowledge in a way that inspires its students to be ethical lifelong learners, researchers and innovative problem solvers who strive to improve others' lives both locally and globally.</p>
                    <h3>Core Values</h3>
                    <p>The core values guiding the department are:</p>
                    <ul>
                        <li>Commitment to high-quality undergraduate education and student success.</li>
                        <li>Quality assurance of academic programs through disciplinary accreditation.</li>
                        <li>Continuous program improvement through assessment of program educational objectives and student outcomes.</li>
                        <li>New initiatives and programs with changes in technology and global interdependence.</li>
                        <li>Continued professional development of faculty members and scholarly contributions to the discipline.</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

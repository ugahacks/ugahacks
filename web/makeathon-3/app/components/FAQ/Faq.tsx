'use client'
import Image from 'next/image';
import faqTitle from '../../../public/FAQ.svg';
import Dropdown from './Dropdown';

const Faq = () => {
    return (
        <section className="flex flex-col items-center pb-5">
            <Image
                height={103}
                width={260}
                src={faqTitle.src}
                className=""
                alt="FAQ Title"
            />
            {/* Insert multiple dropdowns here with different content */}
            <Dropdown title="Where will the makeathon be held?" content="IDK" />
            <Dropdown title="How much will the event cost?" content="IDK" />
            <Dropdown title="Can I start working on my project before the event?" content="IDK" />
            <Dropdown title="What if I don't have a team or idea?" content="IDK" />
            <Dropdown title="What are the rules all attendees must abide by?" content="IDK" />
            <Dropdown title="How many people can I have on my team?" content="IDK" />
            <Dropdown title="Who do I reach out to if I have more questions?" content="IDK" />
        </section>
    );
};


export default Faq;
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
            <Dropdown title="How much will the event cost?" content="Free, just make sure to RSVP through the form: (https://ugahacks.us2.list-manage.com/track/click?u=69a3e83ed9e60b403160ee5a8&id=6b647fa4bb&e=83411ef1f9)" />
            <Dropdown title="Who do I reach out to if I have more questions?" content="You can reach out to the UGAHacks Team at hello@ugahacks.com!" />
            <Dropdown title="Can I use Make Week workshops to satisfy UGAHacks EL Credit requirements?" content="At this time, Make Week workshops are not a method that counts towards UGAHacks EL Credit requirements." />
        </section>
    );
};


export default Faq;
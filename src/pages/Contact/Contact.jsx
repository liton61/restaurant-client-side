
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5rdxana', 'template_b5h3617', form.current, 'aY09R0x-o_CBd4nUQ')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                Swal.fire({
                    title: "Good job!",
                    text: "You you have successfully submitted !",
                    icon: "success"
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='lg:px-0 px-5'>
            <div className="lg:w-3/4 mx-auto bg-gray-200 p-10 my-10 rounded">
                <div className='flex justify-center'>
                    <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow">

                        <div className="stat">
                            <div className="stat-title">Location</div>
                            <div className="stat-desc">Dhaka, Bangladesh</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Phone</div>
                            <div className="stat-desc">+123 456 7890</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title">Email</div>
                            <div className="stat-desc">info@example.com</div>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-lg">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                            required placeholder='Your name'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-lg">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                            required placeholder='Your email'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-lg">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
                            rows="5"
                            required placeholder='Message'
                        ></textarea>
                    </div>
                    <button className='btn btn-success font-bold w-full'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

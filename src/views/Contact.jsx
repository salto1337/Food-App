import { ContactForm } from "../form/ContactForm";
import contact_img from "../assets/contact.svg";

export function Contact() {
	return (
		<section className="flex flex-col lg:flex-row gap-10 pt-[50px] mb-5">
			<div className="flex flex-col justify-between gap-[15px] max-w-[60%]">
				<h2 className="font-bold text-4xl">Lets talk about everything!</h2>
				<p className="max-w-[350px] ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure adipisci
					cumque sint, officia itaque voluptatem?
				</p>
				<img className="w-[50%]" src={contact_img} alt="contact" />
			</div>
			<ContactForm />
		</section>
	);
}

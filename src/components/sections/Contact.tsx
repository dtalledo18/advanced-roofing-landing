'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        issue: '',
        phone: '',
        email: '',
        address: '',
        zipCode: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState({
        firstName: '',
        phone: '',
        email: '',
        address: '',
        zipCode: '',
        message: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const validateForm = () => {
        const { firstName, phone, email, address, zipCode, message } = formData;

        const sanitized = {
            ...formData,
            firstName: firstName.trim().replace(/<[^>]*>?/gm, ''),
            address: address.trim().replace(/<[^>]*>?/gm, ''),
            zipCode: zipCode.trim().replace(/<[^>]*>?/gm, ''),
            message: message.trim().replace(/<[^>]*>?/gm, ''),
        };

        const newErrors = {
            firstName: '',
            phone: '',
            email: '',
            address: '',
            zipCode: '',
            message: '',
        };

        // ── Full Name ──
        if (!sanitized.firstName || sanitized.firstName.length < 2) {
            newErrors.firstName = 'Please enter a valid name.';
        } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(sanitized.firstName)) {
            newErrors.firstName = 'Name must contain only letters.';
        } else if (sanitized.firstName.length > 60) {
            newErrors.firstName = 'Name is too long (max 60 characters).';
        }

        // ── Phone ──
        const rawPhone = phone.replace(/\D/g, '');
        if (!rawPhone) {
            newErrors.phone = 'Phone number is required.';
        } else if (rawPhone.length < 10) {
            newErrors.phone = 'Phone number must be at least 10 digits.';
        } else if (rawPhone.length > 15) {
            newErrors.phone = 'Phone number is too long.';
        }

        // ── Email ──
        if (!email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        // ── Address ──
        if (!sanitized.address || sanitized.address.trim() === '') {
            newErrors.address = 'Address is required.';
        } else if (sanitized.address.length > 120) {
            newErrors.address = 'Address is too long (max 120 characters).';
        }

        // ── Zip Code ──
        if (!sanitized.zipCode || sanitized.zipCode.trim() === '') {
            newErrors.zipCode = 'Zip code is required.';
        } else if (!/^\d{5}(-\d{4})?$/.test(sanitized.zipCode)) {
            newErrors.zipCode = 'Please enter a valid US zip code.';
        }

        // ── Message (Optional) ──
        if (sanitized.message && sanitized.message.length > 500) {
            newErrors.message = 'Message is too long (max 500 characters).';
        }

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) {
            return null;
        }

        return sanitized;
    };

    const handleSubmit = async () => {
        const cleanData = validateForm();
        if (!cleanData) return;

        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cleanData),
            });

            if (!response.ok) throw new Error('Sending failed');

            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
            alert('There was an error sending the form. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const inputClass = (field: keyof typeof errors) =>
        `w-full p-3.5 rounded-xl text-white placeholder-white/70 border ${
            errors[field] ? 'border-red-500' : 'border-white/20'
        } bg-[#1f508a]/60 focus:outline-none focus:border-yellow-400 transition-colors duration-150 text-sm font-medium`;

    const renderError = (field: keyof typeof errors) => {
        if (!errors[field]) return null;
        return (
            <p className="text-red-300 text-xs mt-1 flex items-center gap-1 font-medium">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {errors[field]}
            </p>
        );
    };

    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden pt-16 pb-16 font-urbanist min-h-[750px] lg:min-h-[950px] flex items-center"
            style={{
                background: 'linear-gradient(180deg, #126bbe 0%, #3f93e4 100%)',
            }}
        >
            {/* ── ROOFER PNG SIN FONDO (FULL HEIGHT Y ALINEADO A LA DERECHA) ── */}
            <div className="absolute right-0 bottom-0 h-full w-full lg:w-1/2 pointer-events-none z-10 flex justify-end items-end">
                <img
                    src="/contact/roofer-3.webp"
                    alt="Roofing Inspector"
                    className="h-full w-auto max-w-full object-contain object-right-bottom drop-shadow-2xl"
                />
            </div>

            {/* DECORACIÓN SUPERIOR QUE CONECTA CON INFINITY TEXT (#F2F2F2) */}
            <div
                className="absolute top-0 left-0 right-0 h-10 bg-[#F2F2F2] z-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 50% 100%, 0 30%)' }}
            />

            <div className="max-w-7xl mx-auto px-6 pt-6 relative z-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* ── IZQUIERDA: TITULAR + FORMULARIO ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 flex flex-col items-center lg:items-start"
                    >
                        <h2 className="font-clash text-white font-extrabold text-3xl sm:text-4xl md:text-5xl text-center lg:text-left leading-tight tracking-wide mb-6">
                            Schedule your <span className="text-[#FFCC00]">FREE</span>
                            <br />
                            <span className="text-[#FFCC00]">INSPECTION</span> now!
                        </h2>

                        {isSubmitted ? (
                            <div className="w-full bg-white/10 backdrop-blur-md p-10 rounded-3xl text-center border border-white/20">
                                <h3 className="font-clash text-[#FFCC00] text-3xl font-bold mb-4">Thank You!</h3>
                                <p className="text-white text-base">We have received your request and will contact you shortly.</p>
                            </div>
                        ) : (
                            <div className="w-full max-w-lg">
                                {/* Form Wrapper Glassmorphism */}
                                <div
                                    className="w-full rounded-3xl p-6 space-y-3.5 shadow-2xl mb-6"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        backdropFilter: 'blur(16px)',
                                        WebkitBackdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255, 255, 255, 0.18)',
                                    }}
                                >
                                    {/* Full Name & Issue Dropdown */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div>
                                            <input
                                                name="firstName"
                                                placeholder="Full name"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className={inputClass('firstName')}
                                            />
                                            {renderError('firstName')}
                                        </div>
                                        <div className="relative">
                                            <select
                                                name="issue"
                                                value={formData.issue}
                                                onChange={handleInputChange}
                                                className="w-full p-3.5 rounded-xl text-white border border-white/20 bg-[#1f508a]/60 focus:outline-none focus:border-yellow-400 transition-colors duration-150 text-sm font-medium appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-[#126bbe] text-white">Issue</option>
                                                <option value="roof-leak" className="bg-[#126bbe] text-white">Roof Leak</option>
                                                <option value="storm-damage" className="bg-[#126bbe] text-white">Storm Damage</option>
                                                <option value="full-replacement" className="bg-[#126bbe] text-white">Full Replacement</option>
                                                <option value="general-inspection" className="bg-[#126bbe] text-white">General Inspection</option>
                                            </select>
                                            <ChevronDown className="absolute right-3.5 top-4 text-white/70 pointer-events-none" size={16} />
                                        </div>
                                    </div>

                                    {/* Phone & Email */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        <div>
                                            <input
                                                name="phone"
                                                placeholder="Phone number"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={inputClass('phone')}
                                            />
                                            {renderError('phone')}
                                        </div>
                                        <div>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={inputClass('email')}
                                            />
                                            {renderError('email')}
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <input
                                            name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className={inputClass('address')}
                                        />
                                        {renderError('address')}
                                    </div>

                                    {/* Zip Code */}
                                    <div>
                                        <input
                                            name="zipCode"
                                            placeholder="Zip code"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            className={inputClass('zipCode')}
                                        />
                                        {renderError('zipCode')}
                                    </div>

                                    {/* Extra Notes */}
                                    <div>
                    <textarea
                        name="message"
                        placeholder="Extra notes"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`${inputClass('message')} resize-none`}
                    />
                                        <div className="flex justify-between items-start">
                                            {renderError('message')}
                                            <span className="text-white/40 text-xs ml-auto mt-1">
                        {formData.message.length}/500
                      </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit CTA Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="font-clash bg-[#FFCC00] hover:bg-yellow-300 text-black font-extrabold text-sm uppercase tracking-wider py-4 rounded-full transition-all shadow-xl w-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                    ) : (
                                        'FREE INSPECTION'
                                    )}
                                </button>

                                {/* Direct Call Button */}
                                <div className="flex justify-center mt-5">
                                    <motion.a
                                        href="tel:8478924878"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm shadow-md"
                                    >
                                        <span className="text-white/80">Or call us</span>
                                        <motion.div
                                            animate={{ rotate: [0, -15, 15, -15, 0] }}
                                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                                        >
                                            <Phone size={15} className="text-[#FFCC00] fill-[#FFCC00] ml-1" />
                                        </motion.div>
                                        <span className="font-bold tracking-wide text-white">847-892-4878</span>
                                    </motion.a>
                                </div>
                            </div>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
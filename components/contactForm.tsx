import React, { FormEvent, useEffect, useState } from "react"

export function ContactForm() {
    const [sended, setSended] = useState(false)
    const [loading, setLoading] = useState(false)


    const sendForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setLoading(true)
            const data: Record<string, any> = {}
            const formData = new FormData(e.currentTarget);
            for (let [key, value] of formData.entries()) {
                //   console.log(key, value);
                data[key] = value
            }

            const res = await fetch(import.meta.env.VITE_CONTACT_FORM_API, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (res.ok) {
                console.log("form sended")
                setSended(true)
            }

        } catch (err) {
            console.log("form error", err)
        } finally {
            setLoading(false)
        }
    }

    return <div>
        <div className="inline-block mb-8">
            <h1 className="uppercase text-base-100 text-5xl font-bold text-right shadow-primary shadow-outline">Let&apos;s work <br />together</h1>
        </div>
        <div className="relative z-10">
            <form className={`form-control uppercase transition-opacity	 ${sended ? 'opacity-0' : ''}`} onSubmit={sendForm}>
                <label className="label pb-0">
                    <span className="text-base-100">Name</span>
                </label>
                <input type="text" placeholder="" name="name" className="input-primary mb-10" />
                <label className="label pb-0">
                    <span className="text-base-100">Email</span>
                </label>
                <input type="email" placeholder="" name="email" className="input-primary mb-10" />
                {/* <label className="label">
                  <span className="text-base-100">Tell me a little what you need</span>
                </label> */}
                <div className="skew-textarea h-40
               before:border before:border-base-100 before:bg-primary
               after:border after:border-base-100 after:bg-primary">
                    <textarea
                        name="message"
                        placeholder="Tell me a little what you need<"
                        className="relative w-full textarea-primary h-full scrollbar-thin scrollbar-thumb-base-100 scrollbar-track-primary"
                        rows={6}
                    />
                    <button type="submit" className="btn uppercase absolute right-0 bottom-0 pr-24 w-48">{loading ? 'Sending...' : 'Send'}</button>
                </div>
            </form>
            <div className={`absolute -z-10 top-0 text-base-100 transition-opacity ${sended ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-xl font-bold">Thanks! <br /> I will be in contact with you as soon as possible.</h2>
            </div>
        </div>
    </div>
}
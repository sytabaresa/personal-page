import React, { FormEvent, useEffect } from "react"

export function ContactForm() {
    // importScript("https://apis.google.com/js/api.js")

    useEffect(() => {
        // 1. Load the JavaScript cli
        gapi.load('client', start);
    }, [])

    const sendForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return <>
        <div className="inline-block mb-8">
            <h1 className="uppercase text-base-100 text-5xl font-bold text-right shadow-primary shadow-outline">Let&apos;s work <br />together</h1>
        </div>
        <form className="form-control uppercase" onSubmit={sendForm}>
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
                <button type="submit" className="btn uppercase absolute right-0 bottom-0 pr-24">Send (WIP)</button>
            </div>
        </form>
    </>
}
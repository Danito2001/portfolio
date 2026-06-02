import { useState } from "react"

type FormType = {
    name: string;
    email: string;
    message: string;
}

export const useContactForm = () => {

    const initialValue = {
        name: "",
        email: "",
        message: ""
    }

    const [ formValue, setFormValue ] = useState<FormType>(initialValue);
    const [ sended, setSended ] = useState(false);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;

        setFormValue(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const resetForm = () => setFormValue(initialValue)
    const resetSended = () => setSended(false);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValue)
        });

        if (result.ok) {
            setSended(true)
        }

        resetForm();

        setTimeout(() => {
            resetSended()
        }, 3000);
    }


    return {
        formValue,
        handleChange,
        handleSubmit,
        sended
    }
}
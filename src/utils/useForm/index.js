// membuat fungsi useState (Hooks) dinamis yang bisa di gunakan di semua fungsi form

import { useState } from "react"

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    return [values, (formType, formValue) => {
        if(formType === 'reset'){
            return setValues(initialValue);
        }
        return setValues({ ...values, [formType] : formValue })
    }]
}
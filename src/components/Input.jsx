import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextArea,label,...props },ref) {
    const inputClass = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col justify-center gap-2 mb-8">
            <label className="text-lg font-bold uppercase text-stone-600">{label}</label>
            {isTextArea ? <textarea ref={ref} className={inputClass} {...props}/> : <input ref={ref} className={inputClass} {...props}/>}
        </p>
    );
});

export default Input;
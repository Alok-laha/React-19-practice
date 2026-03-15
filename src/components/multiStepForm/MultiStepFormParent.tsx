import BasicDetails from "./BasicDetails";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import { useState } from "react";

const MultiStepFormParent = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        year: '',
        company: '',
        position: '',
        duration: ''
    });
    const handleBack = () => {
        if(step === 1) return;
        setStep(prev => prev - 1);
    }
    const handleSubmit = () => {
        if(step !== 3) {
            setStep(prev => prev + 1);
            return;
        };
        alert('Form submitted successfully!');
        console.log(formData);
        setStep(1);
    }

    const updateFormData = (field: string, value: string) => {
        setFormData(prev => ({...prev, [field]: value}));
    };

    switch(step) {
        case 1: return <BasicDetails next={handleSubmit} back={handleBack} updateFormData={updateFormData}/>;
        case 2: return <Education next={handleSubmit} back={handleBack} updateFormData={updateFormData}/>;
        case 3: return <WorkExperience next={handleSubmit} back={handleBack} updateFormData={updateFormData}/>;
        default: return <p>Form submitted successfully!</p>;
    }
}

export default MultiStepFormParent;
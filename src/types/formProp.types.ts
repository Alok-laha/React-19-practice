type StepProps = {
    back: () => void;
    next: () => void;
    updateFormData: (name: string, value: string) => void;
};

export type { StepProps };
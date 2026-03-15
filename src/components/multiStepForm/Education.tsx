import type { StepProps } from '../../types/formProp.types'

const Education = ({ next, back, updateFormData }: StepProps) => {
    return (
        <div>
            <h2>Education</h2>
            <input type="text" placeholder="School" name='school' onChange={(e)=>{
                updateFormData('school', e.target.value);
            }}/>
            <input type="text" placeholder="Degree" name='degree' onChange={(e)=>{
                updateFormData('degree', e.target.value);
            }}/>
            <input type="text" placeholder="Year" name='year' onChange={(e)=>{
                updateFormData('year', e.target.value);
            }}/>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Education;
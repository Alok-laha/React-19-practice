import type {StepProps} from '../../types/formProp.types'

const WorkExperience = ({ next, back, updateFormData }: StepProps) => {
    return (
        <div>
            <h2>Work Experience</h2>
            <input type="text" placeholder="Company" name='company' onChange={(e)=>{
                updateFormData('company', e.target.value);
            }}/>
            <input type="text" placeholder="Position" name='position' onChange={(e)=>{
                updateFormData('position', e.target.value);
            }}/>
            <input type="text" placeholder="Duration" name='duration' onChange={(e)=>{
                updateFormData('duration', e.target.value);
            }}/>
            <button onClick={back}>Back</button>
            <button onClick={next}>Finish</button>
        </div>
    )
}

export default WorkExperience;
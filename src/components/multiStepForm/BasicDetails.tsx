import type {StepProps} from '../../types/formProp.types'

const BasicDetails = ({ next, back, updateFormData }: StepProps) => {
    return (
        <div>
            <h2>Basic Details</h2>
            <input type="text" placeholder="Name" name='name' onChange={(e)=>{
                updateFormData('name', e.target.value);
            }}/>
            <input type="text" placeholder="Email" name='email' onChange={(e)=>{
                updateFormData('email', e.target.value);
            }}/>
            <input type="text" placeholder="Phone" name='phone' onChange={(e)=>{
                updateFormData('phone', e.target.value);
            }}/>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default BasicDetails;
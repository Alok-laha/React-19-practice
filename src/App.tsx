import './App.css'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import Cake from './components/cake';
import IceCream from './components/icecream';
import Users from './components/users';
import MultiStepFormParent from './components/multiStepForm/MultiStepFormParent';

type FormData = {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  geo: string[];
};

function App() {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormData>({
    defaultValues: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      return {
        name: data.name,
        email: data.email,
        address: {
          street: data.address.street,
          city: data.address.city,
          zipcode: data.address.zipcode,
        },
        geo: [data.address.geo.lat, data.address.geo.lng],
      };
    }
  });
  const onSubmit = (data: FormData) => { 
    console.log(data);
    reset({
      name: '',
      email: '',
      address: {
        street: '',
        city: '',
        zipcode: '',
      },
      geo: ['', ''],
    });
  };
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input id="name" {...register('name', { required: {
            value: true,
            message: 'Name is required'
          }, minLength: {
            value: 3,
            message: 'Name must be at least 3 characters long'
          } })} />
          {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}

          <label htmlFor="email">Email:</label>
          <input id="email" type='text' {...register('email', { 
            required: {
              value: true,
              message: 'Email is required'
            }, pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }})} />
          {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}

          <label htmlFor="street">Street:</label>
          <input id="street" type='text' {...register('address.street', { 
            required: {
              value: true,
              message: 'Street is required'
            } })} />
          {errors.address?.street && <p style={{color: 'red'}}>{errors.address.street.message}</p>}

          <label htmlFor="city">City:</label>
          <input id="city" type='text' {...register('address.city', { 
            required: {
              value: true,
              message: 'City is required'
            } })} />
          {errors.address?.city && <p style={{color: 'red'}}>{errors.address.city.message}</p>}

          <label htmlFor="zipcode">Zipcode:</label>
          <input id="zipcode" type='text' {...register('address.zipcode', { 
            required: {
              value: true,
              message: 'Zipcode is required'
            } })} />
          {errors.address?.zipcode && <p style={{color: 'red'}}>{errors.address.zipcode.message}</p>}

          <label htmlFor="lat">Lat:</label>
          <input id="lat" type='text' {...register('geo.0', { 
            required: {
              value: true,
              message: 'Latitude is required'
            } })} />
          {errors.geo?.[0] && <p style={{color: 'red'}}>{errors.geo[0].message}</p>}

          <label htmlFor="lng">Lng:</label>
          <input id="lng" type='text' {...register('geo.1', { 
            required: {
              value: true,
              message: 'Longitude is required'
            } })} />
          {errors.geo?.[1] && <p style={{color: 'red'}}>{errors.geo[1].message}</p>}

          <button type="submit">Submit</button>
        </form>
        <hr />
        <Cake />
        <IceCream />
        <Users />
        <MultiStepFormParent />
        <DevTool control={control} />
    </>
  )
}

export default App

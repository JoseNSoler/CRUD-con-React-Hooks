import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();


    const onSubmit = (data, e) => {
        console.log(data)

        props.addUser(data)
        e.target.reset()
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name', { required: true, message: 'Campo requerido' })} />
      <div>
          {errors?.name?.message}
      </div>
      <label>Username</label>
      <input {...register('username', { required: true, message: 'Campo requerido' })} />
      <div>
          {errors?.username?.message}
      </div>
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm
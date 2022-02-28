import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)


    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)
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
      <button>Edit new user</button>
    </form>
  )
}

export default EditUserForm
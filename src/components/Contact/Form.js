import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

const Form = () => {

    const {
        register,
        formState : {
            errors
        },
        handleSubmit,
        reset
    } = useForm({
        mode:"onBlur"
    });

    const onSubmit = (data) => {
        axios.post('https://formsubmit.co/a28cb7ca15bf72641c9a86567cfde1c2', data)
            .then(({data}) => console.log(data) );
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='contact__form' >
            <input {...register('_captcha')} type="hidden"  value="false"/>

            <div className="contact__form-row">
                <div className="contact__form-col">
                    <input {...register('name', {
                        required: "Поле обязательно к заполнению",
                        minLength: {
                            value: 5,
                            message: 'Минимум 5 символов'
                        }
                    })} type="text" className="contact__form-control" placeholder="Ф.И.О."  />
                    <span className='contact__form-error'>
                        {errors?.name && errors?.name?.message }
                    </span>
                </div>
                <div className="contact__form-col">
                    <input {...register('email', {
                        required: "Поле обязательно к заполнению",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message : 'Введите корректно'
                        },
                    })} type="email" name="email" className="contact__form-control" placeholder="Ваша почта" />
                    <span className='contact__form-error'>
                        {errors?.email && errors?.email?.message }
                    </span>
                </div>
                <div className="contact__form-col">
                    <input {...register('tel', {
                        required: "Поле обязательно к заполнению",
                        pattern: {
                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: "Invalid phone no",
                        },
                    })} type="tel"  className="contact__form-control" placeholder="Ваш номер телефона" />
                    <span className='contact__form-error'>
                        {errors?.tel && errors?.tel?.message }
                    </span>
                </div>
                <div className='contact__form-textarea'>
                <textarea {...register('message', {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                        value: 10,
                        message: 'Минимум 10 символов'
                    }
                })} placeholder="Ваше сообщение..." className="contact__form-textarea" />
                    <span className='contact__form-error'>
                        {errors?.message && errors?.message?.message }
                    </span>
                </div>
            </div>
            <button type="submit" className="contact__form-btn">Отправить</button>
        </form>
    );
};

export default Form;
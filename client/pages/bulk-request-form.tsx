import React from 'react'
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const ErrorMessage = ({ message }) => <div style={{ color: 'white' }}>{message}</div>
const SuccessMessage = () => <div style={{ border: '1px solid white', borderRadius: '5px', padding: '2em', color: 'white' }}>Your request was submitted successfully.</div>

function BulkRequestFormPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = async (data: any) => {
        const formBody = { ...data }
        const response = await fetch(`api/request-bulk-order`, {
            body: JSON.stringify(formBody),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        return response
    }

    const { mutate, isLoading, isSuccess, isError, error } = useMutation((data) => submitForm(data));

    const onSubmit = (data: any) => mutate(data);

    if (isSuccess) return <SuccessMessage />

    return (
        <div >
            <div>
                <h1>Bulk Order Request Inquiry</h1>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', gap: '1em', textAlign: 'left' }} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="organization">Organization</label>
                <input
                    type="text"
                    {...register('organization', {
                        required: "Organization is required",
                    })}
                    placeholder="Organization's name"
                    aria-label="Organization"
                    disabled={isLoading}
                />
                {errors?.organization && <ErrorMessage message={errors.organization.message} />}
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    {...register('firstName', {
                        required: "First name is required",
                    })}
                    placeholder="First name"
                    aria-label="First Name"
                    disabled={isLoading}
                />
                {errors?.firstName && <ErrorMessage message={errors.firstName.message} />}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    {...register('lastName', {
                        required: "Last name is required",
                    })}
                    placeholder="Last name"
                    aria-label="lastName"
                    disabled={isLoading}
                />
                {errors?.lastName && <ErrorMessage message={errors.lastName.message} />}
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    {...register("email", {
                        required: "Email address is required",
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: 'Valid email address required'
                        }
                    })}
                    placeholder="Email"
                    aria-label="Email"
                    disabled={isLoading}
                />
                {errors?.email && <ErrorMessage message={errors.email.message} />}

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    {...register('phone', {
                        required: "Phone number is required",
                    })}
                    placeholder="Phone number"
                    aria-label="Phone Number"
                    disabled={isLoading}
                />
                {errors?.phone && <ErrorMessage message={errors.phone.message} />}
                <label htmlFor="address">Address</label>
                <input
                    type="textarea"
                    {...register('address', {
                        required: "Address is required",
                    })}
                    placeholder="Address"
                    aria-label="Address"
                    disabled={isLoading}
                />
                {errors?.address && <ErrorMessage message={errors.address.message} />}

                <button type="submit">Submit</button>
                {isError && <ErrorMessage message={error} />}
            </form>
        </div>
    )
}

export default BulkRequestFormPage;


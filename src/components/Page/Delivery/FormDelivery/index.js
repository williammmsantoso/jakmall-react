import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormDeliveryWrapper,
  Form,
  FormWrapper,
  FormInput,
  FormTextarea,
} from "./styles";

const FormDelivery = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const initialValue = {
    email: "",
    phoneNumber: "",
    dropshipperName: "",
    dropshipperPhoneNumber: "",
    deliveryAddress: "",
  };

  const [formValue, setFormValue] = useState(initialValue);

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <FormDeliveryWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <div>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "*Please enter valid email",
                },
              })}
            />
          </FormWrapper>

          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="number"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: {
                  value: /^0\d{9,12}/g,
                  message: "*Please enter valid phone number",
                },
              })}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
              <p>Max length exceeded</p>
            )}
          </FormWrapper>

          <FormWrapper>
            <FormTextarea
              autoComplete="off"
              placeholder="Delivery Address"
              maxLength={120}
              name="deliveryAddress"
              onChange={handleChange}
              value={formValue.deliveryAddress}
            />
          </FormWrapper>
        </div>

        <div>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="text"
              placeholder="Dropshipper name"
              {...register("dropshipperName")}
            />
          </FormWrapper>
          <FormWrapper>
            <FormInput
              autoComplete="off"
              type="text"
              placeholder="Dropshipper phone number"
              {...register("dropshipperPhoneNumber")}
            />
          </FormWrapper>
        </div>
      </Form>
    </FormDeliveryWrapper>
  );
};

export default FormDelivery;

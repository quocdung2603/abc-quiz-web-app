import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Modal, notification, Spin } from "antd";
import { User } from "../../../../types/User/User";
interface CreateFormFields extends User {}

type FormProps = {
  initForm?: CreateFormFields;
  getAll: () => void;
  closeModal: () => void;
};

const defaultFormValues = {
  name: "",
  type: "",
  address: "",
  location: {
    longitude: 0,
    latitude: 0,
  },
};

const CUForm: React.FC<FormProps> = ({ initForm, getAll, closeModal }) => {
  const { control, reset, handleSubmit, setValue, watch } =
    useForm<CreateFormFields>({
      defaultValues: defaultFormValues,
    });

  // const location = watch("location");

  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    // console.log("data", data);
    try {
      if (initForm) {
        // API Update logic
      } else {
        // API Create logic
      }
      reset(defaultFormValues);
    } catch (err) {
      notification.error({ message: "Có lỗi xảy ra, vui lòng kiểm tra lại!" });
    }
  };

  return (
    <form
      method="POST"
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    ></form>
  );
};

export default CUForm;

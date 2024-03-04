import { StoryObj } from "@storybook/react";
import Label from "./Label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddItemFormValidation } from "views/components/form/formProps";

const validationSchema: any = AddItemFormValidation();
// react-hook-form
const {
  register,
  formState: { errors },
} = useForm({
  resolver: yupResolver(validationSchema),
});

// Form variables
const form = {
  register,
  errors,
};
const meta = {
  title: "Label",
  component: Label,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["input", "select", "search", "date"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    type: "input",
    common: {
      input: "input",
      label: "Label",
      defaultValue: "",
      placeholder: "Placeholder",
      showImportant: false,
    },
    form,
  },
};

export const Select: Story = {
  args: {
    type: "select",
    common: {
      input: "input",
      label: "Label",
      defaultValue: "",
      placeholder: "Placeholder",
      showImportant: false,
    },
    form,
    options: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
      { value: "4", label: "Four" },
      { value: "5", label: "Five" },
      { value: "6", label: "Six" },
    ],
  },
};

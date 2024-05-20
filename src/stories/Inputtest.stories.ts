import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputTest from "../components/input/inputtest";

const meta = {
  title: "Components/InputTest",
  component: InputTest,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text",
    value: "",
    disabled: false,
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text",
    value: "Disabled Input",
    disabled: true,
    size: "medium",
  },
};

import { StoryObj } from "@storybook/react";
import InputDropdow from "./inputdropdow"

const meta = {
    title: "Components/InputDropdow",
    component: InputDropdow,

    parmeters: {
        layout: "centered",
      },
    
      tags: ["autodocs"],
    
      argTypes: {
        backgroundColor: { control: 'color' },
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
        size: "small",
        arrow: false,
      },
    };
    
    export const Disabled: Story = {
      args: {
        type: "text",
        placeholder: "Enter your text",
        value: "Disabled Input",
        disabled: true,
        size: "medium",
        arrow: true,
      },
    };
    
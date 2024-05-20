import React from 'react'

    interface PropsInput {
        type: string
        placeholder?: string
        value: string
        disabled? : boolean
        size?: 'small' | 'medium' | 'large'
        onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void
        onMouseDown?:(e: React.MouseEvent<HTMLInputElement>) => void
        onSubmit?:(e: React.FormEvent<HTMLFormElement>) => void
        onKeyDown?:(e: React.KeyboardEvent<HTMLInputElement>) => void
        label?: string
    }

export default function InputTest(props: PropsInput) {
    let size = ''
    if (props.size === 'small'){
        size = 'px-2 py-1'
    } else if (props.size=== 'medium'){
        size = 'px-4 py-2'
    } else {
        size = 'px-6 py-3'
    }

  return (
    <div className="">
    {props.label && (
        <label className="input-label block text-sm font-medium text-gray-700 mb-1">
            {props.label}
        </label>
    )}
    <input

        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
        className={`content-center input-element border rounded-md shadow-sm focus:outline-none focus:ring-2 ${size}`}
    />
</div>
  )
}
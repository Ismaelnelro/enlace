import { ChangeEvent } from 'react';
import classNames from 'classnames';

type InputProps = {
  type: string;
  name: string;
  id: string;
  error: string | undefined;
  value: string;
  label: string;
  placeholder: string;
  onChange?: (e: ChangeEvent) => void;
  required?: boolean;
  autocomplete?: string;
  className?: string;
};
export default function Input({
  type,
  name,
  id,
  error,
  value,
  label,
  placeholder,
  required,
  autocomplete,
  onChange,
  className,
}: InputProps) {
  return (
    <>
      <div className="">
        <label
          className="relative top-3 px-2 py-1 font-medium bg-white text-xs text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className={classNames(
            className,
            'appearance-none border-2 border-gray-700 rounded-2xl  py-4 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline',
          )}
          name={name}
          id={id}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          required={required}
          autoComplete={autocomplete}
        />
      </div>
      <p className="text-sm pt-1 text-red-600">{error}</p>
    </>
  );
}

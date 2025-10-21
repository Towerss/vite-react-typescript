import React, { useId } from "react";

type TextFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  help?: string;
  className?: string;
};

const TextField = ({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  error,
  help,
  className,
}: TextFieldProps) => {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className="label">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        className="input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={help ? `${id}-help` : undefined}
      />
      {help && (
        <div id={`${id}-help`} className="help">
          {help}
        </div>
      )}
      {error && (
        <div role="alert" className="error">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;

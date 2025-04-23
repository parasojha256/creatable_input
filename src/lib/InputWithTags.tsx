import { useState, useEffect, KeyboardEvent, ChangeEvent } from "react";
import "./InputWithTag.css";

interface InputWithTagsProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string[];
  onChange: (tags: string[]) => void;
  onBlur?: () => void;
  validate?: (tags: string[]) => string | null;
  required?: boolean;
  maxTags?: number;
  className?: string;
  crossIcon?: React.ReactNode;
}
enum KEYS {
  ENTER = "Enter",
  BACKSPACE = "Backspace",
}
const VALIDATION_MESSAGE = "At least one tag is required.";

const InputWithTags = ({
  name,
  label,
  placeholder = "Add a tag...",
  value,
  onChange,
  onBlur,
  validate = () => null,
  required = false,
  maxTags = 10,
  className = "",
  crossIcon = "×",
}: InputWithTagsProps) => {
  const [input, setInput] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (touched) {
      const validationError =
        validate(value) ||
        (required && !value.length ? VALIDATION_MESSAGE : null);
      setError(validationError);
    }
  }, [value, touched, validate, required]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === KEYS.ENTER || e.key === ",") && input.trim()) {
      e.preventDefault();
      if (!value.includes(input.trim()) && value.length < maxTags) {
        onChange([...value, input.trim()]);
        setInput("");
      }
    } else if (e.key === KEYS.BACKSPACE && !input && value.length) {
      onChange(value.slice(0, -1));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    onBlur?.();
  };

  const removeTag = (index: number) => {
    const updatedTags = value.filter((_, i) => i !== index);
    onChange(updatedTags);
  };

  return (
    <div className={`tags-input-wrapper ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}

      <div
        className={`tags-input-container ${error ? "has-error" : ""}`}
        onBlur={handleBlur}
        tabIndex={0}
      >
        {value.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
            <span onClick={() => removeTag(index)}>{crossIcon}</span>
          </div>
        ))}
        <input
          id={name}
          type="text"
          value={input}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
      </div>

      {touched && error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputWithTags;

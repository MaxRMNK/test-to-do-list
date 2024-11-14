import React, {
  useRef,
  useEffect,
  TextareaHTMLAttributes,
  ChangeEvent,
} from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'big' | 'medium' | 'big_frame' | 'medium_frame';
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = props => {
  const { variant = 'big', value, onChange, className, ...otherProps } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Подстройка высоты текстового поля
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      className={clsx(className, classes.textarea, classes[variant])}
      // placeholder="Введите текст..."
      rows={1}
      spellCheck="false"
      wrap="soft"
      autoComplete="off"
      {...otherProps}
    />
  );
};

import React, { useState, useRef, useEffect } from 'react';

const AutoResizeTextarea: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  // Функция для автоматической подстройки высоты текстового поля
  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Сбрасываем высоту
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Устанавливаем новую высоту
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]); // Вызываем при изменении значения

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        style={{
          width: '100%',
          minHeight: '40px',
          resize: 'none', // Запрет изменения размера пользователем
          overflow: 'hidden', // Скрываем полосу прокрутки
          transition: 'all 0.2s ease', // Плавный переход при изменении высоты
        }}
        placeholder="Введите текст..."
      />
    </div>
  );
};

export default AutoResizeTextarea;

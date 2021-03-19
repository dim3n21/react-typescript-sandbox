import React from 'react';

type TitleProps = {
    btnTitle: string;
    title2?: string;
  };
  

const Form = ({ btnTitle }: TitleProps) => {
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
      console.log(e.currentTarget);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      console.log("submitted");
    };
  
    const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>): void => {
      console.log("copied");
    };
  
    const styles: React.CSSProperties = { margin: "100px" };
  
    return (
      <>
        <form style={styles} onSubmit={handleSubmit}>
          <label>
            Sample Form
            <input
              onFocus={handleFocus}
              onCopy={handleCopy}
              type='text'
              name='text'
            />
            <button type='submit'>{btnTitle}</button>
          </label>
        </form>
      </>
    );
  };

  export default Form;
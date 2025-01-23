import { forwardRef } from 'react';

import { A11yHidden, InputStyle, LabelStyle } from './FileInput.css';
import { FileInputProps } from '@/features/ImageUpload/types';
import Icon from '@/shared/ui/Icon/Icon';

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    { id = 'image', label = '이미지 업로드', variant, onChange, ...rest },
    ref,
  ) => {
    return (
      <div>
        <input
          type="file"
          className={InputStyle}
          id={id}
          name={id}
          ref={ref}
          onChange={onChange}
          accept="image/*"
          {...rest}
        />
        <label className={LabelStyle({ variant })} htmlFor={id}>
          <Icon name="image" />
          <span className={A11yHidden}>{label}</span>
        </label>
      </div>
    );
  },
);

FileInput.displayName = 'FileInput';

export default FileInput;

import React from 'react';
import { isEmpty } from 'lodash';
import { useValidationOnChange, Roles, Label, Hint } from '../common';
import { HintProps } from '../common/components/commonTypes';

type FormInputProps = {
  /**
   * input name
   **/
  name: string;
  /**
   * input type
   **/
  type: string;
  /**
   * input value
   **/
  value: any;
  /**
   * input label
   */
  label?: string;
  /**
   * pass the validation rules(please refer to forgJS) and the message you want to display
   **/
  validation?: { rule: any; message: string } | any;
  /**
   * input class name
   */
  inputClassName?: string;
  /**
   * input container class name
   */
  containerClassName?: string;
  /**
   * allow to style the container in case of error
   */
  containerClassNameError?: string;
  /**
   * input label class name
   */
  labelClassName?: string;
  /**
   * allow to customise the error message with all the properites needed
   **/
  errorProps?: any;
  /**
   * allow to customise the input with all the properites needed
   **/
  inputDivProps?: React.AllHTMLAttributes<HTMLDivElement>;
  /**
  /**
   * allow to customise the input with all the properites needed
   **/
  inputProps?: React.AllHTMLAttributes<HTMLInputElement>;
  /**
   * allow to customise the label with all the properites needed
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * generic parameter to pass whatever element before the input
   **/
  prefix?: {
    content?: JSX.Element | string;
    properties: React.HTMLAttributes<HTMLDivElement>;
  };
  /**
   * generic parameter to pass whatever element after the input
   **/
  suffix?: {
    content?: JSX.Element | string;
    properties: React.HTMLAttributes<HTMLDivElement>;
  };
  /**
   * function that will trigger all the time there's a change in the input
   **/
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  /**
   * function that will check if is vald or not based on the validation rules
   **/
  isValid?: (valid: boolean, errorMessageVisible?: boolean) => void;
  /**
   * error message
   **/
  errorMessage?: any;
  /**
   * allow to specify an error message coming from another source
   */
  staticErrorMessage?: string;
  /**
   * error position - top or bottom
   **/
  errorPosition?: ErrorPosition;
  /**
   * input ariaLabel
   **/
  ariaLabel?: string;
  /**
   * you can trigger to display an error without interact with the component
   */
  displayError?: boolean;
  /**
   * allow to define an hint
   */
  hint?: HintProps;
};

export enum ErrorPosition {
  BEFORE_LABEL = 'before-label',
  BOTTOM = 'bottom',
  AFTER_LABEL = 'after-label',
}

export const FormInput = ({
  name,
  type,
  value,
  label,
  validation = null,
  inputProps,
  labelProps,
  errorProps,
  prefix,
  suffix,
  onChange,
  isValid,
  errorMessage,
  staticErrorMessage,
  errorPosition,
  ariaLabel,
  displayError = false,
  inputClassName,
  containerClassName,
  containerClassNameError,
  labelClassName,
  hint,
  inputDivProps = { style: { display: 'flex' } },
}: FormInputProps) => {
  const { validity, onValueChange } = useValidationOnChange(validation, value);

  const [showError, setShowError] = React.useState<boolean>(displayError);

  React.useEffect(() => {
    if (isValid && validity)
      isValid(validity.valid, showError && !validity.valid);
    // eslint-disable-next-line
  }, [validity?.valid, showError]);

  React.useEffect(() => {
    setShowError(displayError);
  }, [displayError]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setShowError(true);
    if (onValueChange) onValueChange(event);
    if (onChange) onChange(event);
  };

  const ErrorMessage = () => (
    <div {...errorProps}>
      {staticErrorMessage !== undefined ? (
        <div role={Roles.error} {...errorMessage}>
          {staticErrorMessage}
        </div>
      ) : validity && !validity.valid && showError ? (
        <div role={Roles.error} {...errorMessage}>
          {validity.message}
        </div>
      ) : null}
    </div>
  );

  const isStaticOrDynamicError = (): boolean =>
    staticErrorMessage === undefined ||
    (validity && !validity.valid && showError) ||
    false;

  return (
    <div
      className={`${containerClassName} ${
        isStaticOrDynamicError() ? '' : containerClassNameError
      }`.trim()}
    >
      {errorPosition && errorPosition === ErrorPosition.BEFORE_LABEL && (
        <ErrorMessage />
      )}
      <Label
        label={label}
        labelProperties={labelProps}
        htmlFor={inputProps?.id}
        className={labelClassName}
      />
      {errorPosition && errorPosition === ErrorPosition.AFTER_LABEL && (
        <ErrorMessage />
      )}
      {hint && hint.position === 'above' && <Hint {...hint} />}
      {prefix || suffix ? (
        <div {...inputDivProps}>
          {prefix && !isEmpty(prefix) && (
            <div {...prefix.properties}>{prefix.content}</div>
          )}
          <input
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            className={inputClassName}
            aria-label={ariaLabel || name}
            {...inputProps}
          />
          {suffix && !isEmpty(suffix) && (
            <div {...suffix.properties}>{suffix.content}</div>
          )}
        </div>
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          className={inputClassName}
          aria-label={ariaLabel || name}
          {...inputProps}
        />
      )}
      {hint && hint.position !== 'above' && <Hint {...hint} />}
      {errorPosition && errorPosition === ErrorPosition.BOTTOM && (
        <ErrorMessage />
      )}
    </div>
  );
};

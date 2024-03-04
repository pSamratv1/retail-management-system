import { FormSpanError } from "../helpers/components/common";
import { getFormErrorMsg } from "../utils/methods/formMethods";

// Define the structure of the controls that we need as a interface/type
export interface LabelProps {
  type: "input" | "select" | "search" | "date";
  options: {
    value: string;
    lable: string;
  }[];
  common: {
    input: string;
    label: string;
    defaultValue: string;
    placeholder: string;
    showImportant: boolean;
    icon?: any;
  };
  actions?: {
    handleClick: () => void;
    handleKeyUp: () => void;
    handleKeyDown: () => void;
    handleOnChange: () => void;
  };
  form: any;
  css?: {
    divCss: string;
    labelCss: string;
    inputCss: string;
    errorCss: string;
  };
}

// Construct a function based component for component and pass the props as the type of specific component
const Label: React.FC<LabelProps> = (props) => {
  // Props
  const { type, common, actions, form, css, options } = props;
  // Props variables
  const { input, label, defaultValue, placeholder, showImportant, icon } =
    common;
  const { register, errors } = form;
  const { handleClick, handleKeyUp, handleKeyDown, handleOnChange } =
    actions! || {};
  const { divCss, labelCss, inputCss, errorCss } = css! || {};
  // Values
  const errorMsg = getFormErrorMsg(errors, input);
  // Css
  const highlightBorder =
    "border focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
  const errorBorder =
    "border border-red-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400";
  const border = errorMsg ? errorBorder : highlightBorder;

  // Final Css
  const finalDivCss =
    divCss ??
    " relative h-[75px] pt-1 flex flex-col gap-2 text-[11px] text-dark-100 w-11/12 w-full px-2";
  const finalLabelCss = labelCss ?? "font-medium flex gap-2 text-sm px-2";
  const finalInputCss =
    inputCss ??
    "bg-input-100 rounded-md relative h-[2.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center  w-full";

  // Error Props
  const errorProps = {
    css: {
      customCss:
        errorCss ??
        "absolute top-[66px] text-red-400 text-[11px] leading-tight",
    },
    title: errorMsg,
  };
  return (
    <>
      {type === "input" && (
        <div className={`${finalDivCss} px-2 min-w-[150px]`}>
          {label && (
            <label className={finalLabelCss} htmlFor={input}>
              {label} {showImportant && <span className="text-red-400">*</span>}
            </label>
          )}
          {icon && icon}
          <input
            id={input}
            {...(register && register(input))}
            className={`${border} ${finalInputCss}`}
            type="text"
            placeholder={placeholder}
            key={input}
            defaultValue={defaultValue ?? ""}
            onClick={handleClick}
            onChange={handleOnChange}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
          />
          {errorMsg && <FormSpanError {...errorProps} />}
        </div>
      )}
      {type === "select" && (
        <div className={`${finalDivCss}`}>
          {label && (
            <label className={finalLabelCss} htmlFor={input}>
              {label} {showImportant && <span className="text-red-400">*</span>}
            </label>
          )}
          <div className="flex">
            <select
              id={`${input}-select`}
              {...register(input)}
              className={`${finalInputCss} ${border}` + "[&>*]:p-8 w-20"}
              type="text"
              placeholder={placeholder}
              key={`${input}-select`}
              defaultValue={defaultValue || ""}
              onClick={handleClick}
              onChange={handleOnChange}
              onKeyUp={handleKeyUp}
              onKeyDown={handleKeyDown}
            >
              {options?.map((item: any, idx: number) => (
                <option
                  key={`${idx}. ${item.value}`}
                  value={item.value}
                  className="flex px-2 py-3 w-full h-6"
                >
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          {errorMsg && <FormSpanError {...errorProps} />}
        </div>
      )}
    </>
  );
};

export default Label;

import React from "react";

const TextField = ({ label, labelFor, error = null, ...rest }) => {
  return (
    <div className="tw-flex tw-flex-col tw-px-1 tw-py-2">
      <div className="tw-w-full tw-text-left ">
        <label htmlFor={labelFor} className="tw-text-base">
          {label}
        </label>
      </div>
      <div className="tw-w-full">
        <input
          {...rest}
          className="tw-w-full tw-border tw-border-1 tw-pl-1 tw-text-base tw-py-3"
        />
      </div>
      {error && (
        <div className="tw-w-full tw-text-left tw-text-red-500 tw-text-xs tw-pt-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;

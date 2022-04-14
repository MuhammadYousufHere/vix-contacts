import React from "react";
import PropTypes from "prop-types";
import classname from "classname";
const TextInput = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        className={classname("is-invalid form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
      />
      {/* conditional */}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  type: "text",
};
export default TextInput;

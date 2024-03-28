const FormInput = ({ label, name, type, defaultValue, size, placeholder='',required = false }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        placeholder={placeholder}
        required = {required}
      />
    </div>
  );
};
export default FormInput;

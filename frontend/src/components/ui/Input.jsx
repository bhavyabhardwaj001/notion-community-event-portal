import React from 'react';

const Input = React.forwardRef(({ label, error, className = '', ...props }, ref) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label className="mb-1.5 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          px-3 py-2 bg-gray-50 border rounded-md text-sm transition-all outline-none
          ${error 
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
            : 'border-gray-200 hover:border-gray-300 focus:border-gray-900 focus:bg-white focus:ring-1 focus:ring-gray-900'
          }
        `}
        {...props}
      />
      {error && (
        <span className="mt-1 text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

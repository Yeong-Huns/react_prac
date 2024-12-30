export const NumberInput = ({value, placeholder, onChange}) => (
    <input
        className={'w-full border border-gray-300 rounded-md p-4'}
        placeholder={placeholder}
        type={'number'}
        value={value}
        onChange={onChange}/>
)
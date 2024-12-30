export const TextInput = ({value, placeholder, onChange}) => (
    <input
        className={'w-full border border-gray-300 rounded-md p-4'}
        placeholder={placeholder}
        type={'text'}
        value={value}
        onChange={onChange}/>
)


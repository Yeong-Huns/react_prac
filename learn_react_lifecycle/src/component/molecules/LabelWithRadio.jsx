export const LabelWithRadio = ({option, checked, onChange}) => {

    return (
        <label key={option}>
            <input
                type={'radio'}
                value={option}
                checked={checked}
                onChange={onChange}
            />
            {option || 'NONE'}
        </label>
    )
}
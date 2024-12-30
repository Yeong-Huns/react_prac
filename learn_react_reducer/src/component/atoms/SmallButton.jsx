export const SmallButton = ({buttonName, onClick}) => (
    <button
        className={'text-xl font-bold bg-gray-300 rounded-lg p-2'}
        onClick={onClick}
    >{buttonName}</button>
)
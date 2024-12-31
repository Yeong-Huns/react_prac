export const SmallButton = ({buttonName, onClick}) => (
    <button className={'bg-gray-200 rounded-lg font-semibold p-4'}
            onClick={onClick}>
        {buttonName}
    </button>
)
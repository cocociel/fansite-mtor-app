interface TagButtonProps {
    name: string,
    color: string,
}

export const TagButton: React.FC<TagButtonProps> = ({ name, color }) => {
    return (
        <button
            className="
                font-['Noto_Sans_Japanese']
                text-base
                px-4
                py-2
                mx-1
                my-1
                rounded-full
                font-normal
                items-center
                transition-all
                duration-200
                text-black
            "
            style={{
                backgroundColor: color
            }}
        >
            {name}
        </button >
    );
};

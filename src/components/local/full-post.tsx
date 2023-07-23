interface Props {
        id: string;
        slug: string;
        time: string;
        title: string;
        content: string;
}

export const FullPost: React.FC<Props> = ({
        content,
        time,
        title,
        slug,
}: Props) => {
        return (
                <div className="flex flex-col w-full max-w-5xl py-8">
                        <h1 className="font-black text-white text-[54px] mb-6">
                                {title}
                        </h1>
                        <time className="mb-4 text-brand-text">{time}</time>
                        <p className="text-brand-text">{content}</p>
                </div>
        );
};

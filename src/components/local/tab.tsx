interface TabProps {
        active: boolean;
        label: string;
}

import clsx from "clsx";

export const Tab = ({ active, label }: TabProps) => {
        return (
                <button
                        type="button"
                        className={
                                "flex flex-col flex-1 justify-center items-center relative"
                        }
                >
                        <span
                                className={clsx(
                                        "text-base font-bold text-brand-title transition-colors duration-200 ease-in-out",
                                        {
                                                "text-brand-text": !active,
                                        }
                                )}
                        >
                                {label}
                        </span>
                        {active && (
                                <div className="absolute flex bottom-[-4px] w-[59px] h-1 bg-brand-yellow rounded-tl-[10px] rounded-tr-[10px]"></div>
                        )}
                </button>
        );
};

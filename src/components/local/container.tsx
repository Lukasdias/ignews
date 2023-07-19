import { twJoin } from "tailwind-merge";

interface ContainerProps {
        children: React.ReactNode;
        className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
        return (
                <div
                        className={twJoin(
                                "w-screen h-screen flex flex-col overflow-x-hidden overflow-y-auto flex-1 bg-brand-background",
                                className
                        )}
                >
                        {children}
                </div>
        );
};

export const Wrapper = ({ children, className }: ContainerProps) => {
        return (
                <div
                        className={twJoin(
                                "w-full flex flex-1 justify-between items-center sm:max-w-2xl md:max-w-4xl lg:max-w-5xl  2xl:max-w-7xl mx-auto px-4 sm:px-10",
                                className
                        )}
                >
                        {children}
                </div>
        );
};

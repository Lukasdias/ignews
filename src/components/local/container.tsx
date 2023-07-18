interface ContainerProps {
        children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
        return (
                <div className="w-screen h-screen flex flex-col overflow-x-hidden overflow-y-auto flex-1 bg-brand-background">
                        {children}
                </div>
        );
};

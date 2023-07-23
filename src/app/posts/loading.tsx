import { Loader2 } from "lucide-react";

export default function Loading() {
        return (
                <div className="flex flex-col flex-1 justify-center items-center md:pt-20">
                        <div className="flex flex-col gap-3 m-auto justify-center items-center">
                                <p className="text-brand-text ">Loading...</p>
                                <Loader2 className="w-10 h-10 text-brand-text animate-spin" />
                        </div>
                </div>
        );
}

import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
}

export function formatUSD(number: number): string {
        const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
        });

        return formatter.format(number);
}

export function formatPostDate(date: Date): string {
        const dataFormatada = dayjs(date)
                .locale("pt-br")
                .format("D of MMMM of YYYY");
        return dataFormatada;
}

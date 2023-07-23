import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { twMerge } from "tailwind-merge";

dayjs.locale("pt-br");

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
                .format("D de MMMM de YYYY");
        return dataFormatada;
}

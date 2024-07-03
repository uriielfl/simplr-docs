import { AlertContext } from "@/contexts/alert";
import { useContext } from "react"

export const useAlert = () => {
    return useContext(AlertContext);
}
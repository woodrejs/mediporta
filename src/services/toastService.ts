import { toast, ToastOptions } from "react-toastify";

type ToastHandler = (body: unknown, options?: ToastOptions) => void;

const showToast: ToastHandler = (body, options) => {
    const message = typeof body === "string" ? body : "An unknown error has occurred";

    toast(message, {
        toastId: message,
        autoClose: 6000,
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        draggable: false,
        ...options,
    });
};

export const showSuccessToast: ToastHandler = (body, options) => {
    showToast(body, {
        type: "success",
        ...options,
    });
};
export const showWarningToast: ToastHandler = (body, options) => {
    showToast(body, {
        type: "warning",
        ...options,
    });
};
export const showErrorToast: ToastHandler = (body, options) => {
    showToast(body, {
        type: "error",
        autoClose: 20000,
        ...options,
    });
};

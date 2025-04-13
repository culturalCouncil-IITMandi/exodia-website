"use client"

import { Toaster } from "react-hot-toast"

export const ToasterProvider = () => <Toaster position="bottom-right" toastOptions={{ style: { zIndex: 9999 } }} />
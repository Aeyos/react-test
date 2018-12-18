//                        |  A-z   Latin characters                       Space |
export const nameRegex = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/;
export const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
export const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

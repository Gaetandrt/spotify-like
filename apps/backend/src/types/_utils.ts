export interface ApiResponse<T> {
    status: 'success' | 'error';
    statusCode: number;
    data?: T;
    errorCode?: string;
    details?: ErrorDetails;
    path: string;
}
interface ErrorDetails {
    fields: Record<string, FieldError>;
}

interface FieldError {
    code: string;    // Code d'erreur pour le champ
    target: string;  // Champ ciblé par l'erreur
}

export type AutcompleteData = {
    label: string,
    value: string
}
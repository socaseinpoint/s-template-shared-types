export interface FrontendBMessage {
    type: 'UPDATE' | 'DELETE';
    payload: {
        itemId: string;
        changes?: Record<string, unknown>;
        timestamp: string;
    };
}
//# sourceMappingURL=FrontendB.d.ts.map
declare const isPending: () => boolean;
declare const startTransition: (work: () => void) => void;
declare const flushQueue: (deadline?: IdleDeadline) => void;
declare const batch: (limit?: number) => (_callback: () => any) => (flush: boolean) => boolean;

export { batch as b, flushQueue as f, isPending as i, startTransition as s };

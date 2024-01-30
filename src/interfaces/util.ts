export type Maybe<T> = {
  success: true
  value: T
} | {
  success: false
  message: string
};

export function isMaybe<T>(value: unknown): value is Maybe<T> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  if ('success' in obj && typeof obj.success === 'boolean') {
    if (obj.success === true) {
      return 'value' in obj;
    } else if (obj.success === false) {
      return 'message' in obj && typeof obj.message === 'string';
    }
  }

  return false;
}

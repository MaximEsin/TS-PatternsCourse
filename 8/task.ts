function toString<T>(data: T): string | undefined {
  if (typeof data == 'string') {
    return data;
  } else if (typeof data == 'number' || typeof data == 'boolean') {
    return String(data);
  } else if (Array.isArray(data)) {
    data.toString();
  } else if (typeof data == 'object') {
    return JSON.stringify(data);
  } else {
    return undefined;
  }
}

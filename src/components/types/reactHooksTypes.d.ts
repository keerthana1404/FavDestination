type UseStateUpdationValueType<T> = (_item: T | ((_preVal: T) => T)) => void;

export { UseStateUpdationValueType };

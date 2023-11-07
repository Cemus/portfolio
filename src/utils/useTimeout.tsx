type TimeoutFunc = (event: Event) => void;

const useTimeout = (func: TimeoutFunc, milliseconds?: number) => {
  const time = milliseconds || 400;
  let timer: ReturnType<typeof setTimeout>;

  return (event: Event) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};

export default useTimeout;

import {
  FC,
  PropsWithChildren,
  ReactElement,
  createContext,
  useState,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<
  PropsWithChildren
> = (props): ReactElement => {
  const [updated, setUpdated] = useState(false);

  function togglerHandler() {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TaskStatusChangedContext.Provider
      value={{
        updated: updated,
        toggle: togglerHandler,
      }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};

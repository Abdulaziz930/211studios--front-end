import { mainAPI } from "../api";
import { useEffect, useState, useCallback } from "react";
import { IAsyncData } from "../models/models";
import { INITIAL_ASYNC_DATA } from "../utils/consts";

export function useAsyncData<T>(url: string): [IAsyncData<T>, () => void] {
  const [data, setData] = useState<IAsyncData<T>>(INITIAL_ASYNC_DATA);

  const getData = useCallback(() => {
    if (!!url) {
      mainAPI
        .get<T>(url)
        .then(({ data }) => {
          setData((oldData) => ({ ...oldData, data, error: undefined }));
        })
        .catch((error) => {
          setData({ data: undefined, error: error.toString() });
        });
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [data, getData];
}

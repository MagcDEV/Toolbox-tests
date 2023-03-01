import { setFiles, startLoadingFiles } from "./filesSlice";
import { setList, startLoadingList } from "./listSlice";

export const getFiles = (fileName = "") => {
  return async (dispatch, getState) => {
    dispatch(startLoadingFiles());

    const resp = fetch(`http://localhost:3000/files/data?fileName=${fileName}`);

    const data = await (await resp).json();

    dispatch(setFiles({ files: data }));
  };
};

export const getList = (fileName = "") => {
  return async (dispatch, getState) => {
    dispatch(startLoadingList());

    const resp_list = fetch("http://localhost:3000/files/list");

    const data_list = await (await resp_list).json();

    dispatch(setList({ list: data_list.files }));
  };
};
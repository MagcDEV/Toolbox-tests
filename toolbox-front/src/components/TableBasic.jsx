import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, getList  } from "../store/slices/thunks";
import { TableLineFile } from "./TableLineFile.jsx";
import Form from "react-bootstrap/Form";
import { OptionsFiles } from "./OptionsFiles.jsx";

export const TableBasic = () => {
  const dispatch = useDispatch();

  const { isLoading, files } = useSelector((state) => state.files);
  const { isLoadingList, list } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getFiles());
    dispatch(getList());
  }, []);

  return (
    <>
      {isLoadingList ? (
        <div className="mt-2">Loading list ... Please wait</div>
      ) : (
        <Form.Select
          className="w-25 mt-2"
          placeholder="Filtrar por nombre de archivo"
          onChange={(event) => dispatch(getFiles(event.target.value))}
          aria-label="select_file"
          disabled={isLoading}
        >
          <option value="">Show All Files</option>;
          {list.map((file) => {
            return <OptionsFiles key={file} file={file} />;
          })}
        </Form.Select>
      )}
      {isLoading ? (
        <div className="mt-2">Loading Table ... Please wait</div>
      ) : (
        <>
          <Table className="mt-2" striped bordered hover>
            <thead>
              <tr>
                <th>File</th>
                <th>text</th>
                <th>number</th>
                <th>hex</th>
              </tr>
            </thead>
            <tbody>
              {files.map((csv) => {
                return <TableLineFile key={csv.file} csv={csv} />;
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

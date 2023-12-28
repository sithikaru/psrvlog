import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const UsersTable = ({ rows, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="border bg-white shadow-xl p-8 rounded-lg text-center hover:shadow-[#87f8cd6d] hover:shadow-2xl">
          {/* <Paper elevation={3} className="p-4 "> */}
            <h1 className="font-extrabold text-6xl text-center ">Users List</h1>
            <TableContainer>
              {rows.length > 0 ? (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>
                          <button className="px-2 py-1 rounded-3xl text-white text-md font-semibold bg-emerald-500 opacity-70 hover:scale-110 hover:opacity-100 transition-all ">
                            Update 🔃
                          </button>
                        </TableCell>
                        <TableCell>
                          <button
                            onClick={() => handleDelete(row.id)}
                            className="px-2 py-1 rounded-3xl text-white text-md font-semibold bg-orange-700 opacity-70 hover:scale-110 hover:opacity-100 transition-all "
                          >
                            Delete 🚮
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="w-full text-center">
                  <hr className="mt-2" />
                  <h1 className="mx-auto text-gray-400 font-bold my-3">
                    No Users Added
                  </h1>

                  <h1 className="mx-auto text-xs text-gray-400 font-bold my-3">
                    Go up to add users!
                  </h1>
                  <hr />
                </div>
              )}
            </TableContainer>
          {/* </Paper> */}
        </div>
      </div>
    </div>
  );
};

export default UsersTable;

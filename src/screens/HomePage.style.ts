import {
  Box,
  TableBody as MuiTableBody,
  TablePagination as MuiTablePagination,
} from "@mui/material";

import styled from "@emotion/styled";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;
export const TablePagination = styled(MuiTablePagination)`
  border-bottom: none;
`;
export const TableBody = styled(MuiTableBody)`
  height: 300px;
`;

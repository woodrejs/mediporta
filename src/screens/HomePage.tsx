import {
  Box,
  Paper,
  Table,
  TableBody as MuiTableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TablePaginationProps,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { Params, useGetTags } from "../react-query/useGetTags";
import React from "react";
import styled from "@emotion/styled";
import { Loader } from "../components/Loader";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;
const TableBody = styled(MuiTableBody)`
  height: 300px;
`;

const normalizePageNumber = (page: number) => {
  const pageShift = 1;
  return page + pageShift;
};

export const HomePage = () => {
  const [sortBy, setSortBy] = React.useState<Params["sort"]>("name");
  const [sortOrder, setSortOrder] = React.useState<Params["order"]>("asc");
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const { data, isFetching } = useGetTags({
    page: normalizePageNumber(page),
    pagesize: pageSize,
    sort: sortBy,
    order: sortOrder,
  });

  const onPageChange: TablePaginationProps["onPageChange"] = (_, page) => {
    setPage(page);
  };
  const onRowsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize(parseInt(e.target.value, 10));
  };
  const onSort = (by: Params["sort"]) => {
    setSortBy(by);
    setSortOrder((prev) => (prev == "asc" ? "desc" : "asc"));
  };

  return (
    <Container>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={data?.quota_max || 0}
        rowsPerPage={pageSize}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  direction={sortOrder}
                  active={sortBy === "name"}
                  onClick={() => onSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  direction={sortOrder}
                  active={sortBy === "popular"}
                  onClick={() => onSort("popular")}
                >
                  Count
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {!data && !isFetching ? (
              <TableCell colSpan={2} align="center">
                No tags
              </TableCell>
            ) : null}
            {isFetching ? (
              <TableCell colSpan={2}>
                <Loader />
              </TableCell>
            ) : null}
            {data
              ? data?.items.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell colSpan={1}>{item.name}</TableCell>
                    <TableCell colSpan={1}>{item.count}</TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
